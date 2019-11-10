import Mask from '../common/textMask';

const INITIAL_STATE = {
    items:[],
    total:'0'
}

export default function ExtraItemReducer(state = INITIAL_STATE,  action){
    switch (action.type) {
        case 'ADD_ITEM':
            let total = Mask.maskTotal(action.item.price) + Mask.maskTotal(state.total);
            state.total = 'R$'+total.toFixed(2);
            state.items = [...state.items, action.item];

            return state;
        case 'REMOVE_ITEM':
            const index = state.items.indexOf(action.item);
            total = Mask.maskTotal(state.total) - Mask.maskTotal(action.item.price);
            state.items.splice(index, 1);
            state.total = 'R$'+total.toFixed(2);

            return state;
        case 'CLEAR_ITEMS':
            state.items = [];
            state.total = '0';

            return state;
        case 'CLEAR_TOTAL':
            state.total = action.total;
            
            return state;
        default:
            return state;
    }
}
