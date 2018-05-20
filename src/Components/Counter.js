import React from 'react'
import {connect} from "react-redux";
import {inc,dec} from "../state/counter";

const Counter = (props) => (


    <div>
        <h1>{props.count}</h1>
        <button onClick={props.onInc}>+</button>
        <button onClick={props.onDec}>-</button>
    </div>
)

const mapStateToProps=(state)=>({

    count:state.counter.count

})
const mapDispatchToProps=(dispatch)=>({

    onInc:()=>dispatch(inc()),
    onDec:()=>dispatch(dec())

})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)