import {BUY_CAKE} from './cakeTypes';

const initalCakeStete = {
    numberOfCake : 15
}

export const cakeReducer = (state=initalCakeStete,action)=>{
    switch (action.type) {
        case BUY_CAKE:
            return{
                ...state,
                numberOfCake : state.numberOfCake-1
            }
        default:
            return state
    }
}
export default cakeReducer;