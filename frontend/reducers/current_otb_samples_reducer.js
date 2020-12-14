import { SET_CURRENT_OTB_SAMPLES } from "../actions/current_otb_sample_actions"

const currentOTBSamplesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SET_CURRENT_OTB_SAMPLES:
      return Object.assign({}, state, {currentOTBSamples: action.currentOTBSamples})
    default:
      return state;
  }
};

export default currentOTBSamplesReducer;