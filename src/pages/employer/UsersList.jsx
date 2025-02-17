import React, { useEffect, useState } from "react";
import { UserCards } from "../../components/user/Cards";
import { axiosInstance } from "../../config/axiosInstance";
import { useFetch } from "../../hooks/useFetch";
import { CourseSkelton } from "../../components/shared/Skeltons";
import { useSelector, useDispatch } from "react-redux";

export const UserList = () => {
    const [search, setSearch] = useState("");


    const { isAdminAuth,adminData } = useSelector((state) => state.admin);

    const apiEndpoint = isAdminAuth ? "/admin/get_users" : "/mentor/get_users";
    const [userList, isLoading, error] = useFetch(apiEndpoint);


    const filteredUsers = userList?.filter(user => 
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="flex flex-col items-center justify-start px-20 py-16">
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p className="text-red-500">Error loading users</p>
            ) : (
                <>
                    <section>
                        <h1 className="text-2xl font-bold mb-4">Users Listing Page</h1>
                        <input
                            type="text"
                            placeholder="Search by name..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="border px-4 py-2 rounded-md mb-4 w-full max-w-md"
                        />
                    </section>
                    <section className="grid grid-rows-3 grid-cols-3 gap-y-10 w-full">
                        {filteredUsers?.map((user) => (
                            <UserCards key={user?._id} user={user} />
                        ))}
                    </section>
                </>
            )}
        </div>
    );
};


