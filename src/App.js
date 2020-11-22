import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SiderDemo from './Components/Layout'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

function App(){
  return (
  <>
  <BrowserRouter>
    <Switch>
      <Route path="/"><SiderDemo /></Route>
    </Switch>
  </BrowserRouter>
  </>);
}

export default App;