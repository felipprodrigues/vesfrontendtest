import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { TableCell, TableRow, Table, TableHead, TableBody } from '@material-ui/core';
import { getUsers } from '../service/api';
import Avatar from 'react-avatar';

export const PreviewUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  }

  return (
    <>
      <Table id="previewTable" className="table__wrapper">
        <TableHead className="table__head">
          <TableRow >
            <TableCell className="table__tags"></TableCell>
            <TableCell className="table__tags">Nome</TableCell>
            <TableCell className="table__tags">Email</TableCell>
            <TableCell className="table__tags">Contato Primário</TableCell>
            <TableCell className="table__tags">Contato Secundário</TableCell>
            <TableCell className="table__tags">Contato Terciário</TableCell>
            <TableCell className="table__tags">Endereço Primário</TableCell>
            <TableCell className="table__tags">Endereço Secundário</TableCell>
            <TableCell className="table__tags">Endereço Terciário</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow >
              <TableCell className="has-dark-text has-side-borders">
                <Avatar name={user.nome} size="50" round={true} />
              </TableCell>
              <TableCell className="has-dark-text has-side-borders">{user.nome}</TableCell>
              <TableCell className="has-dark-text has-side-borders">{user.email}</TableCell>
              <TableCell className="has-dark-text has-side-borders">{user.phoneOne}</TableCell>
              <TableCell className="has-dark-text has-side-borders">{user.phoneTwo}</TableCell>
              <TableCell className="has-dark-text has-side-borders">{user.phoneThree}</TableCell>
              <TableCell className="has-dark-text has-side-borders">{user.addressOne}</TableCell>
              <TableCell className="has-dark-text has-side-borders">{user.addressSecond}</TableCell>
              <TableCell className="has-dark-text has-side-borders">{user.addressThree}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link id="previewButtonReturn" to={'/'} className='button__return'>Voltar</Link>
    </>
  )
}
