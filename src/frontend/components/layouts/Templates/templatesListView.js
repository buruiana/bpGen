import React from "react";
import Table from "react-bootstrap/Table";
import sortBy from "lodash/sortBy";
import get from "lodash/get";
import GenericSearchForm from "../../forms/GenericSearchForm";
import { navigate, navigate2Login } from "../../../utils";
import { availablecomponents } from '../../../utils/constants';

import { getTechnoName } from '../../../utils';

const TemplatesListView = props => {
  const {
    templates = [],
    searchData,
    deleteTemplate,
    setTemplate,
    isAuthenticated,
    hasTemplatesImport,
    importData,
    technos,
  } = props;

  if (!isAuthenticated) navigate2Login();

  const { TEMPLATES } = availablecomponents;
  let fileReader;

  const deleteSelectedTemplate = event => deleteTemplate({ _id: event.target.id });
  const onClick = event => navigate(`/template/${event.target.id}`);
  const duplicateSelectedTemplate = event => {
    const currentTemplate = templates.filter(
      template => template._id === event.target.id
    )[0];

    setTemplate({
      ...currentTemplate,
      title: `${currentTemplate.title}-duplicate`,
      _id: undefined
    });
  };

  const filteredItems = () => {
    const filteredTemplates = templates.filter(el => {
      if (searchData.title) {
        return (
          el.title
            .toLowerCase()
            .includes(get(searchData, "title", el.title).toLowerCase())
        );
      }
      return el;
    });

    return sortBy(filteredTemplates, el => el.title);
  };

  const handleFileRead = e => {
    const templates = new Function(fileReader.result)();
    const list = {
      data: templates,
      importType: 'templates'
    };
    importData(list);
  };

  const onImport = e => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(e.target.files[0]);
  };

  const templatesList = () => {
    return filteredItems().map(template => {
      const { title, _id, templateTechno } = template;

      return (
        <tr key={_id}>
          <td>
            <a id={_id} className="simpleLink" onClick={onClick}>{title}</a>
          </td>
          <td><a id={_id} target='blank'>{getTechnoName(technos, templateTechno)}</a></td>
          <td>
            <a className="simpleLink" id={_id} onClick={duplicateSelectedTemplate}>
              Duplicate
            </a>
          </td>
          <td>
            <a className="simpleLink" id={_id} onClick={deleteSelectedTemplate}>
              Delete
            </a>
          </td>
        </tr>
      );
    })
  };

  const addNew = () => navigate("/template/new")

  return (
    <div>
      <GenericSearchForm componentname={TEMPLATES} />
      { hasTemplatesImport &&
        <div className='importContainer'>
          <input type="file" id="importFile" onChange={onImport} />
        </div> }
      <div className='addEditLink'>
        <a className="simpleLink" onClick={addNew}>
          Add Template
      </a>
      </div>
      <Table striped bordered hover>
        <tbody>{templatesList()}</tbody>
      </Table>
    </div>
  );
};

export default TemplatesListView;
