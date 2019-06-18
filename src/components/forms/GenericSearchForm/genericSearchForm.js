import React from 'react';
import Form from "react-jsonschema-form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import isEmpty from 'lodash/isEmpty';
import { fields } from './constants.js';
import { availablecomponents } from '../../../utils/constants';

const GenericSearchForm = props => {
  const { providers, technos, searchData, componentname, setFilter } = props;

  const providersEnums = !isEmpty(providers)
    ? providers.map(provider => provider.name)
    : [];

  const technoTypeEnums = !isEmpty(technos)
    ? technos.map(techno => techno.name)
    : [];

  const schema = {
    type: "object",
    properties: {
      name: { type: "string", default: '' },
    },
  };

  fields[componentname].map(el => {
    if (el === availablecomponents.TECHNOS) {
      schema.properties.techno = {
        type: 'string',
        enum: technoTypeEnums,
      }
    }
    if (el === availablecomponents.PROVIDERS) {
      schema.properties.provider = {
        type: "string",
        enum: providersEnums,
      }
    }
  });
  const onChange = data => setFilter(data.formData);

  const uiSchema = {
    name: {
      "ui:options": {
        "label": false,
      },
      "ui:placeholder": "Name",
    },
    techno: {
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

  const getExportFilesView = () => {
    return ((props.pathname === 'editor') || (props.pathname === '/editor'))
      ? (
        <Col md={5}>
          {/* <ExportFilesView /> */}
        </Col>
      )
      : null;
  };

  const log = (type) => console.log.bind(console, type)

  return (
    <Row>
      <Col md={12}>
      {/* <Col md={((props.pathname === 'editor') || (props.pathname === '/editor')) ? 7 : 12}> */}
        <div className='filterComponentsBox'>
          <span className='filterComponentsLabel'>FILTER {componentname}</span>
          <div className='paddingTop'>
            <Form schema={schema}
              uiSchema={uiSchema}
              onChange={onChange}
              onError={log("errors")}
              formData={searchData}
              autocomplete='on'
            >
              <button type="submit" className="hidden">Submit</button>
            </Form>
          </div>
        </div>
      </Col>
      {/* {getExportFilesView()} */}
    </Row>
  );
}

export default GenericSearchForm;