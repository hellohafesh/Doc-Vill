import { createBrowserRouter } from "react-router-dom";
import DashbordLayout from "../Layout/DashbordLayout";
import Main from "../Layout/Main";
import NavLayout from "../Layout/NavLayout";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import DashBord from "../Pages/DashBord/DashBord/DashBord";
import MyAppiontment from "../Pages/DashBord/MyAppiontment/MyAppiontment";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <PrivateRoute> <Appointment></Appointment></PrivateRoute>
            },
        ]
    },
    {
        path: '/',
        element: <NavLayout></NavLayout>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
        ]
    },
    {
        path: '/dashbord',
        element: <DashbordLayout></DashbordLayout>,
        children: [
            {
                path: '/dashbord',
                element: <PrivateRoute><MyAppiontment></MyAppiontment></PrivateRoute>
            }
        ]
    },
])
export default router;