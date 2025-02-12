import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { DarkMode } from "../shared/DarkMode";

import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');


export const Header = () => {

const navigate = useNavigate();


const handleNavigation = () => {
    // Get the current base path (e.g., /user)
    const basePath = window.location.pathname;
    // Append 'signup' to the base path
    navigate(`${basePath}signup`);
  };


  const handleClick = () => {
    // Navigating to the "/user/signup" route
    navigate('/user/signup');
  };

    return (
        
        <div className="flex justify-between items-center p-14 h-20 shadow-2xl ">
            <div>
                <h1 className="text-3xl font-bold">Logo</h1>
            </div>
            <div className="flex justify-center items-center gap-16">
                <nav>
               
                    <ul className="flex justify-center items-center gap-10 text-md">
                        <Link to={"user/"}>
                            {" "}
                            <li>User</li>{" "}
                        </Link>
                        <Link to={"/employer"}>
                            {" "}
                            <li>Employer</li>{" "}
                        </Link>
                        <Link to={"/jobs"}>
                            {" "}
                            <li>Home</li>{" "}
                        </Link>
                    </ul>
                </nav>
                <div className="flex justify-center gap-3">
                    {/* <DarkMode /> */}


          
    <button className="btn btn-primary" onClick={handleClick}>
      Signup
    </button>

                </div>
            </div>
        </div>
    );
};
