import React from "react";
import SortableTree, {
  removeNodeAtPath,
  getVisibleNodeCount
} from "react-sortable-tree";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinusCircle,
  faArrowCircleRight
} from "@fortawesome/free-solid-svg-icons";

import {
  getDafaultTreeData,
  convertSortableTree2JsonSchema,
} from "./helper";
import { allmodals } from "../../../utils/constants";
import { navigate } from "../../../utils";

const externalNodeType = "yourNodeType";
const shouldCopyOnOutsideDrop = true;
const getNodeKey = ({ treeIndex }) => treeIndex;

const ComponentsFormTree = props => {
  const {
    userid,
    setComponentTree,
    addModal,
    tree,
    setComponent
  } = props;

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
    setComponent({ ...convertSortableTree2JsonSchema(tree), userid });
    goTo();
  };

  const hasEdit = node => {
    return (
      node.subtitle !== "File Forms Wrapper" &&
      node.subtitle !== "File Blocks Wrapper"
    );
  };

  return (
    <div className='page-wrapper'>
      <div className='linkConrtainer'>
        <a onClick={goTo} className="simpleLink leftLink">Back</a>
        <a onClick={saveComponent} className="simpleLink rightLink">
          Save Component
        </a>
      </div>
      <div className='row'>
        <div className='column50'
          style={{
            height: count * 65 + 100,
            float: 'left',
          }}
        >
          <SortableTree
            treeData={getDafaultTreeData}
            onChange={() => console.log("changed")}
            dndType={externalNodeType}
            shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
          />
        </div>
        <div className='column50'
          style={{
            height: count * 65 + 100,
            float: 'left',
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
