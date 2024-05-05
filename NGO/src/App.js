// App.js

import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Settings from './Settings';
import Organization from './Organization/Organization'
import location from './Organization/pages/locationpage';
function App() {
  return (
    // <Router>
    //   <div className="App">
    //     {/* <Navbar/> */}
    //     <div className="content">
    //       <Routes>
    //         <Route exact path="/">
    //           <Home/>
    //         </Route>
    //         <Route path="/Settings">
    //           <Settings/>
    //         </Route>

    //         {/* Organization */}
    //         <Route path="/organization" element={<Organization />}>
    //         </Route>


    //       </Routes>
          
    //     </div>

    //   </div>
    // </Router>
      
    <div>
    <Routes>
      <Route path="/organization" element={<Organization />}>
        <Route path="location" element={<locationpage />} />
      </Route>
    </Routes>
  </div>
  


  );
}

export default App;




