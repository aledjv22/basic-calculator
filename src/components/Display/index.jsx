import React from "react";
import { CalContext } from "../../context";

function Display() {
  const {
    fstNumber,
    sndNumber,
    operation,
    result,
    solve
  } = React.useContext(CalContext);
  return (
    <div className='w-[380px] h-[400px] flex justify-center mt-5 '>
        <div className='w-[300px] h-[60px] bg-green-500 relative z-1 rounded-xl items-center flex px-3'>
          <p className='text-xl overflow-hidden whitespace-nowrap text-ellipsis'
          style={{direction: 'rtl'}}>
            {operation === ''? (solve? result: fstNumber) : (solve? result : sndNumber)}
          </p>
        </div>
    </div>
  );
}
export default Display;