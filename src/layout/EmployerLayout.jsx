import React, { useEffect, useState } from "react";
import { Header } from "../components/user/Header";
import { Footer } from "../components/user/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { EmployerHeader } from "../components/admin/EmployerHeader";


import { axiosInstance } from "../config/axiosInstance";
import { useSelector, useDispatch } from "react-redux";
import { clearEmployer, saveEmployer } from "../redux/features/employerSlice";



export const EmployerLayout = () => {
    const { isEmployerAuth,employerData } = useSelector((state) => state.employer);

    const dispatch = useDispatch()
    const location = useLocation()


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
        checkEmployer();


    }, [location.pathname]);

    return (
        <div>
            { isEmployerAuth ? <EmployerHeader /> : <Header />}

            <div className="min-h-96">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};
