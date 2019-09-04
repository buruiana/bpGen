import React from "react";
import get from "lodash/get";
import SortableTree, {
  removeNodeAtPath,
  getVisibleNodeCount
} from "react-sortable-tree";
import isEmpty from "lodash/isEmpty";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinusCircle,
  faArrowCircleRight
} from "@fortawesome/free-solid-svg-icons";

import { getDafaultTreeData, getForms, getBlocks } from "./helper";
import { allmodals } from "../../../utils/constants";
import { navigate } from "../../../utils";

const externalNodeType = "yourNodeType";
const shouldCopyOnOutsideDrop = true;
const getNodeKey = ({ treeIndex }) => treeIndex;

const TemplatesForm = props => {
  console.log("console: -----------", props);
  const { jsonForm, setTemplateTree, addModal, templates, tree } = props;
  const currentTemplate = templates.filter(
    template => template.id === props.match.params.id
  )[0];

  console.log("console: currentTemplate", currentTemplate);
  const convertSortableTree2JsonSchema = treeData => {
    console.log("console: treeData", treeData);
  };

  const convertJsonSchema2SortableTree = () => {
    let tree = [];
    let treeObj = {
      title: get(currentTemplate, "title", ""),
      subtitle: "Template",
      expanded: true,
      children: []
    };

    if (currentTemplate && !isEmpty(currentTemplate.templateFiles)) {
      currentTemplate.templateFiles.map(file => {
        treeObj.children.push({
          title: file.fileName,
          subtitle: "File",
          expanded: true,
          children: [
            {
              title: "File Forms",
              subtitle: "File Forms Wrapper",
              children: getForms(file.fileForms),
              expanded: true
            },
            {
              title: "File Blocks",
              subtitle: "File Blocks Wrapper",
              children: getBlocks(file.fileBlocks),
              expanded: true
            }
          ]
        });
      });
    }
    console.log('console: treeObj', treeObj);
    tree.push(treeObj);
    console.log('console: tree', tree);
    return tree;
  };

  let treeData = [];
  if (isEmpty(tree[0].children)) {
    treeData = convertJsonSchema2SortableTree();
    console.log("console: 33333333", treeData);
    setTemplateTree(treeData);
  }

  const remove = path => {
    const newTree = removeNodeAtPath({
      treeData: jsonForm,
      path,
      getNodeKey
    });
    setTemplateTree(newTree);
  };

  const onChange = treeData => {
    setTemplateTree(treeData);
  };

  const validateTemplate = treeData => {
    const isTemplate = (treeData[0].subtitle =
      "Template" && treeData.length === 1);
    const hasFiles = !isEmpty(treeData[0].children);

    return isTemplate && hasFiles;
  };

  const log = type => console.log.bind(console, type);
  const count =
    getVisibleNodeCount({ treeData }) > 1
      ? getVisibleNodeCount({ treeData })
      : 800;

  const goTo = () => navigate("/templates");
  const saveTemplate = () => {
    const tree = validateTemplate(treeData)
      ? convertSortableTree2JsonSchema(treeData)
      : [];
  };

  const hasEdit = node => {
    return (
      node.subtitle !== "File Forms Wrapper" &&
      node.subtitle !== "File Blocks Wrapper"
    );
  };

  return (
    <div>
      <div>
        <a onClick={goTo} className="leftLink">
          <i className="fas fa-backward point" />
        </a>
        <a onClick={saveTemplate} className="simpleLink rightLink">
          <i className="fas fa-save point" />
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
