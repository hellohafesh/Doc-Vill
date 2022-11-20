import { createBrowserRouter } from "react-router-dom";
import DashbordLayout from "../Layout/DashbordLayout";
import Main from "../Layout/Main";
import NavLayout from "../Layout/NavLayout";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../Pages/DashBord/AddDoctor/AddDoctor";
import AllAppiontment from "../Pages/DashBord/AllAppiontment/AllAppiontment";
import AllUsers from "../Pages/DashBord/AllUsers/AllUsers";
import MannageDoctors from "../Pages/DashBord/MannageDoctors/MannageDoctors";
import MyAppiontment from "../Pages/DashBord/MyAppiontment/MyAppiontment";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import AdminRoute from "./PrivateRoute/AdminRoute/AdminRoute";
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
            },
            {
                path: '/dashbord/users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashbord/appiontments',
                element: <AdminRoute><AllAppiontment></AllAppiontment></AdminRoute>
            },
            {
                path: '/dashbord/adddoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashbord/mannageDoctors',
                element: <AdminRoute><MannageDoctors></MannageDoctors></AdminRoute>
            },
        ]
    },
])
export default router;