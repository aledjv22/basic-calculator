import React from "react";
import { CalContext } from "../../context";

function Reboot() {
  const {
    setFstNumber,
    setSndNumber,
    setOperation,
    setSolve,
    setResult
  } = React.useContext(CalContext);

  return (
    <button className='bg-yellow-500 w-[50px] h-[25px] text-black border-white border rounded-xl'
    onClick={()=>{
      setFstNumber('');
      setSndNumber('');
      setOperation('');
      setSolve(false);
      setResult('Syntax Error');
    }}>
      ↺
    </button>
  );
}

export default Reboot;