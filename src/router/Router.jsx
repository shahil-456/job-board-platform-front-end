import { createBrowserRouter } from "react-router-dom";
import { UserLayout } from "../layout/UserLayout";
import { Home } from "../pages/user/Home";
import { AdminHome } from "../pages/admin/Home";


import { EmployerLayout } from "../layout/EmployerLayout";
import { AdminLayout } from "../layout/AdminLayout";

import { Signup } from "../pages/shared/Signup";
import { EmpSignup } from "../pages/shared/Signup";

import { ProtectedRoute } from "./ProtectedRoute";

import { Login } from "../pages/shared/Login";
import { Logout } from "../pages/user/Logout";

import { About } from "../pages/user/About";
import { Contact } from "../pages/user/Contact";
import { Course } from "../pages/user/Course";
import { JobDetails } from "../pages/user/JobDetails";
import { AdminJobDetails } from "../pages/admin/JobDetails";

import { AppDetails } from "../pages/employer/AppDetails";


import { MainLogout } from "../pages/user/Logout";




import { ErrorPage } from "../pages/shared/ErrorPage";
import { Profile } from "../pages/user/Profile";
import { EditProfile } from "../pages/user/EditProfile";

import { EmployerProfile } from "../pages/employer/Profile";
import { EmployerEditProfile } from "../pages/employer/EditProfile";




import { Jobs ,AdminJobs} from "../pages/user/Jobs";
import { Cv } from "../pages/user/UploadCv";
import { AddJob } from "../pages/employer/AddJob";
import { Users } from "../pages/employer/Users";
import { EmpLogin } from "../pages/shared/EmployerLogin";
import { UserList } from "../pages/employer/UsersList";


import { UserDetails } from "../pages/employer/UserDetails";

import { Application } from "../pages/employer/Application";
import { MyJobs } from "../pages/employer/MyJobs";

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
                path: "jobs",
                element: <Jobs />,
            },
            
            
            
            {
                // element: <ProtectedRoute />,
                path: "user",
                // element: <UserLayout />,

                children: [

                    {
                        path: "",
                        element: <Login />,
                    },


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
                        path: "my_jobs",
                        element: <MyJobs />
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


    {
        // element: <ProtectedRoute />,
        path: "employer",
        element: <EmployerLayout />,

        children: [

            {
                path: "",
                element: <EmpLogin />,
            },
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
                element: <EmployerProfile />
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
                path: "appDetails/:appId",
                element: <AppDetails />,
            },

            {
                path: "jobs",
                element: <Jobs />,
            },

            {
                path: "logout",
                element: <MainLogout />,
            },
            {
                path: "orders",
                // element: <h1> orders page</h1>,
            },
            {
                path: "signup",
                element: <EmpSignup />,
            },

            {
                path: "login",
                element: <Login />,
            },
            
            {
                path: "edit-profile",
                element: <EmployerEditProfile />,
            },
        ],
    },


    
    {
        // element: <ProtectedRoute />,
        path: "admin",
        element: <AdminLayout />,

        children: [

            {
                path: "",
                element: <AdminLogin />,
            },
            {
                path: "user-list",
                element: <Users />
            },
            {
                path: "login",
                element: <AdminLogin />
            },


            
            {
                path: "about",
                element: <Profile />
            },


             
            {
                path: "logout",
                element: <MainLogout />
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
                path: "appDetails/:appId",
                element: <AppDetails />
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
                element: <AdminJobs />,
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





]);

