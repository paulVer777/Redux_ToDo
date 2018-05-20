import React, {Component} from 'react';
import ToDo from './Components/ToDo'
import Counter from './Components/Counter'
import './App.css';



class App extends Component {
    render() {
        return (

            <div>

                <ToDo />

            </div>


        );
    }
}

// Komponent ToDo jak i komponent Counter otrzymały w propsach cały stan

export default App;
