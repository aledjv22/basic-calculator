import React, {useState} from "react";
import addition from "../utils/addition";
import subtraction from "../utils/subtraction";
import multiply from "../utils/multiply";
import divide from "../utils/divide";

const CalContext = React.createContext();

function CalProvider({ children }){

    const [fstNumber, setFstNumber] = useState('');

    const [sndNumber, setSndNumber] = useState('');

    const [result, setResult] = useState('Syntax Error');

    const [operation, setOperation] = useState('');

    const [solve, setSolve] = useState(false);

    const isEmpty = (a) => {
        return a === '';
    };

    const calculation = (a) => {
        switch (a) {
            case '+':
                setResult(addition(fstNumber, sndNumber));
                break;
            case '-':
                setResult(subtraction(fstNumber, sndNumber));
                break;
            case 'x':
                setResult(multiply(fstNumber, sndNumber));
                break;
            case '÷':
                setResult(divide(fstNumber, sndNumber));
                break;
            default:
                break;
        }
    };

    return (
        <CalContext.Provider value={{
            isEmpty,
            fstNumber,
            setFstNumber,
            sndNumber,
            setSndNumber,
            result,
            setResult,
            operation,
            setOperation,
            calculation,
            solve, 
            setSolve
        }}>
            {children}
        </CalContext.Provider>
    );
}

export { CalContext, CalProvider };