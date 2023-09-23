import React from "react";
import { CalContext } from "./context";
import Numbers from "./Numbers";
import Operations from "./Operations";

function Center(){
    const {
        isEmpty,
        result,
        operation
      } = React.useContext(CalContext);
    return (
        <main className='text-white text-center'>
            <p className='text-[20px] font-[oblique]'>
            This page is about a prototype of a basic calculator which calculates
            <br />
            addition, subtraction, product and division of the entered numbers.
            </p>
            <Numbers />
            <Operations />
            <p className='text-[20px] font-[oblique'>
                {isEmpty ? '' : `The result of the ${operation} is: ${result}`}
            </p>
        </main>
    );
}

export default Center;