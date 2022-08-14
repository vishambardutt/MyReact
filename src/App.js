import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
// import GlobalContext from './GlobalContext';
// import A from './A';
function App() {

  return (
    <div className="App">
      <div class="container">
        <div class="row">
          <Header />
        </div>
        <div class="row">
          {/* <GlobalContext/> */}

          {/* <A/> */}
        </div>
        <div class="row">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
