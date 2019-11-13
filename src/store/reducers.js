import { combineReducers } from 'redux';
import ExtraItemReducer from '../reducers/ExtraReducer';
import OrderReducer from '../reducers/OrderReducer';
import AuthReducer from '../reducers/AuthReducer';

const Reducers = combineReducers({
    extra:ExtraItemReducer,
    order:OrderReducer,
    auth:AuthReducer
});

export default Reducers;