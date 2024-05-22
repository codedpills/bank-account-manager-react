import {createStore} from 'redux';
import accountReducer from '../Reducers/accountReducer';

const store = createStore(accountReducer)

export default store