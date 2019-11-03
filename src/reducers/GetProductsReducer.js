import Easy from '../services/firebase';

const INITIAL_STATE = {
    products:[]
}

export default function GetProductsReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case 'GET_DATA':
            const list = [];
            const ref = Easy.getProducts();

            ref.once('value', (snapshot)=>{
                snapshot.forEach((product)=>{
                list.push({
                        key:product.key,
                        name:product.val().name,
                        price:product.val().price,
                        url:product.val().urlImage,
                        desc:product.val().desc
                    });
                });                
            })
            state.products = [list];
            return state;
        default:
            return state;
    }
}