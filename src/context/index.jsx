import React, {useState} from "react";
import addition from "../calc/addition";
import subtraction from "../calc/subtraction";
import multiply from "../calc/multiply";
import divide from "../calc/divide";

const CalContext = React.createContext();

function CalProvider({ children }){

    const [isEmpty, setIsEmpty] = useState(true);

    const [fstNumber, setFstNumber] = useState('');

    const [sndNumber, setSndNumber] = useState('');

    const [result, setResult] = useState('');

    const [operation, setOperation] = useState('');

    const add = (a,b) => {
        if(a !== '' && b !== ''){
            a = parseInt(a);
            b = parseInt(b);
            setIsEmpty(false);
            return setResult(addition(a,b));
        }
    };

    const sub = (a,b) => {
        if(a !== '' && b !== ''){
            a = parseInt(a);
            b = parseInt(b);
            setIsEmpty(false);
            return setResult(subtraction(a,b));
        }
    }

    const mul = (a,b) => {
        if(a !== '' && b !== ''){
            a = parseInt(a);
            b = parseInt(b);
            setIsEmpty(false);
            return setResult(multiply(a,b));
        }
    }

    const div = (a,b) => {
        if(a !== '' && b !== ''){
            a = parseInt(a);
            b = parseInt(b);
            setIsEmpty(false);
            return setResult(divide(a,b));
        }
    }

    return (
        <CalContext.Provider value={{
            isEmpty,
            setIsEmpty,
            fstNumber,
            setFstNumber,
            sndNumber,
            setSndNumber,
            add,
            sub,
            mul,
            div,
            result,
            operation,
            setOperation
        }}>
            {children}
        </CalContext.Provider>
    );
}

export { CalContext, CalProvider };