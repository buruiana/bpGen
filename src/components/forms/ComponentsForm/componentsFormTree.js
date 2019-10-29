import React from "react";
import SortableTree, {
  removeNodeAtPath,
  getVisibleNodeCount
} from "react-sortable-tree";
import isEmpty from "lodash/isEmpty";
import get from "lodash/get";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinusCircle,
  faArrowCircleRight
} from "@fortawesome/free-solid-svg-icons";

import {
  getDafaultTreeData,
  convertSortableTree2JsonSchema,
  convertJsonSchema2SortableTree
} from "./helper";
import { allmodals } from "../../../utils/constants";
import { navigate } from "../../../utils";

const externalNodeType = "yourNodeType";
const shouldCopyOnOutsideDrop = true;
const getNodeKey = ({ treeIndex }) => treeIndex;

const ComponentsFormTree = props => {
  const {
    jsonForm,
    setComponentTree,
    addModal,
    components,
    tree,
    setComponent
  } = props;

  if (isEmpty(get(tree, '[0].children', null))
    && props.match.params.id !== 'new'
    && !isEmpty(components)) {
    let currentComponent = components.filter(
      components => components.id === props.match.params.id
    )[0];

    setComponentTree(convertJsonSchema2SortableTree(currentComponent));
  }

  const goTo = () => {
    setComponentTree([{
      title: '',
      subtitle: 'Component',
      expanded: true,
      children: [],
    }]);
    navigate("/components");
  }

  const remove = path => {
    const newTree = removeNodeAtPath({
      treeData: tree,
      path,
      getNodeKey
    });
    setComponentTree(newTree);
  };

  const onChange = treeData => setComponentTree(treeData);

  const log = type => console.log.bind(console, type);
  const count =
    getVisibleNodeCount({ treeData: tree }) > 1
      ? getVisibleNodeCount({ treeData: tree})
      : 800;


  const saveComponent = () => {
    setComponent(convertSortableTree2JsonSchema(tree));
    goTo();
  };

  const hasEdit = node => {
    return (
      node.subtitle !== "File Forms Wrapper" &&
      node.subtitle !== "File Blocks Wrapper"
    );
  };

  return (
    <div>
      <div className='linkConrtainer'>
        <a onClick={goTo} className="simpleLink leftLink">Back</a>
        <a onClick={saveComponent} className="simpleLink rightLink">
          Save Component
        </a>
      </div>
      <div className="flex">
        <div
          style={{
            height: count * 65 + 100,
            width: "40%",
            float: "left"
          }}
        >
          <SortableTree
            treeData={getDafaultTreeData}
            onChange={() => console.log("changed")}
            dndType={externalNodeType}
            shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
          />
        </div>

        <div
          style={{
            height: count * 65 + 100,
            width: "60%",
            float: "left"
          }}
        >
          <SortableTree
            treeData={tree}
            onChange={onChange}
            dndType={externalNodeType}
            shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
            getNodeKey={getNodeKey}
            generateNodeProps={({ node, path }) => ({
              buttons: [
                <FontAwesomeIcon
                  className="componentInfoIcon"
                  icon={faMinusCircle}
                  onClick={() => remove(path)}
                />,
                hasEdit(node) && (
                  <FontAwesomeIcon
                    className="componentInfoIcon"
                    icon={faArrowCircleRight}
                    onClick={() =>
                      addModal(allmodals.COMPONENT_ITEM_PROPS, { node, path })
                    }
                  />
                )
              ]
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default ComponentsFormTree;
