import React from "react";
import Alert from "react-bootstrap/Alert";
import SortableTree, { removeNodeAtPath } from "react-sortable-tree";
import sortBy from "lodash/sortBy";
import has from "lodash/has";
import get from "lodash/get";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faMinusCircle,
  faAdjust
} from "@fortawesome/free-solid-svg-icons";
import Ace from "../AceEditor";
import isEmpty from "lodash/isEmpty";
import { fillNodeData } from "../../../services/sortableTreeService/helper";
import GenericSearchForm from "../../forms/GenericSearchForm";
import { availablecomponents, allmodals } from "../../../utils/constants";
import Preview from "../Preview";

import { replaceUndefined } from '../../../utils';

import "react-sortable-tree/style.css";

const externalNodeType = "yourNodeType";
const shouldCopyOnOutsideDrop = true;
const getNodeKey = ({ treeIndex }) => treeIndex;

const Editor = props => {
  const {
    projectSettings,
    addModal,
    //tree,
    providers,
    setTree,
    searchData,
    projectError,
    setCustomForm,
    generateCode,
    forms,
    setNodePath,
    configs,
    setProject,
    currentTemplate,
  } = props;

  const { tree } = forms;

  let components = props.components || [];
  components = components.filter(e => e.isActive);

  const renderAce = () => {
    return !isEmpty(projectSettings) ? <Ace /> : null;
  };

  const openModal = (type, node, path) => {
    setNodePath({ node, path });
    addModal(type, { node, path });
  };

  const setNewTree = treeData2 => {
    setTree({ treeData2 });
    const newForms = {
      ...forms,
      tree: treeData2
    };

    setCustomForm(newForms);
    generateCode();
  };
  const onChange = treeData => {
    if (treeData.length === 1) setNewTree(fillNodeData(treeData, providers));
  };
  const remove = path => {
    const newTree = {
      treeData2: removeNodeAtPath({
        treeData: tree,
        path,
        getNodeKey
      })
    };
    setNewTree(fillNodeData(newTree.treeData2, providers));
  };

  const filteredDefaultTree = () => {
    const filteredTree = components.filter(el => {
      if (has(searchData, 'name')) {
        return (
          el.title
            .toLowerCase()
            .indexOf(searchData.name.toLowerCase()) !== -1 &&
          get(searchData, "techno", el.techno) === el.techno &&
          get(searchData, "provider", el.provider) === el.provider
        );
      }
      return (
        get(searchData, "provider", el.provider) === el.provider &&
        get(searchData, "techno", el.techno) === el.techno
      );
    });

    return sortBy(filteredTree, el => el.title);
  };

  const renderSearchField = () => {
    return <GenericSearchForm componentname={availablecomponents.COMPONENTS} />;
  };

  const renderError = () => {
    const shortErr = projectError.slice(
      projectError.indexOf("<pre>") + 5,
      projectError.indexOf("<br>")
    );

    if (projectError) {
      return (
        <Alert>
          <div>{shortErr}</div>
        </Alert>
      );
    }
    return null;
  };

  const saveProject = () => {
    const cleanForms = replaceUndefined(forms);
    setProject({
      // tree,
      // projectSettings,
      forms
    });
  };

  const returnComponentBlock = () => {
    return (
      <div className="paddingTop">
        <div className='linkConrtainer'>
          <a onClick={saveProject} className="simpleLink rightLink">
            Save Project
        </a>
        </div>
        {renderError()}
        <div>{renderSearchField()}</div>
        <div>
          <div
            style={{
              height: 800,
              width: "25%",
              float: "left"
            }}
          >
            <SortableTree
              treeData={filteredDefaultTree()}
              onChange={() => console.log("changed")}
              dndType={externalNodeType}
              shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
              generateNodeProps={({ node, path }) => ({
                buttons: [
                  <FontAwesomeIcon
                    className="componentInfoIcon"
                    icon={faInfoCircle}
                    onClick={() =>
                      openModal(allmodals.COMPONENT_INFO, node, path)
                    }
                  />
                ]
              })}
            />
          </div>
          <div
            style={{
              height: 800,
              width: "35%",
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
                  <FontAwesomeIcon
                    className="componentInfoIcon"
                    icon={faAdjust}
                    onClick={() =>
                      openModal(allmodals.COMPONENT_PROPS, node, path)
                    }
                  />
                ]
              })}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {!isEmpty(projectSettings) && currentTemplate.templateIsComponent && returnComponentBlock()}
      {renderAce()}
      {!isEmpty(projectSettings) && !isEmpty(tree) && configs.hasComponentPreview && <Preview />}
    </div>
  );
};

export default Editor;
