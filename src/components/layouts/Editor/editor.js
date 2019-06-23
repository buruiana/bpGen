import React from "react";
import CustomNavBar from "../CustomNavBar";
import Ace from "../AceEditor";
import isEmpty from "lodash/isEmpty";
import SortableTree, { removeNodeAtPath } from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

const externalNodeType = 'yourNodeType';
const shouldCopyOnOutsideDrop = true;
const getNodeKey = ({ treeIndex }) => treeIndex;

const Editor = props => {
  const { projectSettings, components, addModal, defaultTree, tree } = props;
  const renderAce = () => {
    return !isEmpty(projectSettings) ? <Ace /> : null;
  };

  const setNewTree = treeData2 => props.setTree({ treeData2 });
  const onChange = treeData => {
    if (treeData.length === 1) setNewTree(fillNodeData(treeData, props.providers));
  };
  const remove = path => {
    const newTree = {
      treeData2: removeNodeAtPath({
        treeData: props.tree,
        path,
        getNodeKey
      })
    };
    setNewTree(fillNodeData(newTree.treeData2, props.providers));
  };

  const filteredDefaultTree = () => {
    const filteredTree = props.defaultTree.filter(el => {
      if (!isEmpty(props.searchData) && props.searchData.name) {
        return (el.title.toLowerCase().indexOf(props.searchData.name.toLowerCase()) !== -1
          && el.techno === props.searchData.projectTechno
          && get(props.searchData, 'provider', el.provider) === el.provider)
      }
      return (get(props.searchData, 'provider', el.provider) === el.provider
        && get(props.searchData, 'projectTechno', el.techno) === el.techno);
    });
    return sortBy(filteredTree, el => el.title);
  };


  const returnComponentBlock = () => {
    return (
      <div className='paddingTop'>
        {/* {renderSearchField()}
        {renderError()} */}
        <div
          style={{
            height: 800,
            width: '25%',
            float: 'left'
          }}
        >
          <SortableTree
            treeData={components}
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
