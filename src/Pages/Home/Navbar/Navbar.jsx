import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
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
                        <NavLink id='home' className='text-decoration-none'>
                            UltimateToyVerse
                        </NavLink>
                    </li>
                    <li className="nav-item active p-1">
                        <NavLink id='home' className='text-decoration-none' to={"/"}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item active p-1">
                        <NavLink id='home' className='text-decoration-none' to={"/alltoys"}>
                            All Toys
                        </NavLink>
                    </li>
                    {
                        user ?
                            <li className="nav-item active p-1">

                                <NavLink id='home' className='text-decoration-none' to={"/"}>
                                    My Toys
                                </NavLink>

                            </li>
                            : ""
                    }
                    {
                        user ?
                            <li className="nav-item active p-1">

                                <NavLink id='home' className='text-decoration-none' to={"/addtoy"}>
                                    Add a Toy
                                </NavLink>

                            </li>
                            : ""
                    }
                    <li className="nav-item p-1">
                        <NavLink id='blog' className='text-decoration-none' to={"/"}>
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
                                    <NavLink id='login' className='text-decoration-none' to={"/login"} style={({ isActive }) => (isActive ? { borderBottom: "2px solid grey", color: 'red' } : { color: 'grey' })}>
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