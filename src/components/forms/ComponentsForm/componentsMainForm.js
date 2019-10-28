import React, { useState, useEffect } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { componentFormTypes } from '../../../utils/constants';

import ComponentsForm from './componentsForm';
import ComponentsFormTree from './componentsFormTree';

const ComponentsFormMain = props => {

  const [componentFormType, setComponentFormType] = useState(componentFormTypes.TREE);

  return (
    <div>
      <div className="tabsList">
        <Tabs
          id="controlled-tab-example"
          activeKey={componentFormType}
          onSelect={k => setComponentFormType(k)}
        >
          <Tab eventKey={componentFormTypes.JSON_FORM} title="JSON Form">
            <ComponentsForm {...props} />
          </Tab>
          <Tab eventKey={componentFormTypes.TREE} title="Tree">
            <ComponentsFormTree {...props} />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default ComponentsFormMain;
