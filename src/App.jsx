import {useEffect, useState} from 'react'
import SecondCounter from "./components/SecondCounter";
import calculateSeconds from './Library/Time';
import './App.css';

const App = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter => counter + 1)
        }, 1000)
        //console.log(counter) 

        return () => clearInterval(interval)
    }, [counter])


    return (
        <div className="App">
            <SecondCounter 
            hundredThousandsDigit = {calculateSeconds(counter, 100000)}
            tenThousandsDigit = {calculateSeconds(counter, 10000)}
            thousandsDigit = {calculateSeconds(counter, 1000)}
            hundredsDigit = {calculateSeconds(counter, 100)}
            tensDigit = {calculateSeconds(counter, 10)}
            onesDigit = {calculateSeconds(counter, 1)}
             />
           
        </div>
        
    )
};

export default App;