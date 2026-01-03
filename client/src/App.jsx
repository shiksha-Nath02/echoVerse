 import React from 'react';
// import { Route, Routes } from 'react-router-dom';

// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<login/>} />
//         <Route path="/signup" element={<signup/>} />
//         <Route path="/login" element={<login/>} />
//         <Route path="/dashboard" element={<dashboard/>} />

//       </Routes>
//     </div>
//   );
// };

// export default App;
//import { useFetchUserQuery } from './Services/api';
import { Routes, Route } from "react-router-dom";

import Login from './pages/Login';
import Logout from './pages/Logout';
import Signup from "./pages/Signup";
import Dashboard from "./pages/dashboard";
import AdminPortal from './pages/AdminPortal';
import NewPost from "./pages/NewPost";
import PublicRoute from './Components/PublicRoute';
import PrivateRoute from './Components/PrivateRoute';
import Navbar from './Components/Navbar';
import ShowPost from './pages/ShowPost';
import './App.css';


const App = () => {

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
    {/* // making all the routes
    // these funtions that i have made are just custom hooks.. that gets rendered once we visit the page */}
    {/* <Route element={<PublicRoute/>}> */}
        
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
{/* 
        </Route> */}

        

        {/* <Route element={<PrivateRoute/>}> */}
          <Route path="/logout" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/admin" element={<Adminportal />} /> */}
          <Route path="/admin/new" element={<NewPost />} />
          <Route path='/dashboard/show/:id' element={<ShowPost/>}/>
          <Route path="/AdminPortal" element={<AdminPortal />} />


          {/* <Route path='/switchAccount' element={<Login/>}></Route>  */}

        {/* </Route> */}
      
    </Routes>
    </div>
  );
};

export default App;
