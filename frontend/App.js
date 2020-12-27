import React from "react";
import {Route, Switch, Redirect } from 'react-router-dom';
import Modal from "./components/modal/modal.jsx"
import { HashRouter } from 'react-router-dom';
import HomePageContainer from './components/home_page/home_page_container'
import "../static/css/appStyles.scss"
import RegistrationPageContainer from './components/registration/registration_page_container';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';

function App() {
  return (
    <div className="App">
              <Modal />

      <HashRouter>
        <Switch>
          <Route exact path='/' component={HomePageContainer} />
          <Route exact path ='/register' component={RegistrationPageContainer} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>

      </HashRouter>
   
    </div>
  );
}

export default App;
