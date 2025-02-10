import React, { useEffect, useState } from "react";
import { CourseCards } from "../../components/user/Cards";
import { axiosInstance } from "../../config/axiosInstance";
import { useFetch } from "../../hooks/useFetch";
import { CourseSkelton } from "../../components/shared/Skeltons";


export const AddJob = () => {
  const [jobData, isLoading, error] = useFetch("/mentor/profile");
  
  // States to manage the form inputs
  const [formData, setFormData] = useState({
    title: "",
  
  });

  // Update form data when profile data is loaded
  useEffect(() => {
    if (jobData) {
      setFormData({
        title: jobData.title,
     
      });
    }
  }, [jobData]);

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
          image: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use the API endpoint to update the profile data
      const response = await axiosInstance.post("/job/create", formData);
      console.log("Job Added successfully", response.data);
    } catch (error) {
      console.log("Error Adding JOb:", error);
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
          <h1 className="text-2xl font-bold mb-4">Add Job</h1>

          {/* Profile Image */}
         

          {/* Name */}

       

          <div className="mb-4">
  <label className="block text-sm font-medium ">Title</label>
  <input
    type="text"
    name="title"
    value={formData.title}
    onChange={handleInputChange}
    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  />
</div>

<div className="mb-4">
  <label className="block text-sm font-medium ">Company</label>
  <input
    type="text"
    name="company"
    value={formData.company}
    onChange={handleInputChange}
    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  />
</div>

<div className="mb-4">
  <label className="block text-sm font-medium ">Required Skills</label>
  <input
    type="text"
    name="skills"
    value={formData.skills}
    onChange={handleInputChange}
    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  />
</div>

<div className="mb-4">
  <label className="block text-sm font-medium ">Details</label>
  <textarea
    name="details"
    value={formData.details}
    onChange={handleInputChange}
    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    rows="3"
  />
</div>

<div className="mb-4">
  <label className="block text-sm font-medium ">Contact</label>
  <input
    type="text"
    name="contact"
    value={formData.contact}
    onChange={handleInputChange}
    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  />
</div>

<div className="mb-4">
  <label className="block text-sm font-medium ">Image</label>
  <input
    type="file"
    onChange={handleImageChange}

    name="image"
    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  />
</div>
        

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Add Job
          </button>
        </form>
      )}
    </div>
  );
};

