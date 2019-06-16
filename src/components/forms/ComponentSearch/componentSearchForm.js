import React from 'react';
import Form from "react-jsonschema-form";
import LayoutField from 'react-jsonschema-form-layout';
import isEmpty from 'lodash/isEmpty';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import {
  REACT_NATIVE,
  REACT,
} from '../../../utils/constants';
import ExportFilesView from '../../layouts/ExportFiles';

const ComponentsSearchForm = props => {
  const { providers, projectTechno, searchData } = props;
  const providersEnums = !isEmpty(providers)
    ? providers.map(provider => provider.name)
    : [];

  const technoTypeEnums = [REACT, REACT_NATIVE];

  const schema = {
    type: "object",
    properties: {
      name: { type: "string", default: '' },
      projectTechno: {
        type: 'string',
        enum: technoTypeEnums,
        default: projectTechno || undefined,
      },
      provider: {
        type: "string",
        enum: providersEnums,
      },
    },
  };

  const fields = {
    layout: LayoutField
  }

  const uiSchema = {
    name: {
      "ui:options": {
        "label": false,
      },
      "ui:placeholder": "Name",
    },
    projectTechno: {
      "ui:placeholder": "All technos",
      "ui:options": {
        "label": false,
      },
    },
    provider: {
      "ui:placeholder": "All providers",
      "ui:options": {
        "label": false,
      },
    },
    'ui:field': 'layout',
    'ui:layout': [
      {
        name: { md: 4 },
        projectTechno: { md: 4 },
        provider: { md: 4 },
      },
    ],
  };

  const onChange = data => {
    const { formData } = data;
    props.setFilterData(formData);
  };

  const getExportFilesView = () => {
    return ((props.pathname === 'editor') || (props.pathname === '/editor'))
      ? (
        <Col md={5}>
          <ExportFilesView />
        </Col>
      )
        : null;
  };

  const log = (type) => console.log.bind(console, type)

  return (
    <Row>
      <Col md={((props.pathname === 'editor') || (props.pathname === '/editor')) ? 7 : 12}>
        <div className='filterComponentsBox'>
          <span className='filterComponentsLabel'>FILTER COMPONENTS</span>
          <div className='paddingTop'>
            <Form schema={schema}
              uiSchema={uiSchema}
              onChange={onChange}
              onError={log("errors")}
              fields={fields}
              formData={searchData}
              autocomplete='on'
              >
            <button type="submit" className="hidden">Submit</button>
            </Form>
          </div>
        </div>
      </Col>
      {getExportFilesView()}
    </Row>
  );
}

export default ComponentsSearchForm;