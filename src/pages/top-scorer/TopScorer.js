import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';

import axios from 'axios';

const TopScore = ({ match }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://brazilian-league.herokuapp.com/players/topscores`)
      .then(res => {
        setData(res.data);
      })
  }, [match.params.id]);

  const renderRow = topScore => {
    return (
      <tr>
        <th scope="row"><img alt="TopScore" src={topScore.urlLogo} style={{height: 50}}></img></th>
        <th className="align-middle">{topScore.name}</th>
        <th className="align-middle" >{topScore.goal}</th>
        <th className="text-right align-middle">{topScore.assistance}</th>
      </tr>
    )
  }

  return (
    <div className="container mt-5 col-md-5">
      <Table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Nome</th>
            <th>Gols</th>
            <th className="text-right">Assistencias</th>
          </tr>
        </thead>
        <tbody>
          {data.map(renderRow)}
        </tbody>
      </Table>
    </div>
  )

}


export default TopScore;