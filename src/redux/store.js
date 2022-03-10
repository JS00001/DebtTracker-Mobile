import authReducer from './reducers/authReducer';
import debtsReducer from './reducers/debtsReducer';
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
	auth: authReducer,
	debts: debtsReducer,
});

export default createStore(rootReducer);
