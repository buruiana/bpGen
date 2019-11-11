import React from "react";
import Table from "react-bootstrap/Table";
import sortBy from "lodash/sortBy";
import get from "lodash/get";
import GenericSearchForm from "../../forms/GenericSearchForm";
import { navigate, navigate2Login } from "../../../utils";
import { availablecomponents } from '../../../utils/constants';

const PropTypesListView = props => {
  const { propTypes = [], searchData, deletePropType, isAuthenticated } = props;
  const { PROP_TYPES } = availablecomponents;
  if (!isAuthenticated) navigate2Login();

  const deleteSelectedPropType = event => deletePropType({ _id: event.target.id });
  const goTo = event => navigate(`/propType/${event.target.id}`);

  const filteredItems = () => {
    const filteredPropTypes = propTypes.filter(el => {
      if (searchData.name) {
        return (
          el.name
            .toLowerCase()
            .includes(get(searchData, "name", el.name).toLowerCase())
        );
      }
      return el;
    });

    return sortBy(filteredPropTypes, el => el.name);
  };

  const propTypesList = () => {
    return filteredItems().map(propType => {
      const { name, _id } = propType;

      return (
        <tr key={_id}>
          <td>
            <a id={_id} className="simpleLink" onClick={goTo}>{name}</a>
          </td>
          <td>
            <a className="simpleLink" id={_id} onClick={deleteSelectedPropType}>Delete</a>
          </td>
        </tr>
      );
    })
  };

  return (
    <div>
      <GenericSearchForm componentname={PROP_TYPES} />
      <div className='addEditLink'>
        <a className="simpleLink" onClick={() => navigate("/propType/new")}>
          Add PropType
        </a>
      </div>
      <Table striped bordered hover>
        <tbody>{propTypesList()}</tbody>
      </Table>
    </div>
  );
};

export default PropTypesListView;