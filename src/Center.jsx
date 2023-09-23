import Numbers from "./Numbers";
import Operations from "./Operations";

function Center(){
    return (
        <main>
            <p className='text-[20px] font-[oblique]'>
            This page is about a prototype of a basic calculator which calculates
            <br />
            addition, subtraction, product and division of the entered numbers.
            </p>
            <Numbers />
            <Operations />
        </main>
    );
}

export default Center;