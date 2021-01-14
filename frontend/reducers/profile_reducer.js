import { UPDATE_USER_PROFILE } from '../actions/register_actions';


const ProfileReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case UPDATE_REGISTER:
            newState = {...state};
            Object.keys(action.registerObject).forEach((key, idx) => {
                newState[key] = Object.values(action.registerObject)[idx];
            })

            return newState;
        default:
            return state;
    }
}

export default ProfileReducer;