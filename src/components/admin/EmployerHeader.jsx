import React from "react";
import { CircleUser } from "lucide-react";
import { Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
// import { DarkMode } from "../shared/DarkMode";
import { useFetch } from "../../hooks/useFetch";
import { DarkMode } from "../shared/DarkMode";
import { Coins } from 'lucide-react';


export const EmployerHeader = () => {

  const [profileData, isLoading, error] = useFetch("/mentor/profile");


    return (
        <div className="flex justify-between items-center w-full px-20  h-24 shadow-2xl  ">
            <Link to={"/"}>
                <div className="text-3xl font-bold">Logo</div>
            </Link>
            <nav className="flex gap-16 items-center font-semibold">
                <Link to={"/employer/profile"}>Profile</Link>
                <Link to={"/employer/jobs"}>Jobs</Link>
                <Link to={"/employer/add-job"}>Add Job</Link>
                <Link to={"/employer/users-list"}>Users</Link>
                <Link to={"/employer/application"}>Applications</Link>

                <Link to={"/employer/logout"}>Logout</Link>

            </nav>

            <div className="flex gap-14 items-center ">
                {/* <DarkMode /> */}


            <Link to={'/employer/add_token'} className="relative">
                <Coins className="w-6 h-6 text-gray-700" />
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">

                {profileData?.token}

                </span>
            </Link>

                <DarkMode />

                <Link to={"/employer/profile"}>
                    <CircleUser />
                </Link>
            </div>
        </div>
    );
};
