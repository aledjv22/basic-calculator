import Reboot from "../Reboot";
import Delete from "../Delete";

function FirstRow() {
  return (
    <div className='w-[300px] flex justify-between mt-2 relative z-2'>
      <Reboot />
      <Delete />
    </div>
  );
}

export default FirstRow;