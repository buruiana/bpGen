import React, { useState, useEffect } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import { propTypeFormTypes } from '../../../utils/constants';

import PropTypesForm from './propTypesForm';
import PropTypesFormTree from './propTypesFormTree';

import {
  convertJsonSchema2SortableTree
} from "./helper";

import { navigate2Login } from '../../../utils';

const PropTypesFormMain = props => {
  const {
    isAuthenticated,
    tree,
    propTypes,
    setPropTypeTree,
    match
  } = props;
  const [propTypeFormType, setPropTypeFormType] = useState(propTypeFormTypes.TREE);

  if (!isAuthenticated) navigate2Login();

  useEffect(() => {
    if (isEmpty(get(tree, 'title', null))
      && match.params.id !== 'new'
      && !isEmpty(propTypes)) {
      let currentPropType = propTypes.filter(
        propTypes => propTypes._id === match.params.id
      )[0];

      setPropTypeTree(convertJsonSchema2SortableTree(currentPropType));
    }
  }, [propTypes, match.params.id]);

  return (
    <div>
      <div className="tabsList">
        <Tabs
          id="controlled-tab-example"
          activeKey={propTypeFormType}
          onSelect={k => setPropTypeFormType(k)}
        >
          <Tab eventKey={propTypeFormTypes.JSON_FORM} title="JSON Form">
            <PropTypesForm {...props} />
          </Tab>
          <Tab eventKey={propTypeFormTypes.TREE} title="Tree">
            <PropTypesFormTree {...props} />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default PropTypesFormMain;
