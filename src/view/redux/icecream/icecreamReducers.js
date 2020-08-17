import {BUY_ICECREAM} from './icecreamTypes';

const initalIceCreamState = {
    numberOfIceCream : 20
}

export const iceCreamReducer = (state=initalIceCreamState,action)=>{
    switch (action.type) {
        case BUY_ICECREAM:
            return{
                ...state,
                numberOfIceCream : state.numberOfIceCream-1
            }
        default:
            return state
    }
}
export default iceCreamReducer;