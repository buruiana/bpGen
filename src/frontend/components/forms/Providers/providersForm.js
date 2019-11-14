import React from "react";
import Form from "react-jsonschema-form-bs4";
import isEmpty from "lodash/isEmpty";
import { navigate, navigate2Login } from "../../../utils";

const ProvidersForm = props => {
  let { providers, technos, isAuthenticated, setProvider } = props;
  if (isEmpty(providers)) providers = [];
  if (!isAuthenticated) navigate2Login();

  const providersArray = providers.filter(
    provider => provider._id === props.match.params.id
  );
  const technoTypeEnums = technos.map(techno => techno.title)

  let provider = {};
  if (!isEmpty(providersArray)) {
    provider = providersArray[0];
  } else {
    provider = {
      title: "",
      path: "",
      providersTechno: ""
    };
  }

  const { title, path, _id, providersTechno, providerUrl } = provider;

  const schema = {
    type: "object",
    required: ["title"],
    properties: {
      _id: { type: "string", title: "Id", default: _id },
      title: { type: "string", title: "Name", default: title },
      path: { type: "string", title: "Path", default: path || "" },
      providerUrl: { type: "string", title: "URL", default: providerUrl || "" },
      providersTechno: {
        type: "string",
        title: "Techno",
        enum: technoTypeEnums,
        //default: providersTechno
      }
    }
  };
  const uiSchema = {
    _id: { "ui:widget": "hidden" },
    providersTechno: {
      "ui:placeholder": "Select techno",
      "ui:options": {
        label: true
      }
    }
  };

  const goTo = () => navigate("/providers");

  const onSubmit = data => {
    const { formData } = data;
    setProvider(formData);
    goTo();
  };

  const log = type => console.log.bind(console, type);
  return (
    <div>
      <div>
        <a onClick={goTo} className="simpleLink">
          Back
        </a>
      </div>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={onSubmit}
        onError={log("errors")}
      />
    </div>
  );
};

export default ProvidersForm;
