import React, {Component} from 'react';
import ToDo from './Components/ToDo'
import './App.css';
import {store} from './store'
import Counter from './Components/Counter'

class App extends Component {
    render() {
        return (

            <div>

                <ToDo store={store}/>
                <Counter store={store}/>

            </div>


        );
    }
}

// Komponent ToDo jak i komponent Counter otrzymały w propsach cały stan

export default App;
