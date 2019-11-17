import React  from "react";
import Form from "react-jsonschema-form-bs4";

import { navigate2Login } from '../../../utils';

const ConfigsForm = props => {
  const { setConfigs, isAuthenticated, configs } = props;

  if (!isAuthenticated) navigate2Login();

  const schema = {
    type: "object",
    properties: {
      isOffline: {
        title: "isOffline",
        type: "boolean",
        default: configs.isOffline
      },
      hasComponentPreview: {
        title: "hasComponentPreview",
        type: "boolean",
        default: configs.hasComponentPreview
      },
      hasComponentImport: {
        title: "hasComponentImport",
        type: "boolean",
        default: configs.hasComponentImport
      },
      hasTemplatesImport: {
        title: "hasTemplatesImport",
        type: "boolean",
        default: configs.hasTemplatesImport
      },
      hasPropTypesImport: {
        title: "hasPropTypesImport",
        type: "boolean",
        default: configs.hasPropTypesImport
      },
      hasTechnosImport: {
        title: "hasTechnosImport",
        type: "boolean",
        default: configs.hasTechnosImport
      },
      hasProjectsImport: {
        title: "hasProjectsImport",
        type: "boolean",
        default: configs.hasProjectsImport
      },
      hasProvidersImport: {
        title: "hasProvidersImport",
        type: "boolean",
        default: configs.hasProvidersImport
      },
    }
  };

  const onSubmit = data => setConfigs(data.formData);
  const onChange = data => setConfigs(data.formData);

  return (
    <div className='wrapper'>
      <Form
        schema={schema}
        onSubmit={onSubmit}
        onChange={onChange}
      >
        <button type="submit" className="hidden">
          Submit
        </button>
      </Form>
    </div>
  );
};

export default ConfigsForm;
