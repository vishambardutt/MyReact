import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
// import Abc from './Abc';
// import GlobalContext from './GlobalContext';
// import ChangeState from './ChangeState';
import AccDataFunction from './AccDataFunction';
// import RenderMethod from './RenderMethod';
import Button from 'react-bootstrap/Button';
// import NestedList from './NestedList';
import RefComponent from './RefComponent';

function App() {
  let [name, setName] = React.useState('Vartika')
  function getappData()
  {
    alert('Hi form app function')
  }

  return (
    <div className="App">
      <div class="container">
        <div class="row">
          <Header />
        </div>
       
        <div class="row">
          {/* <div class="col-sm-4"><ChangeState/></div><div class="col-sm-4"><AccDataFunction  data={getappData}/></div><div class="col-sm-4"><RenderMethod name={name}/></div> */}
          {/* </div> */}
          {/* <div class="row"> */}
          {/* <div class="col-sm-4"><UseComponentDidMount/></div><div class="col-sm-4"><UseComponentDidUpdate/></div><div class="col-sm-4"></div> */}
         {/* <NestedList/> */}
         
         {/* <h5>{name}</h5> */}
         {/* <Button class="btn btn-danger" onClick={()=>setName('Jakhmola')}>Update Name</Button> */}
          <RefComponent/>
        <div class="row">
          <Footer />
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
