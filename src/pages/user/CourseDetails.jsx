import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../config/axiosInstance";

export const CourseDetails = () => {
    const params = useParams();
    const { courseId } = params;

    console.log("params===", courseId);

    const [courseDetails, setCourseDetails] = useState({});

    const fetchCourses = async () => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: `/courses/course-details/${courseId}`,
            });
            console.log("response====", response);
            setCourseDetails(response?.data?.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <div>
            <section>
                <h2 className="text-2xl font-bold">Course Details Page</h2>
            </section>
            <section>
                <h2 className="text-3xl font-bold">{courseDetails?.title} </h2>
                <p className="text-md font-semibold">{courseDetails?.description} </p>
                <img src={courseDetails?.image} alt="" />
            </section>
        </div>
    );
};
