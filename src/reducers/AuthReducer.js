const INITIAL_STATE = {
    uid:'',
    address:'',
    status:null
}

export default function AuthReducer(state = INITIAL_STATE,  action){
    switch(action.type){
        case 'QR_READ':
            state.address = action.address;
            return state;
    
        case 'SIGN_IN':
            state.uid = action.uid;
            state.address = action.address;
            state.status = action.status;
            return state;

        case 'SIGN_OUT':
            state.uid = action.uid;
            state.address = action.address;
            state.status = action.status;
            return state;
            
        default:
            return state;
    }

}