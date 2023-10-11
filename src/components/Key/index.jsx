function Button(props) {
  const { value } = props;
  return (
    <button className='bg-gray-500 w-[50px] h-[50px] text-white border-white border rounded-xl'>
      {value}
    </button>
  );
}

export default Button;