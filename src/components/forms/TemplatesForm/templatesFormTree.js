import React from 'react';
import SortableTree, {
  removeNodeAtPath,
  getFlatDataFromTree,
} from 'react-sortable-tree';
import isEmpty from 'lodash/isEmpty';
import {
  allmodals,
} from '../../../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMinusCircle,
  faAdjust
} from '@fortawesome/free-solid-svg-icons';
import get from 'lodash/get';

const externalNodeType = 'yourNodeType';
const shouldCopyOnOutsideDrop = true;
const getNodeKey = ({ treeIndex }) => treeIndex;

const TemplatesForm = props => {
  const { jsonForm, setTemplateTree, addModal, setModalData, templates } = props;
  const currentTemplate = templates.filter(template => template.id === props.match.params.id)[0];

  console.log('console: currentTemplate', currentTemplate);

  const prepareTree = () => {
    let tree = [];
    let treeObj = {
      title: '',
      subtitle: '',
      children: [],
    };

    const getForms = forms => {
      return forms.map(form => {
        return {
          title: form.formName,
          subtitle: 'Form',
          expanded: true,
          children: [],
        };
      })
    };

    const getBlocks = blocks => {
      return blocks.map(block => {
        return {
          title: block.blockName,
          subtitle: 'Block',
          expanded: true,
          children: [],
        };
      })
    };

    if (!isEmpty(currentTemplate)) {
      treeObj = {
        title: currentTemplate.name,
        subtitle: 'Template',
        expanded: true,
        children: [],
      };
    };

    if (currentTemplate && !isEmpty(currentTemplate.templateFiles)) {
      currentTemplate.templateFiles.map(file => {
        treeObj.children.push({
          title: file.fileName,
          subtitle: 'File',
          expanded: true,
          children: [
            {
              title: 'File Forms',
              subtitle: 'File Forms Wrapper',
              children: getForms(file.fileForms),
              expanded: true,
            },
            {
              title: 'File Blocks',
              subtitle: 'File Blocks Wrapper',
              fileBlocks: getBlocks(file.fileBlocks),
              expanded: true,
            }
          ],
        });
      });
    };

    tree.push(treeObj);
    return tree;
  };

  const dafaultTreeData = [
    {
      title: '',
      subtitle: 'File',
    },
    {
      title: '',
      subtitle: 'Forms Wrapper',
    },
    {
      title: '',
      subtitle: 'Form',
    },
    {
      title: '',
      subtitle: 'Blocks Wrapper',
    },
    {
      title: '',
      subtitle: 'Block',
    },
  ];

  const treeData = prepareTree();


  console.log('console: treeData----', treeData);

  const remove = path => {
    const newTree = removeNodeAtPath({
      treeData: jsonForm,
      path,
      getNodeKey
    });
    setTemplateTree(newTree);
  };

  // const validateJsonForm = jsonForm => {
  //   const flatData = getFlatDataFromTree({
  //     treeData: jsonForm,
  //     getNodeKey: ({ treeIndex }) => treeIndex,
  //     ignoreCollapsed: false,
  //   });

  //   return flatData.find(el => {
  //     const isPrimitive = (el.node.subtitle === 'String' || el.node.subtitle === 'Integer' || el.node.subtitle === 'Boolean' || el.node.subtitle === 'Number');

  //     return ((isPrimitive && !isEmpty(el.node.children)) || jsonForm.length > 1);
  //   });
  // };

  const onChange = treeData => {
    console.log('console: treeData', treeData);
    setTemplateTree(treeData);
  };

  const showModal = (type, node, path) => {
    setModalData({node, path});
    addModal(type);

  };

  const log = (type) => console.log.bind(console, type);
  return (
    <div className='flex'>
      <div
        style={{
          height: 400,
          width: '40%',
          float: 'left'
        }}
      >
        <SortableTree
          treeData={dafaultTreeData}
          onChange={() => console.log('changed')}
          dndType={externalNodeType}
          shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
        />
      </div>

      <div
        style={{
          height: 400,
          width: '60%',
          float: 'left',
        }}
      >
        <SortableTree
          treeData={treeData}
          onChange={onChange}
          dndType={externalNodeType}
          shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
          getNodeKey={getNodeKey}
          generateNodeProps={({ node, path }) => ({
            buttons: [
              <FontAwesomeIcon className='componentInfoIcon' icon={faMinusCircle} onClick={() => remove(path)} />,
              <FontAwesomeIcon className='componentInfoIcon' icon={faAdjust} onClick={() => showModal(allmodals.TEMPLATE_ITEM_PROPS, node, path)} />
            ]
          })}
        />
      </div>
    </div>
  );
}

export default TemplatesForm;