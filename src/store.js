
////Tutaj importujemy wszystkie stany, jak sama nazwa wskazuję jest to przechowalnia, a więc
//przechowujemy stany w jednym obiekcie po czym, po wyeksportowaniu możemy ten stan przekazywać do komponentów aby mogły operowac na danych///


import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import todo from './state/todo'
import counter from './state/counter'
import auth, { initAuthUserSync } from './state/auth'

const reducer =combineReducers({
    todo,
    counter,
    auth
})



//eksportujemy dalej aby w app.js można było przekazać stan do komponentu.


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

store.dispatch(initAuthUserSync())


