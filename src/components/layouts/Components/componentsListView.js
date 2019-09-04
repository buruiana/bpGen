import React from "react";
import Table from "react-bootstrap/Table";
import sortBy from "lodash/sortBy";
import isEmpty from "lodash/isEmpty";
import get from "lodash/get";
import GenericSearchForm from "../../forms/GenericSearchForm";
import { navigate } from "../../../utils";
import { availablecomponents } from '../../../utils/constants';

const ComponentsListView = props => {
  const { searchData, components = [], deleteComponent, importData } = props;
  const { COMPONENTS } = availablecomponents;
  let fileReader;

  const deleteSelectedComponent = event =>  deleteComponent({ id: event.target.id });
  const goTo = event => navigate(`/component/${event.target.id}`);

  const filteredItems = () => {
    const filteredComponents = components.filter(el => {
      if (!isEmpty(searchData) && searchData.name) {
        return (el.title.toLowerCase().indexOf(props.searchData.name.toLowerCase()) !== -1
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
      const { title, id, provider, techno } = component;

      return (
        <tr key={id}>
          <td>
            <a id={id} className="simpleLink" onClick={goTo}>{title}</a>
          </td>
          <td>{techno}</td>
          <td>{provider}</td>
          <td>
            <a className="simpleLink" id={id} onClick={deleteSelectedComponent}>Delete</a>
          </td>
        </tr>
      );
    })
  };

  const handleFileRead = e => {
    const components = new Function(fileReader.result);

    const list = {
      data: components,
      importType: 'components'
    };
    importData(list);
  };

  const onImport = e => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    console.log('console: ------------------------', e.target.files[0]);
    fileReader.readAsText(e.target.files[0]);
  };

  return (
    <div>
      <GenericSearchForm componentname={COMPONENTS} />
      <input type="file" id="importFile" onChange={onImport} />
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
