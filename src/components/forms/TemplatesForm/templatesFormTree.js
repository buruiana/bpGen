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

const TemplatesForm = props => {
  const {
    jsonForm,
    setTemplateTree,
    addModal,
    templates,
    tree,
    setTemplate
  } = props;

  if (isEmpty(get(tree, '[0].children', null))
    && props.match.params.id !== 'new'
    && !isEmpty(templates)) {
    let currentTemplate = templates.filter(
      template => template.id === props.match.params.id
    )[0];
    setTemplateTree(convertJsonSchema2SortableTree(currentTemplate));
  }

  const goTo = () => {
    setTemplateTree([{
      title: '',
      subtitle: 'Template',
      expanded: true,
      children: [],
    }]);
    navigate("/templates");
  }

  const hasFiles = !isEmpty(tree[0].children);
  const remove = path => {
    const newTree = removeNodeAtPath({
      treeData: tree,
      path,
      getNodeKey
    });
    setTemplateTree(newTree);
  };

  const onChange = treeData => setTemplateTree(treeData);

  const validateTemplate = () => {
    const isTemplate = (tree[0].subtitle =
      "Template" && tree.length === 1);
    // const hasFiles = !isEmpty(tree[0].children);

    return isTemplate && hasFiles;
  };

  const log = type => console.log.bind(console, type);
  const count =
    getVisibleNodeCount({ treeData: tree }) > 1
      ? getVisibleNodeCount({ treeData: tree})
      : 800;


  const saveTemplate = () => {
    const newTree = validateTemplate(tree)
      ? convertSortableTree2JsonSchema(tree)
      : [];

    setTemplate(newTree);
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
        <a onClick={saveTemplate} className="simpleLink rightLink">
          Save Template
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
                      addModal(allmodals.TEMPLATE_ITEM_PROPS, { node, path })
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

export default TemplatesForm;
