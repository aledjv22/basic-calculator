import Key from '../Key';

function RowKeys(props) {
  const { value } = props;
  const keys = value.split('');
  return (
    <div className='w-[300px] flex justify-between mt-2 relative z-5'>
      {keys.map((key, index) => (
        <Key key={index} value={key} />
      ))}
    </div>
  );
}

export default RowKeys;