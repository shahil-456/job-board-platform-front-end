import React, { useEffect, useState } from "react";
import { CourseCards } from "../../components/user/Cards";
import { axiosInstance } from "../../config/axiosInstance";
import { useFetch } from "../../hooks/useFetch";
import { CourseSkelton } from "../../components/shared/Skeltons";
import { useParams } from "react-router-dom";

export const UserDetails = () => {

  const { UserId } = useParams(); 
  const [profileData, isLoading, error] = useFetch(`/mentor/user_details/${UserId}`);
  
  // States to manage the form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    profilePic: ""
  });

  // Update form data when profile data is loaded
  useEffect(() => {
    if (profileData) {
      setFormData({
        name: profileData.name,
        email: profileData.email,
        mobile: profileData.mobile,
        profilePic: profileData.profilePic,
      });
    }
  }, [profileData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          profilePic: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use the API endpoint to update the profile data
      const response = await axiosInstance.post("/user/update_profile", formData);
      console.log("Profile updated successfully", response.data);
    } catch (error) {
      console.log("Error updating profile:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start px-20 py-16">
  {isLoading ? (
    <p>Loading...</p>
  ) : error ? (
    <p className="text-red-500">Error loading profile</p>
  ) : (
    <div className="border p-6 rounded-lg shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-center">My Profile</h1>

      {/* Profile Image */}
      <div className="mb-4 flex justify-center">
        <img
          src={profileData.profilePic || "default-image-url.jpg"}
          alt="Profile"
          className="w-32 h-32 object-cover rounded-full"
        />
      </div>

      {/* Name */}
      <div className="mb-4 flex items-center">
  <p className="font-semibold mr-2">Name:</p>
  <p className="text-lg">{profileData.name}</p>
</div>


      {/* Email */}
      <div className="mb-4 flex items-center">
        <p className=" font-semibold">Email:</p>
        <p className="text-lg">{profileData.email}</p>
      </div>

      {/* Mobile */}
      <div className="mb-4 flex items-center">
        <p className=" font-semibold">Mobile:</p>
        <p className="text-lg">{profileData.mobile}</p>
      </div>
      
      <div className="mb-4">
        <p className=" font-semibold">CV:</p>
        <img
          src={profileData.cv || "default-image-url.jpg"}
          alt="CV"
          className="w-32 h-32 object-cover "
        />      </div>

    <div className="mb-4 flex items-center">
        <p className=" font-semibold">Details:</p>
        <p className="text-lg">{profileData.skill}</p>
      </div>

      <div className="flex justify-center mt-6">
     
     <button
                 onClick={applyJob}
                 className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
             >
                 { "Verify User"}
             </button>
 
 
     </div>

    </div>
  )}
</div>

  );
};

