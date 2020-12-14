import {
    RECEIVE_OTB_SAMPLES,
    RECEIVE_OTB_SAMPLE,
    REMOVE_OTB_SAMPLE
} from "../actions/otb_sample_actions"

// const compositeID = (OTBSampleHistory) => (
    
// )
// may need composite function for RECEIVE_OTB_SAMPLE_HISTORY Action

const OTBSamplesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_OTB_SAMPLES:
            return Object.assign({}, state, action.OTBSamples)
        case RECEIVE_OTB_SAMPLE:
            return Object.assign({}, state, { [action.OTBSample.id]: action.OTBSample })
        case REMOVE_OTB_SAMPLE:
            const newState = Object.assign({}, state);
            delete newState[action.OTBSampleCompositeId];
            return newState;
        default:
            return state;
    }
}

export default OTBSamplesReducer;