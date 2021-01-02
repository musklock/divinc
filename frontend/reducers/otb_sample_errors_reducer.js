import {
    CLEAR_ERRORS,
    RECEIVE_OTB_SAMPLE_ERRORS
} from '../actions/otb_sample_actions'


export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_OTB_SAMPLE_ERRORS:
            return action.errors
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};
