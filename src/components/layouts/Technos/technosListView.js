import React from "react";
import Table from "react-bootstrap/Table";
import sortBy from "lodash/sortBy";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import ProvidersSearchForm from "../../forms/ProvidersSearch";
import { navigate } from "../../../utils";

const TechnosListView = props => {
  const { technos = [], searchData, deleteTechno } = props;

  const deleteSelectedTechno = event => deleteTechno({ id: event.target.id });
  const goTo = event => navigate(`/techno/${event.target.id}`);

  const filteredItems = () => {
    const filteredTechnos = technos.filter(el => {
      if (searchData.name || searchData.technoType) {
        return (
          el.name
            .toLowerCase()
            .includes(get(searchData, "name", el.name).toLowerCase()) &&
          get(searchData, "technoType", el.technoType) === el.technoType
        );
      }
      return el;
    });

    return sortBy(filteredTechnos, el => el.name);
  };

  const technosList = () => {
    return filteredItems().map(techno => {
      const { name, id, technoTechno, technoUrl } = techno;

      return (
        <tr key={id}>
          <td>
            <h4><a id={id} onClick={goTo}>{name}</a></h4>
          </td>
          <td>{technoTechno}</td>
          <td>{name}</td>
          <td><a href={technoUrl} target='blank'>url</a></td>
          <td>
            <a className="deleteStyle" id={id} onClick={deleteSelectedTechno}>Delete</a>
          </td>
        </tr>
      );
    })
  };

  return (
    <div>
      <ProvidersSearchForm />
      <a className="simpleLink" onClick={() => navigate("/techno/new")}>
        Add Techno
      </a>
      <Table striped bordered hover>
        <tbody>{technosList()}</tbody>
      </Table>
    </div>
  );
};

export default TechnosListView;
