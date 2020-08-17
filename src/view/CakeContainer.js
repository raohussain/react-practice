import React from 'react'
import { buyCake } from './redux/cake/cakeActions'
import { connect } from 'react-redux'

 const CakeContainer = (props) => {
    return (
        <div>
            <h1>Number of Cake - {props.numberOfCake}  </h1>
            <button onClick ={props.buyCake}>Buy Cake </button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
        numberOfCake:state.cake.numberOfCake
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        buyCake : ()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer);
