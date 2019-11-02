import React, { useState, useEffect } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import { componentFormTypes } from '../../../utils/constants';

import ComponentsForm from './componentsForm';
import ComponentsFormTree from './componentsFormTree';

import {
  convertJsonSchema2SortableTree
} from "./helper";

import { navigate2Login } from '../../../utils';

const ComponentsFormMain = props => {
  const { isAuthenticated, tree, components, setComponentTree } = props;
  const [componentFormType, setComponentFormType] = useState(componentFormTypes.TREE);
  if (!isAuthenticated) navigate2Login();
  if (isEmpty(get(tree, '[0].children', null))
    && props.match.params.id !== 'new'
    && !isEmpty(components)) {
    let currentComponent = components.filter(
      components => components.id === props.match.params.id
    )[0];

    setComponentTree(convertJsonSchema2SortableTree(currentComponent));
  }

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
