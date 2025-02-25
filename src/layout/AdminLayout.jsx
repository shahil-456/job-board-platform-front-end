import React, { useEffect, useState } from "react";
import { Header } from "../components/user/Header";
import { Footer } from "../components/user/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { AdminHeader } from "../components/admin/AdminHeader";


import { axiosInstance } from "../config/axiosInstance";
import { useSelector, useDispatch } from "react-redux";
import { clearAdmin, saveAdmin } from "../redux/features/adminSlice";



export const AdminLayout = () => {
    const { isAdminAuth,adminData } = useSelector((state) => state.admin);

    const dispatch = useDispatch()
    const location = useLocation()


    
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


   
    useEffect(() => {
        checkAdmin();


    }, [location.pathname]);

    return (
        <div>
            { isAdminAuth ? <AdminHeader /> : <Header />}

            <div className="min-h-96">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};
