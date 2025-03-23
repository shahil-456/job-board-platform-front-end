import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useFetch } from "../../hooks/useFetch";
import { axiosInstance } from "../../config/axiosInstance";


export const SuccessPage = () => {
    const navigate = useNavigate();
    
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get("session_id");

    // if (!sessionId) {
    //     navigate("/"); // Redirect if no session ID
    //     return;
    // }

    useEffect(() => {
        const addToken = async () => {
            try {
                
                const response = await axiosInstance.post("/mentor/add-token", {
    
                  });


                console.log("Token added successfully");
            } catch (error) {
                console.error("Error adding token:", error);
            }
        };

        addToken();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">
            <h2 className="text-2xl font-bold text-green-700">Payment Successful! ✅</h2>
            <p className="text-lg text-gray-700 mt-2">Thank you for your payment.</p>
            <button
                onClick={() => navigate("/employer/profile")}
                className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg"
            >
                Go to Dashboard
            </button>
        </div>
    );
};

