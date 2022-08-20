import React,{useState} from 'react';
import PropsFun from './PropsFun';
import Button from 'react-bootstrap/Button';
import PropsinClassCom from './PropsinClassCom';
import PrintInput from './PrintInput';
import ChangePropsClassComp from './ChangePropsClassComp';
import Child from './Child';
import Child2 from './Child2';
import LifeCycle from './LifeCycle';
import LfChild from './LfChild';
import ShouldCompoentUpdate from './LifeCycle/ShouldComponentUpdate';
import Welcome from './Welcome';
import ShowHide from './ShowHide';
import Myfm from './Myfm';
import LiftingState from './LiftingState';
import ReuseComponent from './ReuseComponent';
// import Pc from './Pc';
import PureComponentinProps from './PureComponentinProps';
import MemoFunctionComp from './Hooks/MemoFunctionalComp';
import ControlledComponent from './ControlledComponent';
import UnControlledComponent from './UnControlledComponent';
import RefComponent from './RefComponent';
// import UseState from './UseState';
import UseEffect from './Hooks/UseEffect';
import ComponentWillUnmount from './LifeCycle/ComponentWillUnmount';
import ChangeState from './ChangeState';
// import ChangeStateinFunctionalComp from './ChangeStateinFunctionalComp';
import ConditionalRendering from './ConditionalRendering';
import ReuseData from './ReuseData';
import UseComponentDidUpdate from './LifeCycle/UseComponentDidUpdate';

function Home() {
   return (
  <div class="container">
      <h4>Home Component</h4>
      <div class="row">
        <div class="col-sm-4"><HOCOrange comp ={HighOrder}/></div>
        <div class="col-sm-4"><HOCGreen comp ={HighOrder}/></div>
        <div class="col-sm-4"><HOCYellow comp ={HighOrder}/></div>
      </div>
      <div class="row ">
        <div class="col-sm-4"><ComponentWillUnmount/></div>
        <div class="col-sm-4"><ConditionalRendering/></div>
        <div class="col-sm-4"><MemoFunctionComp/></div>
      </div>
      <div class="row">
        <div class="col-sm-4"><ControlledComponent/></div>
        <div class="col-sm-4"><UseEffect/></div>
        <div class="col-sm-4"><UnControlledComponent/></div>
      </div>
      <div class="row ">
        <div class="col-sm-4"><RefComponent/></div>
        {/* <div class="col-sm-4"><UseState/></div> */}
        <div class="col-sm-4"><PureComponentinProps/></div>
      </div>
      <div class="row">
        <div class="col-sm-4"><ChangeState/></div>
        <div class="col-sm-4"><HighOrder/></div>
        <div class="col-sm-4"><HighOrder/></div>
      </div>
      <div class="row">
        <div class="col-sm-4"> <ChangePropsClassComp name1='Vartika is name1' name2='Yutika is name2' /></div>
        <div class="col-sm-4"> <PropsinClassCom pname="Props Name in Class comp" email=" Email in class Comp" /></div>
        <div class="col-sm-4"> <PropsFun name="Vishambar " email="vd@yahoo.com" address="ET Raod Banglore" /></div>
        {/* <Button variant="primary" onClick={() => { setNames('Hello Mohit') }}>Change Name</Button> */}
      </div>
      <div class="row">
        <div class="col-sm-4"><Welcome name="Sara" /><Welcome name="Cahal" /><Welcome name="Edite" /></div>
        <div class="col-sm-4">
          {/* <PropsFun name={names} /> */}
          {/* <Button variant="primary" onClick={() => { setNames('Hello Mohit') }}>Change State</Button> */}
        </div>
        {/* <div class="col-sm-4"><Child data={getdata} /></div> */}
      </div>
      <div class="row">
        <div class="col-sm-4"> <ReuseComponent/></div>
        <div class="col-sm-4"><PrintInput /></div>
        <div class="col-sm-4"><Myfm /></div>
      </div>
      <div class="row">
        <div class="col-sm-4"><ShouldCompoentUpdate/></div>
        <div class="col-sm-4"> <LiftingState/></div>
        <div class="col-sm-4"><Child2 /></div>
      </div>
      <div class="row">
        <div class="col-sm-4"><ShowHide/></div>
        <div class="col-sm-4"><LfChild/></div>
        <div class="col-sm-4"><LifeCycle/></div>
      </div>
      <div class="row">
        {/* <div class="col-sm-4"><UseComponentDidUpdate/></div> */}
       {/* <div class="col-sm-4"><ReuseData name='Vishambar'email='vd@gmail.com' contact='Banglore'/></div> */}
        {/* <div class="col-sm-4"><HOCBlue/></div> */}
      </div>
      <UseComponentDidUpdate/>
     
    </div>
)
}

function HOCOrange(props)
{
  return(
    <div>
      <h5 style={{backgroundColor:'Orange',height:100}}>Orange<props.comp/></h5>
    </div>
  );
  
}

function HOCGreen(props)
{
  return(
    <div>
      <h5 style={{backgroundColor:'green',height:100}}>Green<props.comp/></h5>
    </div>
  );
  
}
function HOCYellow(props)
{
  return(
    <div>
      <h5 style={{backgroundColor:'yellow',height:100}}>Yellow<props.comp/></h5>
    </div>
  );
  
}
function HOCBlue(props)
{
  return(
    <div>
      <h5 style={{backgroundColor:'Blue',height:100}}>Blue<props.comp/></h5>
    </div>
  );
  
}

function HighOrder (){
  const [count,setCount] = useState(0)

  return(
    <div>
      <h5>High Order Function{count}</h5>
      <Button class="btn-btn-danger"onClick={()=>setCount(count+1)}>Update High</Button>
    </div>
  );

}

export default Home;
