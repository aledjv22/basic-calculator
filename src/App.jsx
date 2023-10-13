import {CalProvider} from './context';
import Display from "./components/Display";
import Base from "./components/Base";
import RowKeys from './components/RowKeys';
import FirstRow from './components/FirstRow';

function App() {
  return (
    <CalProvider>
      <div className='grid place-content-center w-full h-full mt-10'>
        <Base/>
        <Display />
        <div className='grid place-content-center w-full items-center absolute h-[380px] mt-[34px]'>
          <FirstRow />
          <RowKeys value="789-" />
          <RowKeys value="456+" />
          <RowKeys value="123÷" />
          <RowKeys value="0.=x" />
        </div>
      </div>
    </CalProvider>
  );
}

export default App;