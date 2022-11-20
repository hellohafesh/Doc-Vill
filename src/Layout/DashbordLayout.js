import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import Nav from '../Pages/Shared/Nav/Nav';

const DashbordLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    return (
        <div>
            <Nav></Nav>
            <div className="drawer drawer-mobile">
                <input id="dashbord-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="dashbord-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">

                        <li><Link to='/dashbord'>My Appiontments</Link></li>
                        {
                            isAdmin && <>
                                <li><Link to='/dashbord/users'>All Users</Link></li>
                                <li><Link to='/dashbord/appiontments'>All Appiontments</Link></li>
                                <li><Link to='/dashbord/AddDoctor'>Add Doctor</Link></li>
                                <li><Link to='/dashbord/mannageDoctors'>Mannage Doctor</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashbordLayout;