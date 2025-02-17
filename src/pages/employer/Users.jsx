import React, { useEffect, useState } from "react";
import { CourseCards } from "../../components/user/Cards";
import { axiosInstance } from "../../config/axiosInstance";
import { useFetch } from "../../hooks/useFetch";
import { CourseSkelton } from "../../components/shared/Skeltons";
import { Link } from "react-router-dom";



export const Users = () => {

    const { isAdminAuth,adminData } = useSelector((state) => state.admin);

    const apiEndpoint = isAdminAuth ? "/admin/get_users" : "/mentor/get_users";
    const [userList, isLoading, error] = useFetch(apiEndpoint);




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

                    {/* <div className="flex flex-col items-center justify-start px-20 py-16 "> */}

                    <section className="overflow-x-auto">
  <table className="min-w-full border">
    <thead>
      <tr className="">
        <th className="border px-4 py-2">Profile</th>
        <th className="border px-4 py-2">Name</th>
        <th className="border px-4 py-2">Email</th>
        <th className="border px-4 py-2">Mobile</th>
        <th className="border px-4 py-2">Status</th>
        <th className="border px-4 py-2">View CV</th>

      </tr>
    </thead>
    <tbody>
      {userList?.map((user) => (
        <tr key={user._id} className="border">
          <td className="border px-4 py-2">
            <img src={user.profilePic} alt="Profile" className="h-10 w-10 rounded-full" />
          </td>
          <td className="border px-4 py-2">{user.name}</td>
          <td className="border px-4 py-2">{user.email}</td>
          <td className="border px-4 py-2">{user.mobile}</td>
          <td className="border px-4 py-2">
            {user.isActive ? "Active" : "Inactive"}
          </td>

        <td className="border px-4 py-2">
        <Link to={`/employer/user_cv/`+user._id} className="text-blue-500 underline">
            cv
        </Link>
        </td>

        </tr>

      ))}
    </tbody>
  </table>
</section>



                </>
            )}
        </div>
    );
};

