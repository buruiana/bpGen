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
  const { jsonForm, setTemplateTree, addModal, templates, tree, setTemplate } = props;

  const currentTemplate = templates.filter(
    template => template.id === props.match.params.id
  )[0];

  if (isEmpty(currentTemplate)) return null;
  console.log('console: currentTemplate', currentTemplate);
  const convertSortableTree2JsonSchema = treeData => {
    console.log("console: treeData", treeData[0]);
    let treeObj = {
      id: get(treeData[0], 'id', ''),
      name: treeData[0].name,
      templateDescription: treeData[0].templateDescription,
      templateFiles: treeData[0].templateFiles,
      templateIsActive: treeData[0].templateIsActive,
      templateIsComponent: treeData[0].templateIsComponent,
      templateName: treeData[0].templateName,
      templateTechnos: treeData[0].templateTechnos,
      userid: treeData[0].userid
    };
  };

  const convertJsonSchema2SortableTree = () => {
    let tree = [];
    let treeObj = {
      title: get(currentTemplate, "name", ""),
      subtitle: "Template",
      expanded: true,
      id: get(currentTemplate, 'id', ''),
      name: currentTemplate.name,
      templateDescription: currentTemplate.templateDescription,
      templateFiles: currentTemplate.templateFiles,
      templateIsActive: currentTemplate.templateIsActive,
      templateIsComponent: currentTemplate.templateIsComponent,
      templateName: currentTemplate.templateName,
      templateTechnos: currentTemplate.templateTechnos,
      userid: currentTemplate.userid,
      children: []
    };

    if (currentTemplate && !isEmpty(currentTemplate.templateFiles)) {
      currentTemplate.templateFiles.map(file => {
        treeObj.children.push({
          title: file.fileName,
          subtitle: "File",
          fileDescription: file.fileDescription,
          fileIsActive: file.fileIsActive,
          fileName: file.fileName,
          fileSequence: file.fileSequence,
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
    tree.push(treeObj);
    return tree;
  };

  let treeData = [];
  if (isEmpty(tree[0].children)) {
    treeData = convertJsonSchema2SortableTree();
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

  const onChange = treeData => setTemplateTree(treeData);

  const validateTemplate = () => {
    console.log('console: treeData', tree);
    const isTemplate = (tree[0].subtitle =
      "Template" && tree.length === 1);
    const hasFiles = !isEmpty(tree[0].children);

    return isTemplate && hasFiles;
  };

  const log = type => console.log.bind(console, type);
  const count =
    getVisibleNodeCount({ treeData }) > 1
      ? getVisibleNodeCount({ treeData })
      : 800;

  const goTo = () => navigate("/templates");
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
