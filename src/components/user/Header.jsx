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

    return (
        
        <div className="flex justify-between items-center p-14 h-20 shadow-2xl ">
            <div>
                <h1 className="text-3xl font-bold">Logo</h1>
            </div>
            <div className="flex justify-center items-center gap-16">
                <nav>
               
                    <ul className="flex justify-center items-center gap-10 text-md">
                        <Link to={"/"}>
                            {" "}
                            <li>Home</li>{" "}
                        </Link>
                        <Link to={"/about"}>
                            {" "}
                            <li>About</li>{" "}
                        </Link>
                        <Link to={"/jobs"}>
                            {" "}
                            <li>Jobs</li>{" "}
                        </Link>
                    </ul>
                </nav>
                <div className="flex justify-center gap-3">
                    {/* <DarkMode /> */}


                    <button className="btn btn-primary" onClick={handleNavigation}>
                        
                                                Signup
                        </button>

                </div>
            </div>
        </div>
    );
};
