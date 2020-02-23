import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './header/Header';
import ListTeam from './pages/list-team/ListTeam';

function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Route path='/' exact component={ListTeam} />
      </div>
    </Router>
  );
}

export default App;
