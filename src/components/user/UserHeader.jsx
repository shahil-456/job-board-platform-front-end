import React from "react";
import { CircleUser } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
// import { DarkMode } from "../shared/DarkMode";
import { useFetch } from "../../hooks/useFetch";
import { DarkMode } from "../shared/DarkMode";

import toast, { Toaster } from 'react-hot-toast';


export const UserHeader = () => {

  const [profileData, isLoading, error] = useFetch("/user/profile");
    const notify = () => toast('Here is your toast.');


    return (
        <div className="flex justify-between items-center w-full px-20  h-24 shadow-2xl  ">
            <Link to={"/"}>
                <div className="text-3xl font-bold">Logo</div>
            </Link>
            <nav className="flex gap-16 items-center font-semibold">


            {/* <button onClick={notify}>toast</button>
            <Toaster /> */}
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/user/jobs"}>Jobs</Link>
                <Link to={"/user/my_cv"}>My CV</Link>
                <Link to={"/user/logout"}>Logout</Link>

            </nav>

            <div className="flex gap-14 items-center ">
                {/* <DarkMode /> */}
                <Link to={'/user/my_cv'}>
                    <ShoppingBag />
                </Link>
                <DarkMode />

                <Link to={"/user/profile"}>
                    <CircleUser />
                </Link>
            </div>
        </div>
    );
};
