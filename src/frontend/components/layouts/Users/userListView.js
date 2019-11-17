import React from "react";
import Table from "react-bootstrap/Table";
import sortBy from "lodash/sortBy";
import get from "lodash/get";
import GenericSearchForm from "../../forms/GenericSearchForm";
import { navigate, navigate2Login } from "../../../utils";
import { availablecomponents } from '../../../utils/constants';

const UserListView = props => {
  const {
    users = [],
    searchData,
    deleteUser,
    isAuthenticated,
    hasUsersImport,
    importData,
  } = props;

  if (!isAuthenticated) navigate2Login();

  const { USERS } = availablecomponents;
  let fileReader;

  const deleteSelectedUser = event => deleteUser({ _id: event.target.id });
  const goTo = event => navigate(`/user/${event.target.id}`);

  const filteredItems = () => {
    const filteredUsers = users.filter(el => {
      if (searchData.title) {
        return (
          el.title
            .toLowerCase()
            .includes(get(searchData, "title", el.title).toLowerCase())
        );
      }
      return el;
    });

    return sortBy(filteredUsers, el => el.title);
  };

  const handleFileRead = e => {
    const users = new Function(fileReader.result)();
    const list = {
      data: users,
      importType: 'users'
    };
    importData(list);
  };

  const onImport = e => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(e.target.files[0]);
  };

  const usersList = () => {
    return filteredItems().map(user => {
      const { name, isAdmin, _id } = user;

      return (
        <tr key={_id}>
          <td>
            <a id={_id} className="simpleLink" onClick={goTo}>{name}</a>
          </td>
          <td>
            <a id={_id} className="simpleLink" onClick={goTo}>{isAdmin.toString()}</a>
          </td>
          <td>
            <a className="simpleLink" id={_id} onClick={deleteSelectedUser}>Delete</a>
          </td>
        </tr>
      );
    })
  };

  return (
    <div className='wrapper'>
      <GenericSearchForm componentname={USERS} />
      { hasUsersImport &&
        <div className='importContainer'>
          <input type="file" id="importFile" onChange={onImport} />
        </div> }
      <div className='addEditLink'>
        <a className="simpleLink" onClick={() => navigate("/user/new")}>
          Add User
        </a>
      </div>
      <Table striped bordered hover>
        <tbody>{usersList()}</tbody>
      </Table>
    </div>
  );
};

export default UserListView;
