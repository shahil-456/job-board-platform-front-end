import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import toast from "react-hot-toast";
import axios from "axios";
import { axiosInstance } from "../../config/axiosInstance";
import { loadStripe } from "@stripe/stripe-js";


export const Cart = () => {
    const [refreshState, setRefreshState] = useState(false);

    const [cartDetails, isLoading, error] = useFetch("/mentor/profile", refreshState);



    const makePayment = async () => {
    try {
        console.log("Sending request to /payment/create-checkout-session...");
        
        const stripe = await loadStripe('pk_test_51R5MNEQYp10icJwe6vpcfw36v1Jjnj2sU9pCv1DCDW81OsZgj5oJ7tAVoyfWgikLPTLNW9rokJUngfdaBOn8PoAJ00Fb2bjf2Z');

        const session = await axiosInstance.post("/payment/create-checkout-session", { products: 'test' });

        console.log("Session response:", session);

        const result = await stripe.redirectToCheckout({ sessionId: session.data.sessionId });

        if (result.error) {
            console.error(result.error);
        }
    } catch (error) {
        console.error("Error making payment request:", error);
    }
};

    

    return (
      <div className="items-center justify-start px-20 py-16">

      <div className="max-w-md mx-auto p-6  shadow-lg rounded-lg border">
      <h1 className="text-xl font-bold mb-4 text-center">Add Token</h1>
      
      <div className="flex justify-between items-center border-b pb-4">
        <h1 className="text-2xl">Token: 10</h1>
      </div>
    
      <div className="text-center mt-4">
        <h2 className="text-lg font-semibold">Total Price: $100</h2>
        <button className="btn btn-success mt-4 w-full" onClick={makePayment}>
          Make Payment
        </button>
      </div>
    </div>
    </div>

    );
};