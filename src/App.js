import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './header/Header';
import ListTeam from './pages/list-team/ListTeam';
import TopScore from './pages/top-scorer/TopScorer';
import PlayersTeam from './pages/players-team/PlayersTeam';

function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Route path='/' exact component={ListTeam} />
        <Route path='/list' exact component={ListTeam} />
        <Route path='/teams/players/:id' exact component={PlayersTeam} />
        <Route path='/topscore' exact component={TopScore} />
      </div>
    </Router>
  );
}

export default App;
