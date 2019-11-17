import { combineReducers } from 'redux';
import ExtraItemReducer from '../reducers/ExtraReducer';
import OrderReducer from '../reducers/OrderReducer';
import AuthReducer from '../reducers/AuthReducer';


const Reducers = combineReducers({
    order:OrderReducer,
    extra:ExtraItemReducer,
    auth:AuthReducer
});

export default Reducers;