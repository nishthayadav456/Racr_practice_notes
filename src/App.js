
import './Style.css';

import DisplayData, { DisplayDataClass } from './DisplayData';
import PropsCompo from './Props/PropsCompo';
import Example from './Example/Example';
import Hook from './Hooks/Hook';

import HookDisplay from './Hook/HookDisplay';
import DisplayLife from './LifeCompo/DisplayLife';
import Form from './Form/Form'
import Control from './Component/Control';
import Uncontrolled from './Component/Uncontrolled';
import RouteCompo from './Routes/RouteCompo';
import A from './Component1/A'
import ContextStore from './ContextApi/ContextStore';
import HOCData from './HOC&Pure/HOCData';
import HOC from './HOC&Pure/HOC'
import PureCompo from './HOC&Pure/PureCompo';
import CallBack from './Hook/CallBack';
import UseReducerHook from './Hook/UseReducerHook';
import AxiosCompo from './Axios/AxiosCompo';
import BankUI from './Redux/ComponentUI/BankUI';

function App() {
  return (
    <div>
     
      {/* <p>Welcome to elevation academy</p> */}
   
    
     {/* <DisplayData/> */}
     {/* <DisplayDataClass/> */}
    {/* <PropsCompo/> */}
    {/* <Example/> */}
    {/* <Hook/> */}
   {/* <FuncCompoOne/> */}
     {/* <DisplayLife/> */}
     <HookDisplay/> 
    {/* <Form/> */}
    <Control/>
    <Uncontrolled/>
    {/* <RouteCompo/>  */}
    {/* <A/> */}
  {/* <ContextStore/> */}
  {/* <HOCData/> */}
  {/* <HOC value={<HOCData/>}/> */}
  {/* <PureCompo/> */}
  {/* <CallBack/> */}
  {/* <UseReducerHook/> */}
  {/* <AxiosCompo/> */}
  {/* <BankUI/> */}
    </div>
  );
}

export default App;
