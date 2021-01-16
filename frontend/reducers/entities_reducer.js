import { combineReducers } from 'redux';
import ProfileReducer from './profile_reducer';
import RegisterReducer from './register_reducer';

const entitiesReducer = combineReducers({
    registration: RegisterReducer,
    userProfile: ProfileReducer

});

export default entitiesReducer;