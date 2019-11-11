import React from "react";
import Table from "react-bootstrap/Table";
import sortBy from "lodash/sortBy";
import get from "lodash/get";
import GenericSearchForm from "../../forms/GenericSearchForm";
import { navigate, navigate2Login } from "../../../utils";
import { availablecomponents } from '../../../utils/constants';

const ProvidersListView = props => {
  const { searchData, providers = [], deleteProvider, isAuthenticated } = props;
  const { PROVIDERS } = availablecomponents;
  if (!isAuthenticated) navigate2Login();

  const deleteSelectedProvider = event => deleteProvider({ _id: event.target.id });
  const goTo = event => navigate(`/provider/${event.target.id}`);

  const filteredItems = () => {
    const filteredProviders = providers.filter(el => {
      if (searchData.name) {
        return (
          el.name
            .toLowerCase()
            .includes(get(searchData, "name", el.name).toLowerCase())
        );
      }
      return el;
    });

    return sortBy(filteredProviders, el => el.name);
  };

  const providersList = () => {
    return filteredItems().map(provider => {
      const { name, _id, providerUrl } = provider;

      return (
        <tr key={_id}>
          <td>
            <a id={_id} className="simpleLink" onClick={goTo}>{name}</a>
          </td>
          <td><a id={_id} className="simpleLink">{providerUrl}</a></td>
          <td>
            <a className="simpleLink" id={_id} onClick={deleteSelectedProvider}>Delete</a>
          </td>
        </tr>
      );
    })
  };

  return (
    <div>
      <GenericSearchForm componentname={PROVIDERS} />
      <div className='addEditLink'>
        <a className="simpleLink" onClick={() => navigate("/provider/new")}>
          Add Provider
        </a>
      </div>
      <Table striped bordered hover>
        <tbody>{providersList()}</tbody>
      </Table>
    </div>
  );
};

export default ProvidersListView;
