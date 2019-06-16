import React from 'react';
import Form from "react-jsonschema-form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProviderSearchForm = props => {
  const { searchData } = props;

  const providerTypes = ['SOUP', 'MAIN', 'SALAD'];

  const schema = {
    type: "object",
    properties: {
      name: { type: "string", default: '' },
      providerType: {
        type: 'string',
        enum: providerTypes,
      },
    },
  };

  const uiSchema = {
    "name": {
      "ui:options": {
        "label": false,
      },
      "ui:placeholder": "Name",
    },
    "providerType": {
      "ui:placeholder": "All Types",
      "ui:options": {
        "label": false,
      },
    },
  };

  const onChange = data => {
    const { formData } = data;
    props.setFilterData(formData);
  };

  const log = (type) => console.log.bind(console, type)

  return (
    <Row>
      <Col md={12}>
        <div className='filterProvidersBox'>
          <span className='filterComponentsLabel'>FILTER PROVIDERS</span>
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
    </Row>
  );
}

export default ProviderSearchForm;