import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Home/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';

const Main = () => {
    return (
        <div>
            <ToastContainer/>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;