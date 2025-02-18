import React, { useEffect, useState } from "react";
import { CourseCards } from "../../components/user/Cards";
import { axiosInstance } from "../../config/axiosInstance";
import { useFetch } from "../../hooks/useFetch";
import { CourseSkelton } from "../../components/shared/Skeltons";
import toast from 'react-hot-toast';

export const EditProfile = () => {
  const [profileData, isLoading, error] = useFetch("/user/profile");
  
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
      setFormData((prevData) => ({
        ...prevData,
        profilePic: file, 
      }));
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use the API endpoint to update the profile data
      const response = await axiosInstance.post("/user/update_profile", formData,{headers: {
        "Content-Type": "multipart/form-data", 
      }});
      toast.success('Profile updated successfully');

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
        <form onSubmit={handleSubmit} className="border p-6 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">My Profile</h1>

          {/* Profile Image */}
          <div className="mb-4">
            <img
              src={formData.profilePic || "default-image-url.jpg"}
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <input
              type="file"
              name="image"

              onChange={handleImageChange}
              className="block w-full text-sm text-gray-500"
            />
          </div>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Mobile */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Mobile</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Update Profile
          </button>
        </form>
      )}
    </div>
  );
};

