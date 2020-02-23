import React, { useState, useEffect } from 'react';
import { Table, Button } from 'reactstrap';
import axios from 'axios';

import { orderBy } from 'lodash'

const ListTeam = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://brazilian-league.herokuapp.com/teams`)
      .then(res => {
        setData(orderBy(res.data, ['name']))
      })
  }, [])

  const renderRow = team => {
    return (
      <tr key={team.id}>
        <th scope="row"><img src={team.urlLogo} style={{height: 70}}></img></th>
        <td className="align-middle" style={{textTransform: 'uppercase'}}>{team.name}</td>
        <th className="text-right align-middle"><Button color="info">Escalação</Button>{' '}</th>
      </tr>
    )
  }

  return (
    <div className="container mt-5 col-md-6">
      <Table>
        <thead>
          <tr>
            <th>Escudo</th>
            <th>Nome</th>
            <th className="text-right">Escalação</th>
          </tr>
        </thead>
        <tbody>
          {data.map(renderRow)}
        </tbody>
      </Table>
    </div>
  );
}

export default ListTeam;