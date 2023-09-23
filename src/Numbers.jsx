function Numbers (){
  return (
    <div className='text-center'>
      <div className='content-center font-[20px]'> 
        <input className='w-[150px] h-8 mr-10 bg-transparent border-green-500 border-2 
        border-solid rounded-md pl-2 pr-2' type='text' for='first'/>
        <input className='w-[150px] h-8 ml-10 bg-transparent border-green-500 border-2 
        border-solid rounded-md pl-2 pr-2' type='text' for='second'/>
      </div>
    </div>
  );
}

export default Numbers;