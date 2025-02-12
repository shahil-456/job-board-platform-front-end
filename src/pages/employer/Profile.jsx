import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { axiosInstance } from "../../config/axiosInstance";
import { useNavigate } from "react-router-dom";

export const EmployerProfile = () => {
  const navigate = useNavigate();

    const [profileData, isLoading, error] = useFetch("/mentor/profile");

    const handleLogOut = async () => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: "/user/logout",
            });
        } catch (error) {
            console.log(error);
        }
    };

    const EditProfile = async () => {


      try {
        navigate("/employer/edit-profile");

      } catch (error) {
          console.log(error);
      }
    };


    return (
      
        <div className="flex flex-col items-center justify-start px-20 py-16">
        {/* Box with white border */}
        <div className="border-2 border-white rounded-lg p-8 shadow-lg ">
            <section>
                <h1 className="text-xl font-semibold">{profileData?.name}</h1>
                <img src={profileData?.profilePic} className="w-40 h-40 rounded-full mx-auto" alt="profileImage" />
                <h1 className="mt-4">{profileData?.email}</h1>
                <h1>{profileData?.mobile}</h1>
            </section>
    
            <section className="mt-6">
                <button className="btn btn-secondary" onClick={EditProfile}>Edit Profile</button>
                {/* <button className="btn btn-accent" onClick={handleLogOut}>Logout</button> */}
            </section>
        </div>
    </div>
    
    );
};
