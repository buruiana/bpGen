import React, { useState, useEffect } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { navigate } from "../../../utils";
import { templateFormTypes } from '../../../utils/constants';

import TemplatesForm from './templatesForm';
import TemplatesFormTree from './templatesFormTree';

const TemplatesFormMain = props => {
  const [templateFormType, setTemplateFormTypea] = useState(templateFormTypes.JSON_FORM);

  const goBack = () => navigate("/templates");

  return (
    <div>
      <div>
        <a onClick={goBack} className="simpleLink">
          Back
        </a>
      </div>
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
