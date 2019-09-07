import React from "react";
import Alert from 'react-bootstrap/Alert';
import SortableTree, { removeNodeAtPath } from 'react-sortable-tree';
import sortBy from "lodash/sortBy";
import get from "lodash/get";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInfoCircle,
  faMinusCircle,
  faAdjust
} from '@fortawesome/free-solid-svg-icons';
import Ace from "../AceEditor";
import isEmpty from "lodash/isEmpty";
import { fillNodeData } from '../../../services/sortableTreeService/helper';
import GenericSearchForm from '../../forms/GenericSearchForm';
import { availablecomponents, allmodals } from '../../../utils/constants';

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import 'react-sortable-tree/style.css';


import Card from 'react-bootstrap/Card';

const externalNodeType = 'yourNodeType';
const shouldCopyOnOutsideDrop = true;
const getNodeKey = ({ treeIndex }) => treeIndex;

const Editor = props => {
  const {
    projectSettings,
    components = [],
    addModal,
    tree,
    providers,
    setTree,
    searchData,
    projectError,
    setCustomForm,
    generateCode,
    forms,
    setNodePath,
    generatedCode
  } = props;

  const renderAce = () => {
    return !isEmpty(projectSettings) ? <Ace /> : null;
  };

  const openModal = (type, node, path) => {
    setNodePath({ node, path })
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
  }
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
        {renderError()}
        <div>
          {renderSearchField()}
        </div>
        <div>
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
                buttons: [<FontAwesomeIcon className='componentInfoIcon' icon={faInfoCircle} onClick={() => openModal(allmodals.COMPONENT_INFO, node, path)} />]
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
                  <FontAwesomeIcon className='componentInfoIcon' icon={faMinusCircle} onClick={() => remove(path)} />,
                  <FontAwesomeIcon className='componentInfoIcon' icon={faAdjust} onClick={() => openModal(allmodals.COMPONENT_PROPS, node, path)} />
                ]
              })}
            />
          </div>
        </div>
      </div>
    );
  };

  const componentCode = generatedCode.filter(e => e.id === 'component.js');
  console.log('console: componentCode', componentCode);
  const scope = { Alert, Card };
  console.log('console: ------------', get(componentCode, '[0].code', ''));
  console.log('console: scopescope', scope);

  const ccc = `
() => {
  const onClick = () => {
    return alert('aaaa');
  };

  const onAlertClose = () => {
    return null;
  };

  return (
    <div>
      <div>
        <h1 />
        <button onClick={onClick} style={{border: '1px solid green', width: '100px', height: '25px'}}/>
        <Alert closeLabel="close" onClose={onAlertClose} />
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <button variant="primary">Go somewhere</button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
`;
  return (
    <div>
      {returnComponentBlock()}
      {renderAce()}
      {/* <LiveProvider code={ccc} scope={scope} >
        <LiveError />
        <LiveEditor />
        <LivePreview />
      </LiveProvider> */}
    </div>
  );
};

export default Editor;
