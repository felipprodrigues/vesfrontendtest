import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TableCell, TableRow, Table, TableHead, TableBody, Button } from '@material-ui/core';
import { getUsers, deleteUser } from '../service/api';

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
            <TableCell className="table__tags">ID</TableCell>
            <TableCell className="table__tags">Nome</TableCell>
            <TableCell className="table__tags">Email</TableCell>
            <TableCell className="table__tags">Contato Primário</TableCell>
            <TableCell className="table__tags">Contato Secundário</TableCell>
            <TableCell className="table__tags">Contato Terciário</TableCell>
            <TableCell className="table__tags">Endereço Primário</TableCell>
            <TableCell className="table__tags">Endereço Secundário</TableCell>
            <TableCell className="table__tags">Endereço Terciário</TableCell>
            <TableCell className="table__tags"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow >
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.nome}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phoneOne}</TableCell>
              <TableCell>{user.phoneTwo}</TableCell>
              <TableCell>{user.phoneThree}</TableCell>
              <TableCell>{user.addressOne}</TableCell>
              <TableCell>{user.addressTwo}</TableCell>
              <TableCell>{user.addressThree}</TableCell>
              <TableCell>
                <Button className="button__unicode--editter" variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${user.id}`} >&#x270E;</Button>
                <Button className="button__unicode--back" variant="contained" onClick={() => deleteUserData(user.id)} >&#128465;</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
