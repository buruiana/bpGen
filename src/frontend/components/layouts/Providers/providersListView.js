import React from "react";
import Table from "react-bootstrap/Table";
import sortBy from "lodash/sortBy";
import isEmpty from "lodash/isEmpty";
import get from "lodash/get";
import GenericSearchForm from "../../forms/GenericSearchForm";
import { navigate, navigate2Login } from "../../../utils";
import { availablecomponents } from '../../../utils/constants';

import {
  getTechnoName,
  getProviderName,
} from '../../../utils';

const ProvidersListView = props => {
  const {
    searchData,
    providers = [],
    technos,
    deleteProvider,
    isAuthenticated,
    hasProvidersImport,
    importData,
  } = props;

  if (!isAuthenticated) navigate2Login();

  const { PROVIDERS } = availablecomponents;
  let fileReader;

  const deleteSelectedProvider = event => deleteProvider({ _id: event.target.id });
  const goTo = event => navigate(`/provider/${event.target.id}`);

  const filteredItems = () => {
    const filteredProviders = providers.filter(el => {
      if (!isEmpty(searchData) && searchData.title) {
        return (el._id.toLowerCase().indexOf(searchData.title.toLowerCase()) !== -1
          && get(searchData, 'techno', el.providersTechno) === el.providersTechno);
      }
      return get(searchData, 'techno', el.providersTechno) === el.providersTechno;
    });

    return sortBy(filteredProviders, el => el.title);
  };

  const handleFileRead = e => {
    const providers = new Function(fileReader.result)();
    const list = {
      data: providers,
      importType: 'providers'
    };
    importData(list);
  };

  const onImport = e => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(e.target.files[0]);
  };

  const providersList = () => {
    return filteredItems().map(provider => {
      const { title, _id, providerUrl, providersTechno } = provider;

      return (
        <tr key={_id}>
          <td>
            <a id={_id} className="simpleLink" onClick={goTo}>{title}</a>
          </td>
          <td><a id={_id} className="simpleLink">{getTechnoName(technos, providersTechno)}</a></td>
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
      { hasProvidersImport &&
        <div className='importContainer'>
          <input type="file" id="importFile" onChange={onImport} />
        </div> }
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
