import { combineReducers } from 'redux';
// import OTBSamplesErrors from './otb_sample_errors_reducer.js';
// import OTBSampleHistoriesErrors from './otb_sample_history_errors_reducer.js';

const errorsReducer = combineReducers({

    // OTBSamples: OTBSamplesErrors,
    // OTBSampleHistories: OTBSampleHistoriesErrors
});

export default errorsReducer;