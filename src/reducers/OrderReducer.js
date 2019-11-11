import Easy from '../services/firebase';

const INITIAL_STATE = {
    key:'',
    address:'Mesa 1',
    products:[],
    extraItems:[],
    observation:'',
    qtd:0,
    total:'R$0,00'
}

export default function OrderReducer(state = INITIAL_STATE, action){

    function clearState(){
        state.products = [];
        state.extraItems = [];
        state.observation = '';
        state.qtd = 0;
        state.total = 'R$0,00';
    }

    switch(action.type){
        case 'ORDER':
            const products = [];
            const extraItems = [];

            products.push(action.product);
            action.items.length > 0 && extraItems.push(action.items);
            state.products = products;
            state.extraItems = extraItems;
            state.observation = action.observation;
            state.qtd = action.qtd;
            state.total = action.total;

            if(state.key === ''){
                state.key = Easy.setOrder(state.key, state.address, state.products, state.extraItems, state.observation, state.qtd, state.total);
            }else{
                Easy.setOrder(state.key, state.address, state.products, state.extraItems, state.observation, state.qtd, state.total);
            }
            clearState();

            return state;
        default:
            return state;
    }
}