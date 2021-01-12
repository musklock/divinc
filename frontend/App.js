import React from "react";
import {Route, Switch, Redirect } from 'react-router-dom';
import Modal from "./components/modal/modal.jsx";
import { HashRouter } from 'react-router-dom';
import HomePageContainer from './components/home_page/home_page_container';
import "../static/css/appStyles.scss";
import RegistrationPageContainer from './components/registration/registration_page_container';
import RegistrationPageContainer2 from './components/registration/registration_page_2_container';
import RegistrationProfileContainer from './components/registration/reigstration_profile_container';

// import { AuthRoute, ProtectedRoute } from '../util/route_util';

function App() {
  return (
    <div className="App">
              <Modal />

      <HashRouter>
        <Switch>
          <Route exact path='/' component={HomePageContainer} />
          <Route exact path ='/register2' component={RegistrationPageContainer2} />
          <Route exact path ='/register' component={RegistrationPageContainer} />
          <Route exact path ='/register3' component={RegistrationProfileContainer} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>

      </HashRouter>
   
    </div>
  );
}

export default App;
