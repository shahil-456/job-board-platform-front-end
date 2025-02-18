import React, { useEffect, useState } from "react";
import { CourseCards } from "../../components/user/Cards";
import { axiosInstance } from "../../config/axiosInstance";
import { useFetch } from "../../hooks/useFetch";
import { CourseSkelton } from "../../components/shared/Skeltons";
import toast from 'react-hot-toast';



export const Cv = () => {
  const [profileData, isLoading, error] = useFetch("/user/my_cv");
  
  // States to manage the form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skill: "",
    cv: ""
  });

  // Update form data when profile data is loaded
  useEffect(() => {
    if (profileData) {
      setFormData({
        name: profileData.name,
        cv: profileData.cv,
        skill: profileData.skill,

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

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setFormData((prevData) => ({
  //         ...prevData,
  //         cv: reader.result
  //       }));
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        cv: file, // Store the file object instead of the data URL
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use the API endpoint to update the profile data
      const response = await axiosInstance.post("/user/upload_cv", formData, {headers: {
        "Content-Type": "multipart/form-data", 
      }});

      
      toast.success('CV Upload Success');

      console.log("Profile updated successfully", response.data);
    } catch (error) {
      console.log("Error updating profile:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start px-20 py-16">
      {  (
        <form onSubmit={handleSubmit} className="border p-6 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">My CV</h1>

          {/* Profile Image */}
          <div className="mb-4">
            <img
              src={formData.cv || "default-image-url.jpg"}
              alt="Profile"
              className="w-32 h-32 object-cover "
            />
            <input
              type="file"
              name="cv"

              onChange={handleImageChange}
              className="block w-full text-sm text-gray-500"
            />
          </div>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium ">Skills</label>
            <input
              type="text"
              name="skill"
              value={formData.skill}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Email */}
        

          {/* Mobile */}
         

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Upload CV
          </button>
        </form>
      )}
    </div>
  );
};

