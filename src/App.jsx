import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router/Router";

import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');



function App() {
    return (
    <>
    <RouterProvider router={router} />
    <Toaster />
    </>
   )
}

export default App;
