import React from "react";
import { CalContext } from "./context";

function Operations() {
  const {
    fstNumber,
    sndNumber,
    add,
    sub,
    mul,
    div,
    setOperation
  } = React.useContext(CalContext);

  return (
    <div>
      <div className='mb-2 mt-2'>
        <button className='hover:bg-teal-400 hover:text-black bg-violet-500 p-1 rounded-lg w-[90px] mr-5' 
        onClick={()=>{
          add(fstNumber,sndNumber);
          setOperation('addition');
        }}>
          Addition
        </button>

        <button className='hover:bg-teal-400 hover:text-black bg-violet-500 p-1 rounded-lg w-[90px] ml-5'
        onClick={()=>{
          sub(fstNumber,sndNumber);
          setOperation('subtraction');
        }}>
          Subtraction
        </button>
      </div>

      <div className='mb-2'>
        <button className='hover:bg-teal-400 hover:text-black bg-violet-500 p-1 rounded-lg w-[90px] mr-5'
        onClick={()=>{
          mul(fstNumber,sndNumber);
          setOperation('multiplication');
        }}>
          Multiply
        </button>

        <button className='hover:bg-teal-400 hover:text-black bg-violet-500 p-1 rounded-lg w-[90px] ml-5'
        onClick={()=>{
          div(fstNumber,sndNumber);
          setOperation('division');
        }}>
          Divide
        </button>
      </div>
    </div>
  );
}

export default Operations;
