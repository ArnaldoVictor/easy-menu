import Easy from '../services/firebase';

const INITIAL_STATE = {
    key:'',
    address:'',
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
            state.address = action.address != undefined ? action.address : '';
            state.qtd = action.qtd;
            state.total = action.total;

            console.log("State:"+state.key)

            if(state.key === ''){
                state.key = Easy.setOrder(state.key, state.address, state.products, state.extraItems, state.observation, state.qtd, state.total);
            }else{
                Easy.setOrder(state.key, state.address, state.products, state.extraItems, state.observation, state.qtd, state.total);
            }
            clearState();

            return state;

        case 'RETRIEVE_DATA':
            state.key = action.key;
            state.address = action.address;
            return state;

        case 'SET_ADDRESS':
            state.address = action.address;
            return state;

        case 'CLEAR_KEY':
            state.key = '';
            return state;

        default:
            return state;
    }
}