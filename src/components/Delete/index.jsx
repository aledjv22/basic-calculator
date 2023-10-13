import React from "react";
import { CalContext } from "../../context";

function Delete() {
  const {
    fstNumber,
    setFstNumber,
    sndNumber,
    setSndNumber,
    isEmpty,
    result,
    solve,
    operation
  } = React.useContext(CalContext);

  return (
    <button className='bg-red-500 w-[50px] h-[25px] text-black border-white border rounded-xl'
    onClick={()=>{
      if(!solve) {
        if(isEmpty(operation) && !isEmpty(fstNumber)) {
          setFstNumber(fstNumber.slice(0,-1));
        }
        if(!isEmpty(operation) && !isEmpty(sndNumber)){
          setSndNumber(sndNumber.slice(0,-1));
        }
      }
    }}>
      DEL
    </button>
  );
}

export default Delete;