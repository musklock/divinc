import { combineReducers } from 'redux';
import RegisterActionsErrorsReducer from './register_actions_errors_reducer'

const errorsReducer = combineReducers({
    RegistrationErrors: RegisterActionsErrorsReducer
});

export default errorsReducer;