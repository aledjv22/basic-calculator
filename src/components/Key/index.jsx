import React from "react";
import { CalContext } from "../../context";
import operator from "../../utils/operator";

function Button(props) {
  const {
    isEmpty,
    fstNumber,
    setFstNumber,
    sndNumber,
    setSndNumber,
    operation,
    setOperation,
    calculation,
    setSolve,
    setResult
  } = React.useContext(CalContext);
  const { value } = props;
  return (
    <button className='bg-gray-500 w-[50px] h-[50px] text-white border-white border rounded-xl'
    onClick={()=>{
      if(isEmpty(fstNumber) && isEmpty(sndNumber) && operator(value))
        setSolve(true);

      if(value !== '=' && !operator(value) && isEmpty(operation))
        setFstNumber(fstNumber + value);

      if(value !== '=' && operator(value) && !isEmpty(fstNumber) && isEmpty(sndNumber))
        setOperation(value);

      if(value !== '=' && !isEmpty(fstNumber) && !isEmpty(operation))
        setSndNumber(sndNumber + value);

      if(value === '=' && !isEmpty(fstNumber) && isEmpty(sndNumber) && isEmpty(operation)){
        setTimeout(()=>{
          setResult(fstNumber);
        },300);
        setResult('');
        setSolve(true);
      }

      if(value === '=' && !isEmpty(fstNumber) && !isEmpty(sndNumber) && !isEmpty(operation)){
        calculation(operation);
        setSolve(true);
      }
    }}>
      {value}
    </button>
  );
}

export default Button;