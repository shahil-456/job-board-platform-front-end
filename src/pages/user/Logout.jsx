import React from "react";
import { useForm } from "react-hook-form";
import { axiosInstance } from "../../config/axiosInstance";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const logoutUser = async () => {
        try {
            const response = await axiosInstance.get("/user/logout");
            console.log("Response:", response.data);
            navigate("/user/login");
        } catch (error) {
            console.error("Logout Error:", error.response?.data || error.message);
        }
    };
    
    React.useEffect(() => {
        logoutUser();
    }, []);

  
};
