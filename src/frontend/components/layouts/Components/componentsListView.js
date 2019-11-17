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

const ComponentsListView = props => {
  const {
    searchData,
    components = [],
    deleteComponent,
    importData,
    hasComponentImport,
    isAuthenticated,
    providers,
    technos,
  } = props;

  if (!isAuthenticated) navigate2Login();

  const { COMPONENTS } = availablecomponents;
  let fileReader;

  const deleteSelectedComponent = event =>  deleteComponent({ _id: event.target.id });
  const goTo = event => navigate(`/component/${event.target.id}`);

  const filteredItems = () => {
    const filteredComponents = components.filter(el => {
      if (!isEmpty(searchData) && searchData.title) {
        return (el.title.toLowerCase().indexOf(searchData.title.toLowerCase()) !== -1
          && get(searchData, 'provider', el.provider) === el.provider
          && get(searchData, 'techno', el.techno) === el.techno);
      }
      return (get(searchData, 'provider', el.provider) === el.provider
        && get(searchData, 'techno', el.techno) === el.techno);
    });

    return sortBy(filteredComponents, el => el.title);
  };

  const componentsList = () => {
    return filteredItems().map(component => {
      const { title, _id, provider, techno } = component;

      return (
        <tr key={_id}>
          <td>
            <a id={_id} className="simpleLink" onClick={goTo}>{title}</a>
          </td>
          <td>{getTechnoName(technos, techno)}</td>
          <td>{getProviderName(providers, provider)}</td>
          <td>
            <a className="simpleLink" id={_id} onClick={deleteSelectedComponent}>Delete</a>
          </td>
        </tr>
      );
    })
  };

  const handleFileRead = e => {
    const components = new Function(fileReader.result)();
    const list = {
      data: components,
      importType: 'components'
    };
    importData(list);
  };

  const onImport = e => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(e.target.files[0]);
  };

  return (
    <div className='wrapper'>
      <GenericSearchForm componentname={COMPONENTS} />
      { hasComponentImport &&
        <div className='importContainer'>
          <input type="file" id="importFile" onChange={onImport} />
        </div> }
      <div className='addEditLink'>
        <a className="simpleLink" onClick={() => navigate("/component/new")}>
          Add Component
        </a>
      </div>
      <Table striped bordered hover>
        <tbody>{componentsList()}</tbody>
      </Table>
    </div>
  );
};

export default ComponentsListView;
