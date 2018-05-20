import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import {add} from '../state/todo'
import {connect} from 'react-redux'
import MenuItem from '@material-ui/core/MenuItem';

const style={
    h:{
        textAlign:'center',
        backgroundColor:'#2597c4',
        color:'white',
        padding:'10px 0px'
    }}

const ToDo =(props)=>(
    <div>

        <h1 style={style.h}>Pawelqs Todo list</h1>

        <TextField

            onChange={props.takeletter}



        />


        <RaisedButton onClick={props.change}

        primary={true}


        >Klik</RaisedButton>

             {

              props.task.map(value => (

                  <MenuItem>{value.task}</MenuItem>
                 ))
             }

    </div>
)
const mapStateToProps=(state)=>({
task:state.todo
})

const mapDispatchToProps=(dispatch)=>({

    change:()=>dispatch(add()),
    takeletter:()=>dispatch()

})



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDo)