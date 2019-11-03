import { combineReducers } from 'redux';
import ExtraItemReducer from '../reducers/ExtraReducer';
import GetProductsReducer from '../reducers/GetProductsReducer';

const Reducers = combineReducers({
    extra:ExtraItemReducer,
    getProducts:GetProductsReducer
});

export default Reducers;