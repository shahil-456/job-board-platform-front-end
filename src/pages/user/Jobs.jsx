import React, { useEffect, useState } from "react";
import { CourseCards } from "../../components/user/Cards";
import { useFetch } from "../../hooks/useFetch";

export const Jobs = () => {
    const [jobList, isLoading, error] = useFetch("/job/jobs");
    const [searchQuery, setSearchQuery] = useState("");  
    const [filteredJobs, setFilteredJobs] = useState(jobList);  

    useEffect(() => {
        if (jobList) {
            const filtered = jobList.filter((job) =>
                job.title.toLowerCase().includes(searchQuery.toLowerCase())  
            );
            setFilteredJobs(filtered);
        }
    }, [searchQuery, jobList]);  // Re-run effect when searchQuery or jobList changes

    return (
        <div className="flex flex-col items-center justify-start px-20 py-16">
            {/* Search Bar */}
            <div className="mb-8 w-full max-w-md">
                <input
                    type="text"
                    placeholder="Search for jobs..."
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}  
                />
            </div>

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
                        {filteredJobs?.map((job) => (
                            <CourseCards key={job?._id} job={job} />
                        ))}
                    </section>
                </>
            )}
        </div>
    );
};
