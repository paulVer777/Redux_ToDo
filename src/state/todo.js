const ADD = "todo/ADD";
const DEL = "todo/DEL"

export const add = () => ({type: ADD});
export const del = (index) => ({type: DEL,index});


const initialState = [{task: 'grać na gitarze'}, {task: 'uczyć się'}]


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