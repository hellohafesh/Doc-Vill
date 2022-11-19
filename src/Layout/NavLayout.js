import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Pages/Shared/Nav/Nav';

const NavLayout = () => {
    return (
        <>
            <Nav></Nav>
            <Outlet></Outlet>

        </>
    );
};

export default NavLayout;