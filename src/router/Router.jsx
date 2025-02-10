import { createBrowserRouter } from "react-router-dom";
import { UserLayout } from "../layout/UserLayout";
import { Home } from "../pages/user/Home";
import { AdminHome } from "../pages/admin/Home";



import { Signup } from "../pages/shared/Signup";
import { Login } from "../pages/shared/Login";
import { Logout } from "../pages/user/Logout";

import { About } from "../pages/user/About";
import { Contact } from "../pages/user/Contact";
import { Course } from "../pages/user/Course";
import { JobDetails } from "../pages/user/JobDetails";
import { AdminJobDetails } from "../pages/admin/JobDetails";



import { ErrorPage } from "../pages/shared/ErrorPage";
import { Profile } from "../pages/user/Profile";
import { EditProfile } from "../pages/user/EditProfile";

import { Jobs } from "../pages/user/Jobs";
import { Cv } from "../pages/user/UploadCv";
import { AddJob } from "../pages/employer/AddJob";
import { Users } from "../pages/employer/Users";
import { EmpLogin } from "../pages/shared/EmployerLogin";
import { UserList } from "../pages/employer/UsersList";


import { UserDetails } from "../pages/employer/userDetails";

import { Application } from "../pages/employer/Application";
import { AdminLogin } from "../pages/shared/AdminLogin";




export const router = createBrowserRouter([
    {
        path: "",
        element: <UserLayout />,
        errorElement: <ErrorPage  />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "signup",
                element: <Signup />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "courses",
                element: <Course />,
            },
            
           
            {
                // element: <ProtectedRoute />,
                path: "user",
                children: [
                    {
                        path: "whishlist",
                        // element: <h1>Wishlist</h1>,
                    },
                    {
                        path: "profile",
                        element: <Profile />
                    },


                    {
                        path: "edit-profile",
                        element: <EditProfile />
                    },



                    {
                        path: "logout",
                        element: <Logout />,
                    },

                    {
                        path: "courses",
                        element: <Course />,
                    },

                    {
                        path: "jobDetails/:jobId",
                        element: <JobDetails />,
                    },

                    {
                        path: "jobs",
                        element: <Jobs />,
                    },

                    {
                        path: "my_cv",
                        element: <Cv />,
                    },
                    {
                        path: "orders",
                        // element: <h1> orders page</h1>,
                    },
                    {
                        path: "signup",
                        element: <Signup />,
                    },

                    {
                        path: "login",
                        element: <Login />,
                    },

                    {
                        path: "payment/success",
                        // element: <h2>Payment success</h2>,
                    },
                ],
            },


            {
                // element: <ProtectedRoute />,
                path: "employer",
                children: [
                    {
                        path: "user-list",
                        element: <Users />
                    },
                    {
                        path: "login",
                        element: <EmpLogin />
                    },


                    
                    {
                        path: "profile",
                        element: <Profile />
                    },

                    {
                        path: "application",
                        element: <Application />
                    },


                    {
                        path: "userDetails/:UserId",
                        element: <UserDetails />
                    },


                    {
                        path: "users-List",
                        element: <UserList />
                    },


                    {
                        path: "add-job",
                        element: <AddJob />
                    },

                    {
                        path: "courses",
                        element: <Course />,
                    },

                    {
                        path: "jobDetails/:jobId",
                        element: <JobDetails />,
                    },

                    {
                        path: "jobs",
                        element: <Jobs />,
                    },

                    {
                        path: "my_cv",
                        element: <Cv />,
                    },
                    {
                        path: "orders",
                        // element: <h1> orders page</h1>,
                    },
                    {
                        path: "signup",
                        element: <Signup />,
                    },

                    {
                        path: "login",
                        element: <Login />,
                    },

                    {
                        path: "payment/success",
                        // element: <h2>Payment success</h2>,
                    },
                ],
            },


            {
                // element: <ProtectedRoute />,
                path: "admin",
                children: [
                    {
                        path: "user-list",
                        element: <Users />
                    },
                    {
                        path: "login",
                        element: <AdminLogin />
                    },


                    
                    {
                        path: "profile",
                        element: <Profile />
                    },

                    {
                        path: "applications",
                        element: <Application />
                    },


                    {
                        path: "userDetails/:UserId",
                        element: <UserDetails />
                    },


                    {
                        path: "users-List",
                        element: <UserList />
                    },


                    {
                        path: "home",
                        element: <AdminHome />
                    },

                    {
                        path: "courses",
                        element: <Course />,
                    },

                    {
                        path: "jobDetails/:jobId",
                        element: <AdminJobDetails />,
                    },

                    {
                        path: "jobs",
                        element: <Jobs />,
                    },

                    {
                        path: "my_cv",
                        element: <Cv />,
                    },
                    {
                        path: "orders",
                        // element: <h1> orders page</h1>,
                    },
                    {
                        path: "signup",
                        element: <Signup />,
                    },

                    {
                        path: "login",
                        element: <Login />,
                    },

                    {
                        path: "payment/success",
                        // element: <h2>Payment success</h2>,
                    },
                ],
            },
        ],
    },
]);

