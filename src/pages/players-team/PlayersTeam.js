import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';

import axios from 'axios';
import { orderBy } from 'lodash';

const PlayersTeam = ({ match }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://brazilian-league.herokuapp.com/players/team/${match.params.id}`)
      .then(res => {
        setData(orderBy(res.data, ['name']));
      })
  }, [match.params.id]);

  const renderRow = player => {
    return (
      <tr>
        <th scope="row">{player.position}</th>
        <th>{player.name}</th>
        <th className="text-right">{player.age}</th>
      </tr>
    )
  }

  return (
    <div className="container mt-5 col-md-5">
      <Table>
        <thead>
          <tr>
            <th>Posição</th>
            <th>Nome</th>
            <th className="text-right">Idade</th>
          </tr>
        </thead>
        <tbody>
          {data.map(renderRow)}
        </tbody>
      </Table>
    </div>
  )

}


export default PlayersTeam