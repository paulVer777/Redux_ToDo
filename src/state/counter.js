
////TYPY AKCJI////////

const INC = 'counter/INC';
const DEC = 'counter/DEC';
/////////////////////


/////////KREATORY AKCJI///////////////

export const inc = () => ({type: INC});
export const dec = () => ({type: DEC});

//////////////////////////////////////

//////STAN POCZĄTKOWY////////////

const initialState = {
    count: 0
}
////////////////////////


//////REDUCER-funkcja która manipuluje stanem /////////////

export default (state = initialState, action) => {

    switch (action.type) {
        case INC:
            return {
                ...state,
                count: state.count + 1
            }
        case DEC:
            return {

                ...state,
                count: state.count -1
            }
        default:
            return state
    }
}

/////////////////////////////////////













