import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer.js'
import errorsReducer from './errors_reducer.js'
import UIReducer from './ui_reducer'

const rootReducer = combineReducers({
    entities: entitiesReducer,
    errors: errorsReducer,
    ui: UIReducer
});


export default rootReducer;