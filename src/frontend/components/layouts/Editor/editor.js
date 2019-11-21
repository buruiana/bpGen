import React, { useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import SortableTree, {
  removeNodeAtPath,
  getVisibleNodeCount
} from "react-sortable-tree";
import sortBy from "lodash/sortBy";
import isEmpty from "lodash/isEmpty";
import get from "lodash/get";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faMinusCircle,
  faAdjust
} from "@fortawesome/free-solid-svg-icons";
import Ace from "../AceEditor";

import { fillNodeData } from "../../../services/sortableTreeService/helper";
import GenericSearchForm from "../../forms/GenericSearchForm";
import { availablecomponents, allmodals } from "../../../utils/constants";
import Preview from "../Preview";

import { navigate2Login } from '../../../utils';

import "react-sortable-tree/style.css";

const externalNodeType = "yourNodeType";
const shouldCopyOnOutsideDrop = true;
const getNodeKey = ({ treeIndex }) => treeIndex;

const Editor = props => {
  const {
    projectSettings,
    addModal,
    templates,
    providers,
    setProjectTree,
    searchData,
    projectError,
    setCustomForm,
    generateCode,
    forms,
    currentTemplate,
    isAuthenticated,
    currentProject,
    setProject,
  } = props;

  if (!isAuthenticated) navigate2Login();
  const { tree } = forms;
  const { projectName } = projectSettings;
  const openModal = (type, node, path) => {
    addModal(type, { node, path });
  };

  useEffect(() => {
    if (!projectName && !isEmpty(templates)) {
      addModal(allmodals.PROJECT_SETTINGS);
    }
  }, [projectName, templates]);

  let components = props.components || [];
  components = components.filter(e => e.isActive);

  const renderAce = () => {
    return !isEmpty(projectSettings) ? <Ace /> : null;
  };

  const setNewTree = tree => {
    setProjectTree(tree);
    const newForms = {
      ...forms,
      tree
    };

    setCustomForm(newForms);
    generateCode();
  };

  const onChange = treeData => {
    if (treeData.length === 1) setNewTree(fillNodeData(treeData, providers));
  };

  const remove = path => {
    const newTree =
      removeNodeAtPath({
        treeData: tree,
        path,
        getNodeKey
      });

    setNewTree(fillNodeData(newTree, providers));
  };

  const filteredDefaultTree = () => {
    const filteredComponents = components.filter(el => {
      if (!isEmpty(searchData) && searchData.title) {
        return (el.title.toLowerCase().indexOf(searchData.title.toLowerCase()) !== -1
          && get(searchData, 'provider', el.provider) === el.provider
          && get(searchData, 'techno', el.techno) === el.techno);
      }
      return (get(searchData, 'provider', el.provider) === el.provider
        && get(searchData, 'techno', el.techno) === el.techno);
    });

    return sortBy(filteredComponents, el => el.title);
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
    const templateTechno = templates
      .filter(e => e._id === forms.projectSettings.projectTemplate)
      .map(e => e.templateTechno);

    setProject({
      forms,
      title: forms.projectSettings.projectName,
      techno: templateTechno[0],
      _id: get(currentProject[0], '_id', null),
    });
  };

  const count =
    getVisibleNodeCount({ treeData: filteredDefaultTree() }) > 1
      ? getVisibleNodeCount({ treeData: filteredDefaultTree() })
      : 400;

  const onClickComponent = () => {

  };

  const returnComponentBlock = () => {
    return (
      <div>
        {renderError()}
        <div className='linkConrtainer'>
          <a onClick={saveProject} className="simpleLink rightLink">
            Save Project
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
          <div className='column50'>
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
    <div className='wrapper'>
      {!isEmpty(projectSettings) && <div>{renderSearchField()}</div>}
      <div className='row'>
        <div className='columnTree'>
          {!isEmpty(projectSettings) && currentTemplate.templateIsComponent && returnComponentBlock()}
        </div>
        <div className='columnAce'>
          {renderAce()}
        </div>
      </div>
    </div>


      /* {!isEmpty(projectSettings) && !isEmpty(tree) && configs.hasComponentPreview && <Preview />} */
  );
};

export default Editor;
