import React from "react";
import Form from "react-jsonschema-form-bs4";
import isEmpty from "lodash/isEmpty";
import { navigate, navigate2Login } from "../../../utils";

const ProvidersForm = props => {
  let { providers, technos, isAuthenticated } = props;
  if (isEmpty(providers)) providers = [];
  if (!isAuthenticated) navigate2Login();
  const providersArray = providers.filter(
    provider => provider.id === props.match.params.id
  );
  const technoTypeEnums = technos.map(techno => techno.name)

  let provider = {};
  if (!isEmpty(providersArray)) {
    provider = providersArray[0];
  } else {
    provider = {
      name: "",
      path: "",
      id: "",
      providersTechno: ""
    };
  }

  const { name, path, id, providersTechno, providerUrl } = provider;

  const schema = {
    type: "object",
    required: ["name"],
    properties: {
      id: { type: "string", title: "Id", default: id },
      name: { type: "string", title: "Name", default: name },
      path: { type: "string", title: "Path", default: path || "" },
      providerUrl: { type: "string", title: "URL", default: providerUrl || "" },
      providersTechno: {
        type: "string",
        title: "Techno",
        enum: technoTypeEnums,
        default: providersTechno
      }
    }
  };
  const uiSchema = {
    id: { "ui:widget": "hidden" },
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
    props.setProvider(formData);
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
