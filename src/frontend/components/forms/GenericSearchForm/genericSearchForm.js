import React from "react";
import Form from "react-jsonschema-form-bs4";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import isEmpty from "lodash/isEmpty";
import { availablefields } from "./constants.js";
import { availablecomponents } from "../../../utils/constants";
import LayoutField from "../../../utils/LayoutField";

const GenericSearchForm = props => {
  const {
    providers,
    technos,
    searchData,
    componentname,
    setFilter,
  } = props;

  const providersEnums = !isEmpty(providers)
    ? providers.map(provider => provider.title)
    : [];

  const technoTypeEnums = !isEmpty(technos)
    ? technos.map(techno => techno.title)
    : [];

  const schema = {
    type: "object",
    properties: {
      title: { type: "string", default: "" },
    }
  };

  availablefields[componentname].map(el => {
    if (el === availablecomponents.TECHNOS) {
      schema.properties.techno = {
        type: "string",
        enum: technoTypeEnums
      };
    }
    if (el === availablecomponents.PROVIDERS) {
      schema.properties.provider = {
        type: "string",
        enum: providersEnums
      };
    }
  });
  const onChange = data => setFilter(data.formData);
  const fields = {
    layout: LayoutField
  };

  const uiSchema = {
    title: {
      "ui:options": {
        label: false
      },
      "ui:placeholder": "Name"
    },
    techno: {
      "ui:placeholder": "All technos",
      "ui:options": {
        label: false
      }
    },
    provider: {
      "ui:placeholder": "All providers",
      "ui:options": {
        label: false
      }
    },
    "ui:field": "layout",
    "ui:layout": [
      {
        title: { md: 4 },
        techno: { md: 4 },
        provider: { md: 4 }
      }
    ]
  };

  const getExportFilesView = () => {
    return props.pathname === "editor" || props.pathname === "/editor" ? (
      <Col md={5}>{/* <ExportFilesView /> */}</Col>
    ) : null;
  };

  const log = type => console.log.bind(console, type);

  return (
    <div className='filterSection'>
      <Row>
        <Col md={12}>
          {/* <Col md={((props.pathname === 'editor') || (props.pathname === '/editor')) ? 7 : 12}> */}
          <div className="filterComponentsBox">
            <span className="filterComponentsLabel">FILTER {componentname}</span>
            <div className="paddingTop">
              <Form
                schema={schema}
                uiSchema={uiSchema}
                onChange={onChange}
                onError={log("errors")}
                formData={searchData}
                autocomplete="on"
                fields={fields}
              >
                <button type="submit" className="hidden">
                  Submit
              </button>
              </Form>
            </div>
          </div>
        </Col>
        {/* {getExportFilesView()} */}
      </Row>
    </div>
  );
};

export default GenericSearchForm;
