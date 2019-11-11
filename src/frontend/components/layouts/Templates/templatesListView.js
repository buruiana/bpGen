import React from "react";
import Table from "react-bootstrap/Table";
import sortBy from "lodash/sortBy";
import get from "lodash/get";
import GenericSearchForm from "../../forms/GenericSearchForm";
import { navigate, navigate2Login } from "../../../utils";
import { availablecomponents } from '../../../utils/constants';

const TemplatesListView = props => {
  const {
    templates = [],
    searchData,
    deleteTemplate,
    setTemplate,
    isAuthenticated
  } = props;
  const { TEMPLATES } = availablecomponents;

  if (!isAuthenticated) navigate2Login();

  const deleteSelectedTemplate = event => deleteTemplate({ _id: event.target.id });
  const onClick = event => navigate(`/template/${event.target.id}`);
  const duplicateSelectedTemplate = event => {
    const currentTemplate = templates.filter(
      template => template._id === event.target.id
    )[0];

    setTemplate({
      ...currentTemplate,
      id: null,
      name: `${currentTemplate.name}-duplicate`
    });
  };

  const filteredItems = () => {
    const filteredTemplates = templates.filter(el => {
      if (searchData.name) {
        return (
          el.name
            .toLowerCase()
            .includes(get(searchData, "name", el.name).toLowerCase())
        );
      }
      return el;
    });

    return sortBy(filteredTemplates, el => el.name);
  };

  const templatesList = () => {
    return filteredItems().map(template => {
      const { name, _id, templateTechnos } = template;

      return (
        <tr key={_id}>
          <td>
            <a id={_id} className="simpleLink" onClick={onClick}>{name}</a>
          </td>
          <td><a id={_id} target='blank'>{templateTechnos}</a></td>
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

  return (
    <div>
      <GenericSearchForm componentname={TEMPLATES} />
      <div className='addEditLink'>
        <a className="simpleLink" onClick={() => navigate("/template/new")}>
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
