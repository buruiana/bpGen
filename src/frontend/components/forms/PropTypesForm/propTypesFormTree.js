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

const PropTypesFormTree = props => {
  const {
    userid,
    setPropTypeTree,
    addModal,
    propTypes,
    tree,
    setPropType
  } = props;

  const goTo = () => {
    setPropTypeTree([{
      title: '',
      subtitle: 'PropType',
      expanded: true,
      children: [],
    }]);
    navigate("/propTypes");
  }

  const remove = path => {
    const newTree = removeNodeAtPath({
      treeData: tree,
      path,
      getNodeKey
    });
    setPropTypeTree(newTree);
  };

  const onChange = treeData => setPropTypeTree(treeData);

  const log = type => console.log.bind(console, type);
  const count =
    getVisibleNodeCount({ treeData: tree }) > 1
      ? getVisibleNodeCount({ treeData: tree})
      : 800;


  const savePropType = () => {
    setPropType({ ...convertSortableTree2JsonSchema(tree), userid });
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
        <a onClick={savePropType} className="simpleLink rightLink">
          Save PropType
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
                  className="propTypeInfoIcon"
                  icon={faMinusCircle}
                  onClick={() => remove(path)}
                />,
                hasEdit(node) && (
                  <FontAwesomeIcon
                    className="propTypeInfoIcon"
                    icon={faArrowCircleRight}
                    onClick={() =>
                      addModal(allmodals.PROPTYPE_ITEM_PROPS, { node, path })
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

export default PropTypesFormTree;
