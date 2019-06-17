import React, { useState, useEffect } from "react";
import Form from "react-jsonschema-form";
import isEmpty from 'lodash/isEmpty';
import schema from "./schema";
//import uiSchema from "./uiSchema";

import rrr from "../../../example/reduxSchema";

const TemplatesForm = props => {
  const { setTemplate, userid, generateCode, getAllTemplates, templates } = props;
  let fileReader;

  const [formSchema, setFormSchema] = useState();
  useEffect(() => {
    setFormSchema(template);
  });

  const templatesArray = templates.filter(template => template.id === props.match.params.id);

  const template = !isEmpty(templatesArray)
    ? templatesArray[0]
    : {};

  const onSubmit = data => {
    const { formData } = data;
    setTemplate({ ...formData, userid });
  };

  const onChange = data => {
    //generateCode();
  };

  const handleFileRead = e => {
    const redux = new Function(fileReader.result);
    setFormSchema(redux);
    setTemplate({ ...redux, userid });
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
