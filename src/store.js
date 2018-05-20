
////Tutaj importujemy wszystkie stany, jak sama nazwa wskazuję jest to przechowalnia, a więc
//przechowujemy stany w jednym obiekcie po czym, po wyeksportowaniu możemy ten stan przekazywać do komponentów aby mogły operowac na danych///


import { createStore,combineReducers} from 'redux'
import todo from './state/todo'
import counter from './state/counter'

const reducer =combineReducers({
    todo,
    counter
})



//eksportujemy dalej aby w app.js można było przekazać stan do komponentu.


export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


