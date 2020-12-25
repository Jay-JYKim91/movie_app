import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/home';
import About from './routes/about';
import Details from './routes/details';
import Navi from './components/navi';

function App() {
  return <HashRouter>
    <Navi />
    <Route path="/" exact={true} component={ Home } />
    <Route path="/about" component={ About } />
    <Route path="/movie/:id" component={ Details } />
  </HashRouter>

}

export default App;
