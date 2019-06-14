import React, { useState } from "react";
import Form from "react-jsonschema-form";
import schema from "./schema";
//import uiSchema from "./uiSchema";

import rrr from "../../../reduxSchema";

const TemplatesForm = props => {
  const { setTemplate, userid } = props;
  let fileReader;
  const [formSchema, setFormSchema] = useState([]);

  const onSubmit = data => {
    const { formData } = data;
    const newormData = { ...formData, userid };
    setTemplate(newormData);
  };

  const onChange = data => {
    console.log("console: change", data);
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
  console.log("console: formSchema", formSchema);
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
