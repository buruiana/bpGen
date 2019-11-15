import React, { useState } from "react";
import Form from "react-jsonschema-form-bs4";
import schema from "./schema";
import { navigate } from "../../../utils";
import uiSchema from "./uiSchema";

const TemplatesForm = props => {
  const { setTemplate, userid, templates } = props;
  let fileReader;

  const [formSchema, setFormSchema] = useState(
    templates.filter(template => template._id === props.match.params.id)[0] || []
  );

  const onSubmit = data => {
    const { formData } = data;
    console.log('console:formDataformData ', formData);
    setTemplate({ ...formData });
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

  const goBack = () => navigate("/templates");

  return (
    <div>
      <>
        <div>
          <a onClick={goBack} className="simpleLink">
            Back
          </a>
        </div>
        <div className='importContainer'>
          <input type="file" id="importFile" onChange={onImport} />
        </div>
        <Form
          schema={schema}
          onSubmit={onSubmit}
          onChange={onChange}
          formData={formSchema}
          uiSchema={uiSchema}
          //ArrayFieldTemplate={ArrayFieldTemplate}
        />
      </>
    </div>
  );
};

export default TemplatesForm;
