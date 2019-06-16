import React from "react";
import Table from "react-bootstrap/Table";
import sortBy from "lodash/sortBy";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import ProvidersSearchForm from "../../forms/ProvidersSearch";
import { navigate } from "../../../utils";

const ProvidersListView = props => {
  const providers = props.providers || [];

  const deleteProvider = event => {
    props.deleteProvider({ id: event.target.id });
  };

  const filteredItems = () => {
    const filteredProviders = providers.filter(el => {
      if (props.searchData.name || props.searchData.providerType) {
        return (
          el.name
            .toLowerCase()
            .includes(get(props.searchData, "name", el.name).toLowerCase()) &&
          get(props.searchData, "providerType", el.providerType) === el.providerType
        );
      }
      return el;
    });

    return sortBy(filteredProviders, el => el.name);
  };

  const goTo = (e) => {
    navigate(`/provider/${e.target.id}`);
  };

  const providersList = () => {
    return filteredItems().map(provider => {
      const { name, id, providerTechno, providerUrl } = provider;

      return (
        <tr key={id}>
          <td>
            <h4><a id={id} onClick={goTo}>{name}</a></h4>
          </td>
          <td>{providerTechno}</td>
          <td>{name}</td>
          <td><a href={providerUrl} target='blank'>url</a></td>
          <td>
           <a className="deleteStyle" id={id} onClick={deleteProvider}>Delete</a>
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
