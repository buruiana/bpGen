import React from 'react';
import Form from "react-jsonschema-form";
import isEmpty from 'lodash/isEmpty';
import { navigate } from '../../../utils';


const PropTypesForm = props => {
  let { propTypes } = props;
  if (isEmpty(propTypes)) propTypes = [];

  const propTypesArray = propTypes.filter(propType => propType.id === props.match.params.id);

  let propType = {};
  if (!isEmpty(propTypesArray)) {
    propType = propTypesArray[0]
  } else {
    propType = {
      name: '',
      id: '',
    };
  }

  const { name, id } = propType;
  const schema = {
    type: "object",
    required: ["name"],
    properties: {
      id: { type: "string", title: "Id", default: id },
      name: { type: "string", title: "Name", default: name },
    }
  };
  const uiSchema = {
    id: { "ui:widget": "hidden" },
  };

  const goTo = () => {
    navigate("/propTypes");
  };

  const onSubmit = data => {
    const { formData } = data;
    props.setPropType(formData);
    goTo();
  };

  const log = (type) => console.log.bind(console, type);
  return (
    <div className="middle20">
      <div>
        <a onClick={goTo} className="simpleLink">
          Back
        </a>
      </div>
      <Form schema={schema}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={onSubmit}
        onError={log("errors")}
      />
    </div>
  );
}

export default PropTypesForm;