import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import { Button, Image } from 'react-bootstrap';
import logo from '../../../../public/logo/logo.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => [])
            .then(error => console.error(error));
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-warning justify-content-center">
                <ul className="navbar-nav align-items-center d-flex justify-content-around">
                    <li className="nav-item active p-1">
                        <Image style={{ width: "40px", height: "40px" }} src={logo} roundedCircle></Image>
                    </li>
                    <li className="nav-item active p-1">
                        <Link id='home' className='text-decoration-none' style={{ color: 'black' }}>
                            UltimateToyVerse
                        </Link>
                    </li>
                    <li className="nav-item active p-1">
                        <NavLink id='home' className='text-decoration-none' to={"/"} style={({ isActive }) => (isActive ? { borderBottom: "2px solid black", color: 'red' } : { color: 'black' })}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item active p-1">
                        <NavLink id='home' className='text-decoration-none' to={"/alltoys"} style={({ isActive }) => (isActive ? { borderBottom: "2px solid black", color: 'red' } : { color: 'black' })}>
                            All Toys
                        </NavLink>
                    </li>
                    {
                        user ?
                            <li className="nav-item active p-1">

                                <NavLink id='home' className='text-decoration-none' to={"/mytoys"} style={({ isActive }) => (isActive ? { borderBottom: "2px solid black", color: 'red' } : { color: 'black' })}>
                                    My Toys
                                </NavLink>

                            </li>
                            : ""
                    }
                    {
                        user ?
                            <li className="nav-item active p-1">

                                <NavLink id='home' className='text-decoration-none' to={"/addtoy"} style={({ isActive }) => (isActive ? { borderBottom: "2px solid black", color: 'red' } : { color: 'black' })}>
                                    Add a Toy
                                </NavLink>

                            </li>
                            : ""
                    }
                    <li className="nav-item p-1">
                        <NavLink id='blog' className='text-decoration-none' to={"/"} style={({ isActive }) => (isActive ? { borderBottom: "2px solid black", color: 'red' } : { color: 'black' })}>
                            Blogs
                        </NavLink>
                    </li>
                    <li className="nav-item p-1">
                        {
                            user ?
                                <>
                                    <span className='p-1'>
                                        <Image title={user.displayName} className='' style={{ width: "40px", height: "40px" }} src={user.photoURL} roundedCircle></Image>
                                    </span>
                                    <Button className='btn-danger' onClick={handleLogOut}>
                                        Signout
                                    </Button>
                                </>
                                :
                                <>
                                    <NavLink id='login' className='text-decoration-none' to={"/login"} style={({ isActive }) => (isActive ? { borderBottom: "2px solid black", color: 'red' } : { color: 'black' })}>
                                        Login
                                    </NavLink>
                                </>
                        }
                    </li>

                </ul>
            </nav>
        </div>
    );
};

export default Navbar;