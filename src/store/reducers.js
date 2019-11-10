import { combineReducers } from 'redux';
import ExtraItemReducer from '../reducers/ExtraReducer';
import OrderReducer from '../reducers/OrderReducer';

const Reducers = combineReducers({
    extra:ExtraItemReducer,
    order:OrderReducer
});

export default Reducers;