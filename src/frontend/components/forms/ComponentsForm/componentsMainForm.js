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
  const {
    isAuthenticated,
    tree,
    components,
    setComponentTree,
    match
  } = props;
  const [componentFormType, setComponentFormType] = useState(componentFormTypes.TREE);

  if (!isAuthenticated) navigate2Login();

  useEffect(() => {
    if (isEmpty(get(tree, 'title', null))
      && match.params.id !== 'new'
      && !isEmpty(components)) {
      let currentComponent = components.filter(
        components => components._id === match.params.id
      )[0];

      setComponentTree(convertJsonSchema2SortableTree(currentComponent));
    }
  }, [components, match.params.id]);

  return (
    <div className='wrapper'>
      <div className="tabsList">
        <Tabs
          id="components-tabs"
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
