import React from 'react';
import Form from "react-jsonschema-form";
import isEmpty from 'lodash/isEmpty';
import { navigate } from '../../../utils';


const TechnosForm = props => {
  let { technos } = props;
  if (isEmpty(technos)) technos = [];

  const technosArray = technos.filter(techno => techno.id === props.match.params.id);

  let techno = {};
  if (!isEmpty(technosArray)) {
    techno = technosArray[0]
  } else {
    techno = {
      name: '',
      technoUrl: '',
      id: '',
    };
  }

  const { name, id, technoUrl } = techno;
  const schema = {
    type: "object",
    required: ["name"],
    properties: {
      id: { type: "string", title: "Id", default: id },
      name: { type: "string", title: "Name", default: name },
      technoUrl: { type: "string", title: "URL", default: technoUrl || '' },
    }
  };
  const uiSchema = {
    id: { "ui:widget": "hidden" },
  };

  const goTo = () => navigate("/technos");

  const onSubmit = data => {
    const { formData } = data;
    props.setTechno(formData);
    goTo();
  };

  const log = (type) => console.log.bind(console, type);
  return (
    <div>
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

export default TechnosForm;