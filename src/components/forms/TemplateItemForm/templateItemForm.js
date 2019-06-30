import React, { useState, useEffect } from "react";
import Form from "react-jsonschema-form-bs4";
//import schema from "./schema";
import { navigate } from "../../../utils";
import uiSchema from "./uiSchema";

const TemplatesForm = props => {
  const { setTemplate, userid, templates, modalData } = props;
  let fileReader;

  const [formSchema, setFormSchema] = useState(
    templates.filter(template => template.id === props.match.params.id)[0] || []
  );

  const schema = {
    type: "object",
    properties: {
      name: { type: "string", title: "Name" },
      templateDescription: { type: "string", title: "Description" },
      templateTechnos: { type: "string", title: "Technos" },
      templateIsActive: { type: "boolean", title: "Active" },
    },
  };

  const onSubmit = data => {
    const { formData } = data;
    setTemplate({ ...formData, userid });
    goBack();
  };

  const onChange = data => {
    //generateCode();
  };

  const handleFileRead = e => {
    const redux = new Function(fileReader.result);
    setFormSchema(redux);
  };

  const onImport = e => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(e.target.files[0]);
  };

  return (
    <div>
      <>
        <input type="file" id="importFile" onChange={onImport} />
        <Form
          schema={schema}
          onSubmit={onSubmit}
          onChange={onChange}
          formData={formSchema}
          //uiSchema={uiSchema}
        />
      </>
    </div>
  );
};

export default TemplatesForm;
