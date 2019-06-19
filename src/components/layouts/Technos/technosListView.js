import React from "react";
import Table from "react-bootstrap/Table";
import sortBy from "lodash/sortBy";
import get from "lodash/get";
import GenericSearchForm from "../../forms/GenericSearchForm";
import { navigate } from "../../../utils";
import { availablecomponents } from '../../../utils/constants';

const TechnosListView = props => {
  const { technos = [], searchData, deleteTechno } = props;
  const { TECHNOS } = availablecomponents;

  const deleteSelectedTechno = event => deleteTechno({ id: event.target.id });
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
      const { name, id } = techno;

      return (
        <tr key={id}>
          <td>
            <a id={id} className="simpleLink" onClick={goTo}>{name}</a>
          </td>
          <td>
            <a className="simpleLink" id={id} onClick={deleteSelectedTechno}>Delete</a>
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
