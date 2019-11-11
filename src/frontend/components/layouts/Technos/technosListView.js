import React from "react";
import Table from "react-bootstrap/Table";
import sortBy from "lodash/sortBy";
import get from "lodash/get";
import GenericSearchForm from "../../forms/GenericSearchForm";
import { navigate, navigate2Login } from "../../../utils";
import { availablecomponents } from '../../../utils/constants';

const TechnosListView = props => {
  const { technos = [], searchData, deleteTechno, isAuthenticated } = props;
  const { TECHNOS } = availablecomponents;
  if (!isAuthenticated) navigate2Login();

  const deleteSelectedTechno = event => deleteTechno({ _id: event.target.id });
  const goTo = event => navigate(`/techno/${event.target.id}`);

  const filteredItems = () => {
    const filteredTechnos = technos.filter(el => {
      if (searchData.name) {
        return (
          el.name
            .toLowerCase()
            .includes(get(searchData, "name", el.name).toLowerCase())
        );
      }
      return el;
    });

    return sortBy(filteredTechnos, el => el.name);
  };

  const technosList = () => {
    return filteredItems().map(techno => {
      const { name, _id } = techno;

      return (
        <tr key={_id}>
          <td>
            <a id={_id} className="simpleLink" onClick={goTo}>{name}</a>
          </td>
          <td>
            <a className="simpleLink" id={_id} onClick={deleteSelectedTechno}>Delete</a>
          </td>
        </tr>
      );
    })
  };

  return (
    <div>
      <GenericSearchForm componentname={TECHNOS} />
      <div className='addEditLink'>
        <a className="simpleLink" onClick={() => navigate("/techno/new")}>
          Add Techno
      </a>
      </div>
      <Table striped bordered hover>
        <tbody>{technosList()}</tbody>
      </Table>
    </div>
  );
};

export default TechnosListView;