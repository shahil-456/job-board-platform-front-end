import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Register from './user/Register';
import Home from './user/Home';
import PrivateRoute from './components/Protected';
// import PrivateRoute from './PrivateRoute';


// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import Login from "./user/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Set token as a cookie with an expiration date (optional)
const setCookie = (name, value, days = 7) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000)); // Set expiration date
  document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
};


const token = localStorage.getItem('token'); 

setCookie('token', token);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element ={<Register/>} />
      <Route path="/login" element ={<Login/>} />
      <Route path="/home" element={<PrivateRoute element={Home} />} />
            {/* <Protected path="protected" /> */}


  </Routes>
</Router>,
);





// function App() {
//   return (
//       <Router>
//           <Routes>
//               <Route path="/" element={<Login />} />
//           </Routes>
//       </Router>
//   );
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
