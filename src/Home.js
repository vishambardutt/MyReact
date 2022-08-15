import React, { useState } from 'react';
import PropsFun from './PropsFun';
import Button from 'react-bootstrap/Button';
import PropsinClassCom from './PropsinClassCom';
import PrintInput from './PrintInput';
import ChangePropsClassComp from './ChangePropsClassComp';
import Child from './Child';
import Child2 from './Child2';
import LifeCycle from './LifeCycle';
import LfChild from './LfChild';
import ShouldCompoentUpdate from './ShouldComponentUpdate';
import Welcome from './Welcome';
import ShowHide from './ShowHide';
import Myfm from './Myfm';
import LiftingState from './LiftingState';
import ReuseComponent from './ReuseComponent';
// import ComponentWillUnmount from './ComponentWillUnmount';
import Pc from './Pc';
import PureComponentinProps from './PureComponentinProps';
import MemoFunctionComp from './MemoFunctionalComp';
import ControlledComponent from './ControlledComponent';
import UnControlledComponent from './UnControlledComponent';
import RefComponent from './RefComponent';

function Home() {
  const [names, setNames] = useState('Hi Ankit')

  function getdata() {

    alert('Helow Home')
  }

  return (
    <div>
     
      <h4>Home Component</h4>
        <div class="container">
        <div class="row">
            <div class="col-sm-3"><HOCOrange comp ={HighOrder}/></div>
            <div class="col-sm-3"><HOCGreen comp ={HighOrder}/></div>
            <div class="col-sm-3"><HOCYellow comp ={HighOrder}/></div>
            <div class="col-sm-3"><HOCBlue comp ={HighOrder}/></div>
          </div>
          <div class="row">
            <div class="col-sm-12"><MemoFunctionComp/></div>       
        </div>
        <div class="row ">
          <div class="col-sm-6"><ControlledComponent/></div><div class="col-sm-6"><UnControlledComponent/></div>
        </div>
        <div class="row ">
          <div class="col-sm-6"><RefComponent/></div><div class="col-sm-6">kk</div>
        </div>
          
        <div class="row">
            <div class="col-sm-6"><HighOrder/></div>
            <div class="col-sm-6"><HighOrder/></div>
        </div>
        <div class="row">
            <div class="col-sm-6"><PureComponentinProps/></div>
            <div class="col-sm-6"><Pc/></div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <ChangePropsClassComp name1='Vartika is name1' name2='Yutika is name2' />
            </div>
            <div class="col-sm-6">
              <PropsinClassCom pname="Props Name in Class comp" email=" Email in class Comp" />
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
              <PropsFun name="Vishambar " email="vd@yahoo.com" address="ET Raod Banglore" />
              <Button variant="primary" onClick={() => { setNames('Hello Mohit') }}>Change Name</Button>
            </div>
            <div class="col-sm-6"> <Welcome name="Sara" />
              <Welcome name="Cahal" />
              <Welcome name="Edite" />
            </div>
        </div>
          <div class="row">
            <div class="col-sm-6">
              <PropsFun name={names} />
              <Button variant="primary" onClick={() => { setNames('Hello Mohit') }}>Change State</Button>
            </div>
            <div class="col-sm-6">
                <LiftingState/>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6"><Child data={getdata} /></div><div class="col-sm-6"></div>
            </div>

          <div class="row">
            <div class="col-sm-6"> <ReuseComponent/></div><div class="col-sm-6"><PrintInput /></div>
          </div>
          <div class="row">
            <div class="col-sm-6"> <Child2 /></div><div class="col-sm-6"><Myfm /></div>
          </div>
          <div class="row">
            <div class="col-sm-6"><ShowHide/></div><div class="col-sm-6"><ShouldCompoentUpdate/></div>
          </div>
          <div class="row">
            <div class="col-sm-6"><LfChild/></div><div class="col-sm-6"><LifeCycle/></div>
          </div>
        </div>
      
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
      <Button class="btn-btn-danger"   onClick={()=>setCount(count+1)}>Update High</Button>
    </div>
  );

}

export default Home;
