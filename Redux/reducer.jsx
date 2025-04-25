import { ORDER_CAKE } from "./actionTypes";

const initialState = {
    numCake: 10
};

const cakeReducer=(state=initialState,action)=>{
    switch(action.type){
        case ORDER_CAKE:return{...state,numCake:state.numCake-1}
        default:return state;
    }

}
export default cakeReducer;