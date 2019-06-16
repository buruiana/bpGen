import React from "react";
import Table from "react-bootstrap/Table";
import sortBy from "lodash/sortBy";
import get from "lodash/get";
import GenericSearchForm from "../../forms/GenericSearchForm";
import { navigate } from "../../../utils";
import { availablecomponents } from '../../../utils/constants';

const ComponentsListView = props => {
  const { searchData, components = [], deleteComponent } = props;
  const { COMPONENTS } = availablecomponents;

  const deleteSelectedComponent = event =>  deleteComponent({ id: event.target.id });
  const goTo = event => navigate(`/component/${event.target.id}`);

  const filteredItems = () => {
    const filteredComponents = components.filter(el => {
      if (searchData.name || searchData.componentType) {
        return (
          el.name
            .toLowerCase()
            .includes(get(searchData, "name", el.name).toLowerCase()) &&
          get(searchData, "componentType", el.componentType) === el.componentType
        );
      }
      return el;
    });

    return sortBy(filteredComponents, el => el.name);
  };

  const componentsList = () => {
    return filteredItems().map(component => {
      const { name, id, provider, techno } = component;

      return (
        <tr key={id}>
          <td>
            <a id={id} onClick={goTo}>{name}</a>
          </td>
          <td>{techno}</td>
          <td>{provider}</td>
          <td>
            <a className="deleteStyle" id={id} onClick={deleteSelectedComponent}>Delete</a>
          </td>
        </tr>
      );
    })
  };

  return (
    <div>
      <GenericSearchForm componentname={COMPONENTS} />
      <div className='addEditLink'>
        <a className="simpleLink" onClick={() => navigate("/component/new")}>
          Add Component
        </a>
      </div>
      <Table striped bordered hover>
        <tbody>{componentsList()}</tbody>
      </Table>
    </div>
  );
};

export default ComponentsListView;
