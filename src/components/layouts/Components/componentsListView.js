import React from "react";
import Table from "react-bootstrap/Table";
import sortBy from "lodash/sortBy";
import get from "lodash/get";
import ProvidersSearchForm from "../../forms/ProvidersSearch";
import { navigate } from "../../../utils";

const ComponentsListView = props => {
  const components = props.components || [];

  const deleteComponent = event => {
    props.deleteComponent({ id: event.target.id });
  };

  const filteredItems = () => {
    const filteredComponents = components.filter(el => {
      if (props.searchData.name || props.searchData.componentType) {
        return (
          el.name
            .toLowerCase()
            .includes(get(props.searchData, "name", el.name).toLowerCase()) &&
          get(props.searchData, "componentType", el.componentType) === el.componentType
        );
      }
      return el;
    });

    return sortBy(filteredComponents, el => el.name);
  };

  const goTo = (e) => {
    navigate(`/component/${e.target.id}`);
  };

  const componentsList = () => {
    return filteredItems().map(component => {
      const { name, id, provider, techno } = component;

      return (
        <tr key={id}>
          <td>
            <h4><a id={id} onClick={goTo}>{name}</a></h4>
          </td>
          <td>{techno}</td>
          <td>{provider}</td>
          <td>
           <a className="deleteStyle" id={id} onClick={deleteComponent}>Delete</a>
          </td>
        </tr>
      );
    })
  };

  return (
    <div>
      <ProvidersSearchForm />
      <a className="simpleLink" onClick={() => navigate("/component/new")}>
        Add Component
      </a>
      <Table striped bordered hover>
        <tbody>{componentsList()}</tbody>
      </Table>
    </div>
  );
};

export default ComponentsListView;
