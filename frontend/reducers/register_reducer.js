import { UPDATE_REGISTER_OBJECT} from '../actions/register_actions';


const RegisterReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case UPDATE_REGISTER_OBJECT:
            let newState = {...state};
            Object.keys(action.registerObject).forEach((key, idx) => {
                newState[key] = Object.values(action.registerObject)[idx];
            })

            return newState;
        default:
            return state;
    }
}

export default RegisterReducer;