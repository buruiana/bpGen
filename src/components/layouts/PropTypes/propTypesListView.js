import React from "react";
import Table from "react-bootstrap/Table";
import sortBy from "lodash/sortBy";
import get from "lodash/get";
import ProvidersSearchForm from "../../forms/ProvidersSearch";
import { navigate } from "../../../utils";

const PropTypesListView = props => {
  const { propTypes = [], searchData, deletePropType } = props;

  const deleteSelectedPropType = event => deletePropType({ id: event.target.id });
  const goTo = event => navigate(`/propType/${event.target.id}`);

  const filteredItems = () => {
    const filteredPropTypes = propTypes.filter(el => {
      if (searchData.name || searchData.propTypeType) {
        return (
          el.name
            .toLowerCase()
            .includes(get(searchData, "name", el.name).toLowerCase()) &&
          get(searchData, "propTypeType", el.propTypeType) === el.propTypeType
        );
      }
      return el;
    });

    return sortBy(filteredPropTypes, el => el.name);
  };

  const propTypesList = () => {
    return filteredItems().map(propType => {
      const { name, id } = propType;

      return (
        <tr key={id}>
          <td>
           <a id={id} onClick={goTo}>{name}</a>
          </td>
          <td>
            <a className="deleteStyle" id={id} onClick={deleteSelectedPropType}>Delete</a>
          </td>
        </tr>
      );
    })
  };

  return (
    <div>
      <ProvidersSearchForm />
      <a className="simpleLink" onClick={() => navigate("/propType/new")}>
        Add PropType
      </a>
      <Table striped bordered hover>
        <tbody>{propTypesList()}</tbody>
      </Table>
    </div>
  );
};

export default PropTypesListView;
