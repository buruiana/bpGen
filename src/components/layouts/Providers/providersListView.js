import React from "react";
import Table from "react-bootstrap/Table";
import sortBy from "lodash/sortBy";
import get from "lodash/get";
import ProvidersSearchForm from "../../forms/ProvidersSearch";
import { navigate } from "../../../utils";

const ProvidersListView = props => {
  const { searchData, providers = [], deleteProvider } = props;

  const deleteSelectedProvider = event => deleteProvider({ id: event.target.id });
  const goTo = event => navigate(`/provider/${event.target.id}`);

  const filteredItems = () => {
    const filteredProviders = providers.filter(el => {
      if (searchData.name || searchData.providerType) {
        return (
          el.name
            .toLowerCase()
            .includes(get(searchData, "name", el.name).toLowerCase()) &&
          get(searchData, "providerType", el.providerType) === el.providerType
        );
      }
      return el;
    });

    return sortBy(filteredProviders, el => el.name);
  };

  const providersList = () => {
    return filteredItems().map(provider => {
      const { name, id, providerTechno, providerUrl } = provider;

      return (
        <tr key={id}>
          <td>
            <a id={id} onClick={goTo}>{name}</a>
          </td>
          <td>{providerTechno}</td>
          <td>{name}</td>
          <td><a href={providerUrl} target='blank'>url</a></td>
          <td>
           <a className="deleteStyle" id={id} onClick={deleteSelectedProvider}>Delete</a>
          </td>
        </tr>
      );
    })
  };

  return (
    <div>
      <ProvidersSearchForm />
      <a className="simpleLink" onClick={() => navigate("/provider/new")}>
        Add Provider
      </a>
      <Table striped bordered hover>
        <tbody>{providersList()}</tbody>
      </Table>
    </div>
  );
};

export default ProvidersListView;
