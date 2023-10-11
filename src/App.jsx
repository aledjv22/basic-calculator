import Display from "./components/Display";
import Key from "./components/Key";
import Base from "./components/Base";
import RowKeys from './components/RowKeys';

function App() {
  return (
    <div className='grid place-content-center w-full h-full mt-10'>
      <Base/>
      <Display />
      <div className='grid place-content-center w-full items-center absolute h-[380px] mt-[54px]'>
        <RowKeys value="789-" />
        <RowKeys value="456+" />
        <RowKeys value="123/" />
        <RowKeys value="0.=*" />
      </div>
    </div>
  );
}

export default App;