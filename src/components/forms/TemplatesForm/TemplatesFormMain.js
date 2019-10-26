import React, { useState, useEffect } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { templateFormTypes } from '../../../utils/constants';

import TemplatesForm from './templatesForm';
import TemplatesFormTree from './templatesFormTree';

const TemplatesFormMain = props => {
  const [templateFormType, setTemplateFormTypea] = useState(templateFormTypes.TREE);

  return (
    <div>
      <div className="tabsList">
        <Tabs
          id="controlled-tab-example"
          activeKey={templateFormType}
          onSelect={k => setTemplateFormTypea(k)}
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
