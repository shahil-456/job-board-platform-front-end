import React, { useEffect, useState } from "react";
import { CourseCards } from "../../components/user/Cards";
import { axiosInstance } from "../../config/axiosInstance";
import { useFetch } from "../../hooks/useFetch";
import { CourseSkelton } from "../../components/shared/Skeltons";

export const Jobs = () => {
    const [jobList, isLoading, error] = useFetch("/job/jobs");

    return (
        <div className="flex flex-col items-center justify-start px-20 py-16">
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p className="text-red-500">Error loading jobs</p>
            ) : (
                <>
                    <section>
                        <h1 className="text-2xl font-bold">Jobs Listing Page</h1>
                    </section>
                    <section className="grid grid-rows-3 grid-cols-3 gap-y-10 w-full">
                        {jobList?.map((job) => (
                            <CourseCards key={job?._id} job={job} />
                        ))}
                    </section>
                </>
            )}
        </div>
    );
};

