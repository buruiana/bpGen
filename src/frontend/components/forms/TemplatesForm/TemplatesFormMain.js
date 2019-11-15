import React, { useState, useEffect } from "react";
import isEmpty from "lodash/isEmpty";
import get from "lodash/get";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { templateFormTypes } from '../../../utils/constants';

import TemplatesForm from './templatesForm';
import TemplatesFormTree from './templatesFormTree';
import { navigate2Login } from '../../../utils';
import { convertJsonSchema2SortableTree } from './helper';

const TemplatesFormMain = props => {
  const {
    tree = [],
    templates = [],
    setTemplateTree,
    isAuthenticated,
    match
  } = props;

  const [templateFormType, setTemplateFormType] = useState(templateFormTypes.TREE);
  if (!isAuthenticated) navigate2Login();

  useEffect(() => {

    if (match.params.id !== 'new') {
      let currentTemplate = templates.filter(
        template => template._id === match.params.id
      )[0];
      console.log('console: convertJsonSchema2SortableTree ', );
     setTemplateTree(convertJsonSchema2SortableTree(currentTemplate));
    };
  }, [templates, match.params.id]);




  return (
    <div>
      <div className="tabsList">
        <Tabs
          id="controlled-tab-example"
          activeKey={templateFormType}
          onSelect={k => setTemplateFormType(k)}
        >
          <Tab eventKey={templateFormTypes.JSON_FORM} title="JSON Form">
            <TemplatesForm {...props} />
          </Tab>
          <Tab eventKey={templateFormTypes.TREE} title="Tree">
            <TemplatesFormTree {...props} />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default TemplatesFormMain;
