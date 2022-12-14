import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const navMenuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#blogs'>Blogs</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#Contact'>Contact</a></li>
    </>
    return (
        <div class="navbar text-white">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navMenuItems}
                    </ul>
                </div>
                <Link to='/' class="btn btn-ghost normal-case text-xl">Ad-Tech</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {navMenuItems}
                </ul>
            </div>
            <div class="navbar-end">
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" alt='' />
                        </div>
                    </label>
                    <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link to='' class="justify-between">
                                Profile
                            </Link>
                        </li>
                        <li><span>Logout</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;