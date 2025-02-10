import React, { useEffect, useState } from "react";
import { CourseCards } from "../../components/user/Cards";
import { axiosInstance } from "../../config/axiosInstance";
import { useFetch } from "../../hooks/useFetch";
import { CourseSkelton } from "../../components/shared/Skeltons";

export const Course = () => {
    const [courseList, isLoading, error] = useFetch("/job/jobs");

    return (
        <div>
            {isLoading ? (
                <CourseSkelton />
            ) : (
                <div className="flex flex-col items-center justify-start px-20 py-16 ">
                    <section>
                        <h1 className="text-2xl font-bold">Course listing page</h1>
                    </section>
                    <section className="grid grid-rows-3 grid-cols-3  gap-y-10 w-full">
                        {courseList?.map((course, index) => (
                            <CourseCards key={course?._id} course={course} />
                        ))}
                    </section>
                </div>
            )}
        </div>
    );
};
