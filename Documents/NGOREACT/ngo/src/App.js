// App.js

import React from 'react';
import './App.css';
import {createBrowserRouter,createRoutesFromElements,Route,Outlet,RouterProvider} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Settings from './Settings';
import Donors from './Donors';
import Organization from './Organization';
import PendingRequests from './PendingRequests';
import Submissions from './Submissions';
import AccountManagement from './AccountManagement';

  


function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Root/>}>
    <Route index element={<Home/>}/>
    <Route path="/Settings"element={<Settings/>}/>
    <Route path="/Donors" element={<Donors />} />
    <Route path="/Organization" element={<Organization />} />
    <Route path="/PendingRequests" element={<PendingRequests />} />
    <Route path="/Submissions" element={<Submissions />} />
    <Route path="/AccountManagement" element={<AccountManagement />} />





    </Route>
  )
     );
     return(
      <div className="App">
        <RouterProvider router={router}/>
      </div>
     )

    }



    const Root =() => {
      return(
        <>
        <div>
          <Navbar/>
        </div>
        <div>
          <Outlet/>
        </div>
  
      
  
      </>
    )
    }


export default App;




