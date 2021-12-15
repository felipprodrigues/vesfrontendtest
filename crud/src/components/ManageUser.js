import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TableCell, TableRow, Table, TableHead, TableBody, Button } from '@material-ui/core';
import { getUsers, deleteUser } from '../service/api';
import Avatar from 'react-avatar';

export const ManageUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  }

  const deleteUserData = async (id) => {
    await deleteUser(id)
    getAllUsers();
  }

  return (
    <>
      <Table className="table__wrapper">
        <TableHead className="table__head">
          <TableRow >
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow >
              <TableCell>
                <Avatar name={user.nome} size="50" round={true} />
              </TableCell>
              <TableCell>{user.nome}</TableCell>
              <TableCell>{user.phoneOne}</TableCell>
              <TableCell>
                <Button className="button__unicode" variant="contained" component={Link} to={`/preview/${user.id}`} >🔎</Button>
              </TableCell>
              <TableCell>
                <Button className="button__unicode" variant="contained" component={Link} to={`/edit/${user.id}`}>✏️</Button>
              </TableCell>
              <TableCell>
                <Button className="button__unicode" variant="contained" onClick={() => deleteUserData(user.id)}>❌</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
