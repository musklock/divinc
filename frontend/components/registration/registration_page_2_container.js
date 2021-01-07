import React from 'react';
import { connect } from 'react-redux';
import RegistrationPage from "./registration_page.jsx";
// import {fetchOTBSamples} from '../../actions/otb_sample_actions';
// import {fetchOTBSampleHistories} from '../../actions/otb_sample_history_actions';



const mSTP = state => ({
  // OTBSamples: Object.values(state.entities.OTBSamples)
});


const mDTP = dispatch => ({
    // fetchOTBSamples: () => dispatch(fetchOTBSamples()),
    // fetchOTBSampleHistories: () => dispatch(fetchOTBSampleHistories()),
});




export default connect(mSTP, mDTP)(RegistrationPage)