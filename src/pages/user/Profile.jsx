import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { axiosInstance } from "../../config/axiosInstance";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();

    const [profileData, isLoading, error] = useFetch("/user/profile");

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
        navigate("/user/edit-profile");

      } catch (error) {
          console.log(error);
      }
    };


    return (
      
      <div className="flex flex-col items-center justify-start px-20 py-16">
           
            <section>
                <h1>{profileData?.name}</h1>
                <img src={profileData?.profilePic} className="w-40 h-40" alt="profileImage" />
                <h1>{profileData?.email}</h1>
                <h1>{profileData?.mobile}</h1>
            </section>

            <section>
                <button className="btn btn-secondary" onClick={EditProfile}>Edit Profile</button>
                {/* <button className="btn btn-accent" onClick={handleLogOut}>Logout</button> */}
            </section>
        </div>
    );
};
