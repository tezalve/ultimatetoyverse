import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Home/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import Footer from '../Pages/Home/Footer/Footer';

const Main = () => {
    return (
        <div className='bg-warning'>
            <ToastContainer/>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;