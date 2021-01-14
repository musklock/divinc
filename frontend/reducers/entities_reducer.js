import { combineReducers } from 'redux';
import RegisterErrorsReducer from './otb_sample_errors_reducer'
// import OTBSamplesReducer from './otb_samples_reducer.js';
// import OTBSampleHistoriesReducer from './otb_sample_histories_reducer';
// import currentOTBSamplesReducer from './current_otb_samples_reducer'
// import currentOTBSampleHistoriesReducer from './current_otb_sample_histories_reducer'

const entitiesReducer = combineReducers({
    // OTBSamples: OTBSamplesReducer,
    // OTBSampleHistories: OTBSampleHistoriesReducer,
    // currentOTBSamples: currentOTBSamplesReducer,
    // currentOTBSampleHistories: currentOTBSampleHistoriesReducer
});

export default entitiesReducer;