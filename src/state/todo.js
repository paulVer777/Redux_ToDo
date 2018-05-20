const ADD = "todo/ADD";
const DEL = "todo/DEL";
const NEWTEXT = "todo/NEWTEXT"

export const add = (text) => ({type: ADD, text: text});
export const del = (index) => ({type: DEL, index});
export const newText = (text) => ({type: NEWTEXT, text: text})

const initialState = {
    tasks: [{text: 'grać na gitarze', completed: true}, {text: 'uczyć się', completed: true}],
    newtxt: ""
}
export default (state = initialState, action) => {

    switch (action.type) {

        case ADD:
            return action.text ?

                ({
                    ...state,
                    tasks: state.tasks.concat({text: state.newtxt, completed: 'false'}),
                    newtxt: ""
                })
                :
                state
        case DEL:
            return {
                ...state,
                tasks: state.tasks.filter((value, index) => index !== action.index)
            };
        case NEWTEXT:
            return {
                ...state,
                newtxt: action.text
            }
        default:
            return state
    }
}