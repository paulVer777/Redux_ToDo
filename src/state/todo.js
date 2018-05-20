const ADD = "todo/ADD";
const DEL = "todo/DEL"

export const add = () => ({type: ADD});
export const del = () => ({type: DEL});


const initialState = [{task: 'grać'}, {task: 'uczyć się'}]


export default (state = initialState, action) => {

    switch (action.type) {
        case ADD:
            return state.concat({

                ...state,
                task: "posprzątać"
            })
        case DEL:
            return state.filter((value, index) => index !== action.index)

        default:
            return state
    }
}