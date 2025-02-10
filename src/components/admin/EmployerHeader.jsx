import React from "react";
import { CircleUser } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
// import { DarkMode } from "../shared/DarkMode";
import { useFetch } from "../../hooks/useFetch";
import { DarkMode } from "../shared/DarkMode";



export const EmployerHeader = () => {

  const [profileData, isLoading, error] = useFetch("/user/profile");


    return (
        <div className="flex justify-between items-center w-full px-20  h-24 shadow-2xl  ">
            <Link to={"/"}>
                <div className="text-3xl font-bold">Logo</div>
            </Link>
            <nav className="flex gap-16 items-center font-semibold">
                <Link to={"/"}>Home</Link>
                <Link to={"employer/about"}>About</Link>
                <Link to={"/employer/add-job"}>Add Job</Link>
                <Link to={"/employer/users-list"}>Users</Link>
                <Link to={"/employer/applications"}>Applications</Link>

                <Link to={"/employer/logout"}>Logout</Link>

            </nav>

            <div className="flex gap-14 items-center ">
                {/* <DarkMode /> */}
                <Link to={'/employer/my_cv'}>
                    <ShoppingBag />
                </Link>
                <DarkMode />

                <Link to={"/employer/profile"}>
                    <CircleUser />
                </Link>
            </div>
        </div>
    );
};
