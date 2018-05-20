import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import {add, del, newText} from '../state/todo'
import {connect} from 'react-redux'
import MenuItem from '@material-ui/core/MenuItem';

const style = {
    h: {
        textAlign: 'center',
        backgroundColor: '#2597c4',
        color: 'white',
        padding: '10px 0px'
    }
}

const ToDo = (props) => (
    <div>

        <h1 style={style.h}>Todos list</h1>
        <TextField

            placeholder={'Task name'}
            onChange={props.onInputHandler}
            value={props.txt}

        />
        <RaisedButton onClick={props.change}

                      primary={true}

        >Klik</RaisedButton>

        {
            props.task.map((value, index) => (

                <MenuItem onClick={() => props.ondelete(index)}>{value.text}</MenuItem>
            ))
        }
    </div>
)
const mapStateToProps = (state) => ({
    task: state.todo.tasks,
    txt: state.todo.newtxt
})

const mapDispatchToProps = (dispatch) => ({

    change: () => dispatch(add()),
    ondelete: (index) => dispatch(del(index)),
    onInputHandler: (event, value) => dispatch(newText(value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDo)