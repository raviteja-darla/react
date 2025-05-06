import { useState } from 'react';
import './App.css'

function CounterApp (){
    let [counter, setCounter] = useState(0)
    let [alert, setAlert] = useState('')
    let inValue = () => counter <= 4 ? (setCounter(counter += 1), setAlert("")) : setAlert("Max Value Reached");
    let deValue = () => counter >= 1 ? (setCounter(counter -= 1), setAlert("")) : setAlert("Min Value Reached");
    return (
        <>
            <h1>Hi This is Counter Application Fron Vite React</h1>
            <h2>Count: <span>{ counter }</span></h2>
            <p>{ alert }</p>
            <div className="button-cont">
                <button onClick={ inValue }>Increase</button>
                <button onClick={ deValue }>Decrease</button>
            </div>
        </>
    );
}
export default CounterApp