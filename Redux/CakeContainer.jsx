import React from 'react';
import { connect } from 'react-redux';
import { orderCake } from './actions';

const CakeContainer=({numOfCakes,orderCake}) =>{
  return (
    <div>
    <h2>Number of Cakes:{numOfCakes}</h2>
    <button onClick={orderCake}>order Cake</button>

    </div>
  );
};

const mapStateToProps=(state)=>{
  return{
    numOfCakes:state.numCake
  }
}


const mapDispatchToProps=(dispatch)=>{  

  return{
    orderCake:()=> {
       dispatch(orderCake())

    }
      
  }

}
export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer);
