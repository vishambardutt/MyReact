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

function Home() {
  const [names, setNames] = useState('Hi Ankit')

  function getdata() {

    alert('Helow Home')
  }

  return (
    <div>
      <h4>Home Component</h4>

      <h5>State Change </h5>

      <PropsFun name={names} />
      <Button variant="primary" onClick={() => { setNames('Hello Mohit') }}>Change State</Button>{' '}
      <h5><Child data={getdata} />  </h5>
      <div>
        {/* <h5><Child2 data={getdata} /></h5> */}
      </div>
      {/* <button variant="primary" onClick={() => { setNames('Hello Mohit') }}>Change Name</button>{' '} */}


      <PropsFun name="Vishambar " email="vd@yahoo.com" address="ET Raod Banglore" />
      <PropsinClassCom pname="Props Name in Class comp" email=" Email in class Comp" />
      <ChangePropsClassComp name1='Vartika is name1' name2='Yutika is name2' />
      <h5><PrintInput /></h5>
      <h5><LifeCycle/></h5>
      <h5><LfChild/></h5>
      <h5><ShouldCompoentUpdate/></h5>
      <div class="row">
        <h6>
          <Welcome name="Sara" />
          <Welcome name="Cahal" />
          <Welcome name="Edite" /></h6>
        </div> 
        <h5><ShowHide/></h5>
        <h5><Myfm /></h5>
        <h5><Child2 /></h5>
        <div class="container">
          <div class="row">
            <div class="col-sm-6">First Row</div><div class="col-sm-6">Second Row</div>
          </div>
        </div>
        <LiftingState/>
    </div>
  )
}


export default Home;
