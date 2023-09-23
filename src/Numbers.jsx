import React from "react";
import { CalContext } from "./context";

function Numbers (){
  const {
    setFstNumber, 
    setSndNumber,
    setIsEmpty
  } = React.useContext(CalContext);

  return (
    <div className='text-center mt-2'>
      <div className='content-center font-[20px]'> 
        <input className='w-[150px] h-8 mr-10 bg-transparent border-green-500 border-2 
        border-solid rounded-md pl-2 pr-2' placeholder='Enter a number' type='number' htmlFor='first'
        onChange={(event)=>{
          setFstNumber(event.target.value);
          setIsEmpty(true);
        }} />
        
        <input className='w-[150px] h-8 ml-10 bg-transparent border-green-500 border-2 
        border-solid rounded-md pl-2 pr-2' placeholder='Enter a number' type='number' htmlFor='second'
        onChange={(event)=>{
          setSndNumber(event.target.value);
          setIsEmpty(true);
        }} />
      </div>
    </div>
  );
}

export default Numbers;