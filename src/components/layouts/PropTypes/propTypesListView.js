import React from "react";
import Table from "react-bootstrap/Table";
import sortBy from "lodash/sortBy";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import ProvidersSearchForm from "../../forms/ProvidersSearch";
import { navigate } from "../../../utils";

const PropTypesListView = props => {
  const propTypes = props.propTypes || [];

  const deletePropType = event => {
    props.deletePropType({ id: event.target.id });
  };

  const filteredItems = () => {
    const filteredPropTypes = propTypes.filter(el => {
      if (props.searchData.name || props.searchData.propTypeType) {
        return (
          el.name
            .toLowerCase()
            .includes(get(props.searchData, "name", el.name).toLowerCase()) &&
          get(props.searchData, "propTypeType", el.propTypeType) === el.propTypeType
        );
      }
      return el;
    });

    return sortBy(filteredPropTypes, el => el.name);
  };

  const goTo = (e) => {
    navigate(`/propType/${e.target.id}`);
  };

  const propTypesList = () => {
    return filteredItems().map(propType => {
      const { name, id, propTypePropType, propTypeUrl } = propType;

      return (
        <tr key={id}>
          <td>
            <h4><a id={id} onClick={goTo}>{name}</a></h4>
          </td>
          <td>
           <a className="deleteStyle" id={id} onClick={deletePropType}>Delete</a>
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
