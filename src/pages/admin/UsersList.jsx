import React, { useEffect, useState } from "react";
import { UserCards } from "../../components/user/Cards";
import { axiosInstance } from "../../config/axiosInstance";
import { useFetch } from "../../hooks/useFetch";
import { CourseSkelton } from "../../components/shared/Skeltons";

export const UserList = () => {
    const [userList, isLoading, error] = useFetch("/mentor/get_users");

    return (
        <div className="flex flex-col items-center justify-start px-20 py-16">
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p className="text-red-500">Error loading jobs</p>
            ) : (
                <>
                    <section>
                        <h1 className="text-2xl font-bold">Users Listing Page</h1>
                    </section>
                    <section className="grid grid-rows-3 grid-cols-3 gap-y-10 w-full">
                        {userList?.map((user) => (


                            <UserCards key={user?._id} user={user} />

                        ))}
                    </section>
                </>
            )}
        </div>
    );
};

