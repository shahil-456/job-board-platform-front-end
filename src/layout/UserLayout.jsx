import React, { useEffect, useState } from "react";
import { Header } from "../components/user/Header";
import { Footer } from "../components/user/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { UserHeader } from "../components/user/UserHeader";
import { AdminHeader } from "../components/admin/AdminHeader";
import { EmployerHeader } from "../components/admin/EmployerHeader";


import { axiosInstance } from "../config/axiosInstance";
import { useSelector, useDispatch } from "react-redux";
import { clearUser, saveUser } from "../redux/features/userSlice";
import { clearAdmin, saveAdmin } from "../redux/features/adminSlice";
import { clearEmployer, saveEmployer } from "../redux/features/employerSlice";



export const UserLayout = () => {
    const { isUserAuth,userData } = useSelector((state) => state.user);
    const { isAdminAuth,adminData } = useSelector((state) => state.admin);
    const { isEmployerAuth,employerData } = useSelector((state) => state.employer);

    const dispatch = useDispatch()
    const location = useLocation()

    console.log("isUserAuth====", isUserAuth);

    const checkUser = async () => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: "/user/check-user",
            });
            dispatch(saveUser())
        } catch (error) {
            dispatch(clearUser())
            console.log(error);
        }
    };


      const checkAdmin = async () => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: "/admin/check-admin",
            });
            dispatch(saveAdmin())
        } catch (error) {
            dispatch(clearUser())
            console.log(error);
        }
    };


    const checkEmployer = async () => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: "/mentor/check-employer",
            });
            dispatch(saveEmployer())
        } catch (error) {
            dispatch(clearEmployer())
            console.log(error);
        }
    };


    useEffect(() => {
        checkUser();
        checkAdmin();
        checkEmployer();


    }, [location.pathname]);

    return (
        <div>
            {isUserAuth ? <UserHeader /> : isAdminAuth ? <AdminHeader /> : isEmployerAuth ? <EmployerHeader /> : <Header />}

            <div className="min-h-96">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};
