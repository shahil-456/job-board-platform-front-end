import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../config/axiosInstance";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFetch } from "../../hooks/useFetch";
import { useSelector, useDispatch } from "react-redux";


export const JobDetails = () => {
    const { jobId } = useParams();
    const navigate = useNavigate();

    const { isUserAuth,userData } = useSelector((state) => state.user);

    console.log("params===", jobId);

    const [JobDetails, setJobDetails] = useState({});
    const [appDetails, applyData] = useState({});


    const handleApply = () => {
        fetchData(`/job/apply_job/${jobId}`, "GET");

    };


    const [isApplied, setIsApplied] = useState(false);

    const handleApplyClick = async () => {
      if (isUserAuth && !appDetails.jobID) {
        await applyJob(); // Assume applyJob sends the application to the backend
        setIsApplied(true); // Update state to indicate job is applied
      }
    };

    const applyJob = async () => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: `/job/apply_job/${jobId}`,
            });
            console.log("response====", response);
            // setJobDetails(response?.data?.data);
        } catch (error) {
            console.log(error);
        }
    };


    const fetchCourses = async () => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: `/job/get_job_details/${jobId}`,
            });
            console.log("response====", response);
            setJobDetails(response?.data?.data);
        } catch (error) {
            console.log(error);
        }
    };


    const fetchApp = async () => {
      try {
          const response = await axiosInstance({
              method: "GET",
              url: `/job/get_job_apply/${jobId}`,
          });
          console.log("response====", response);
          applyData(response?.data?.data);
      } catch (error) {
          console.log(error);
      }
  };

    useEffect(() => {
        fetchCourses();
        fetchApp();

    }, []);

    return (
       

    <div className="flex justify-center items-center min-h-screen">
  <div className=" p-6 rounded-lg shadow-md w-full max-w-2xl">
    {/* Job Details Header */}
    <h2 className="text-2xl font-bold text-center mb-4">Job Details</h2>

    {/* Job Image */}
    <div className="flex justify-center">
      <img
        src={JobDetails?.image}
        alt="Job"
        className="w-full h-60 object-cover rounded-lg mb-4"
      />
    </div>

    {/* Job Information */}
    <div className="space-y-3">
      <h2 className="text-3xl font-bold ">{JobDetails?.title}</h2>

      <p className="text-md font-semibold ">{JobDetails?.details}</p>

      <div className="mt-4">
        <p className="text-lg font-semibold ">Company:</p>
        <p className="text-gray-600">{JobDetails?.company}</p>
      </div>

      <div className="mt-2">
        <p className="text-lg font-semibold ">Skills Required:</p>
        <p className="text-gray-600">{JobDetails?.skills}</p>
      </div>
    </div>

    {/* Apply Job Button */}
    <div className="flex justify-center mt-6">

    {isUserAuth ? (
        !appDetails.jobID ? (
          <button
            onClick={handleApplyClick}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
          >
            {isApplied ? 'Applied' : 'Apply Now'}
          </button>
        ) : (
          <p className="text-green-500">You have already applied.</p>
        )
      ) : null}


    </div>
  </div>
</div>


    );
};
