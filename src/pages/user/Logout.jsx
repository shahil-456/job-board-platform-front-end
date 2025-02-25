import React from "react";
import { useForm } from "react-hook-form";
import { axiosInstance } from "../../config/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUser, saveUser } from "../../redux/features/userSlice";
import { clearAdmin, saveAdmin } from "../../redux/features/adminSlice";
import { clearEmployer, saveEmployer } from "../../redux/features/employerSlice";

import toast from 'react-hot-toast';



export const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutUser = async () => {
        try {
            const response = await axiosInstance.get("/user/logout");

            // Dispatch action to clear user data in Redux after logout
            dispatch(clearUser());
            toast.success('User Logout successfully');

            // Redirect to login page
            navigate("/user/login");
        } catch (error) {
            console.error("Logout Error:", error.response?.data || error.message);
        }
    };
    
    React.useEffect(() => {
        logoutUser();
    }, [dispatch, navigate]);

    return null;
};



export const MainLogout = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const logoutMain = async () => {
        try {
            const response = await axiosInstance.get("/mentor/logout");
            console.log("Response:", response.data);

            dispatch(clearEmployer());
            dispatch(clearAdmin());

            toast.success('Employer Logout successfully');

            navigate("/employer/login");
        } catch (error) {
            console.error("Logout Error:", error.response?.data || error.message);
        }
    };
    
    React.useEffect(() => {
        logoutMain();
    }, []);

  
};



