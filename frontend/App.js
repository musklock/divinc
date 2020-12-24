import React from "react";
import {Route, Switch, Redirect } from 'react-router-dom';
import Modal from "./components/modal/modal.jsx"
import { HashRouter } from 'react-router-dom';
import MainPageContainer from './components/main_page/main_page_container'
import "../static/css/appStyles.scss"
// import { AuthRoute, ProtectedRoute } from '../util/route_util';

function App() {
  return (
    <div className="App">
              <Modal />

      <HashRouter>
        <Switch>
          <Route exact path='/' component={MainPageContainer} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>

      </HashRouter>
   
    </div>
  );
}

export default App;
