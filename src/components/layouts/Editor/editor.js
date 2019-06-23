import React from "react";
import Alert from 'react-bootstrap/Alert';
import SortableTree, { removeNodeAtPath } from 'react-sortable-tree';
import sortBy from "lodash/sortBy";
import get from "lodash/get";
import CustomNavBar from "../CustomNavBar";
import Ace from "../AceEditor";
import isEmpty from "lodash/isEmpty";
import { fillNodeData } from '../../../services/sortableTreeService/helper';
import GenericSearchForm from '../../forms/GenericSearchForm';
import { availablecomponents } from '../../../utils/constants';

import 'react-sortable-tree/style.css';

const externalNodeType = 'yourNodeType';
const shouldCopyOnOutsideDrop = true;
const getNodeKey = ({ treeIndex }) => treeIndex;

const Editor = props => {
  const { projectSettings, components, addModal, defaultTree, tree, providers, setTree, searchData, projectError } = props;
  const renderAce = () => {
    return !isEmpty(projectSettings) ? <Ace /> : null;
  };

  const setNewTree = treeData2 => setTree({ treeData2 });
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
      if (!isEmpty(searchData) && searchData.name) {
        return (el.title.toLowerCase().indexOf(searchData.name.toLowerCase()) !== -1
          && get(searchData, 'techno', el.techno) === el.techno
          && get(searchData, 'provider', el.provider) === el.provider)
      }
      return (get(searchData, 'provider', el.provider) === el.provider
        && get(searchData, 'techno', el.techno) === el.techno);
    });
    return sortBy(filteredTree, el => el.title);
  };


  const { projectName} = projectSettings;
  const renderSearchField = () => {
    return <GenericSearchForm componentname={availablecomponents.COMPONENTS} />
    // return projectName
    //   ? <GenericSearchForm componentname={availablecomponents.COMPONENTS} />
    //   : null;
  };

  const renderError = () => {
    const shortErr = projectError.slice(
      projectError.indexOf('<pre>') + 5,
      projectError.indexOf('<br>')
    );

    if (projectError) {
      return (
        <Alert>
          <div>
            {shortErr}
          </div>
        </Alert>
      );
    }
    return null;
  };

  const returnComponentBlock = () => {
    return (
      <div className='paddingTop'>
        {renderSearchField()}
        {renderError()}
        <div
          style={{
            height: 800,
            width: '25%',
            float: 'left'
          }}
        >
          <SortableTree
            treeData={filteredDefaultTree()}
            onChange={() => console.log('changed')}
            dndType={externalNodeType}
            shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
            generateNodeProps={({ node, path }) => ({
              buttons: [<a onClick={() => addModal(COMPONENT_INFO, node, path)} >Info</a>]
            })}
          />
        </div>
        <div
          style={{
            height: 800,
            width: '35%',
            float: 'left'
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
                <a onClick={() => remove(path)}>Remove</a>,
                <a onClick={() => addModal(PROPS_FORM, node, path)} >Props</a>
              ]
            })}
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      <CustomNavBar />
      {returnComponentBlock()}
      {renderAce()}
    </div>
  );
};

export default Editor;
