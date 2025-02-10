import React from "react";
import { useNavigate } from "react-router-dom";


export const CourseCards = ({ job }) => {
    console.log("jobCard======", job);
    const navigate = useNavigate();

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img src={job?.image} alt="Jobs" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{job?.title} </h2>
                <p>Company : {job?.company}  </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => navigate(`user/jobDetails/${job?._id}`)}>
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};
