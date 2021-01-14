import React from 'react';
import { connect } from 'react-redux';
import RegistrationPage from "./registration_page.jsx";
import RegistrationPage2 from "./registration_page_2.jsx";
import {updateRegistrationProfileObject, updateUserProfile} from '../../actions/register_actions'
import {withRouter } from 'react-router-dom';


const mSTP = state => ({
  userProfile: state.entities.userProfile,
  registration: state.entities.registration
});


const mDTP = dispatch => ({
  updateRegistrationProfileObject: profileObject => dispatch(updateRegistrationProfileObject(profileObject)),
  updateUserProfile: user => dispatch(updateUserProfile(user))
});




export default withRouter(connect(mSTP, mDTP)(RegistrationPage))