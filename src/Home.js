import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';

function Home() {
   return (
  <div class="container">
      <h4>Home Component</h4>
      <div class="row">
        <div class="col-sm-4"><HOCOrange comp ={HighOrder} /></div>
        <div class="col-sm-4"><HOCGreen comp ={HighOrder}/></div>
        <div class="col-sm-4"><HOCYellow comp ={HighOrder}/></div>
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
      <h5 style={{backgroundColor:'yellow',height:100}}>Yellow<props.comp/>
      </h5>
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
