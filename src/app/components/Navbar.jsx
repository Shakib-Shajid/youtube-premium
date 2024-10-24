
import Image from 'next/image';
import React from 'react';
import { CiSearch } from "react-icons/ci";
import { HiMiniMicrophone } from "react-icons/hi2";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";


const Banner = () => {


    return (
        <div className="navbar bg-base-100 w-[96%] mx-auto">
            <div className="navbar-start">
                <div className="dropdown hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 hidden md:grid"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                <Image src="/logo.png" width="300" height="100" alt="" className='w-28 h-8 md:ml-5 hidden md:grid' />
                <Image src="/premium.png" width="300" height="100" alt="" className='md:ml-5 md:hidden' />
            </div>
            <div className="navbar-center hidden lg:flex w-2/4">
                <label className="input input-bordered rounded-full flex items-center w-full overflow-hidden mr-5">
                    <input
                        type="text"
                        className="flex-grow border-none focus:ring-0 outline-none pl-4"
                        placeholder="Search"
                    />
                    <div className="bg-gray-200 border-l border-black-600 p-5 relative -right-4 rounded-r-full flex justify-center items-center">
                        <CiSearch className='text-xl' />
                    </div>
                </label>

                <div className="bg-gray-200 p-3 relative rounded-full flex justify-center items-baseline">
                        <HiMiniMicrophone className='text-xl' />
                    </div>

            </div>

            <div className="navbar-end text-2xl opacity-80 gap-3">
                <RiVideoAddLine />
                <IoMdNotificationsOutline />
                <FaRegUserCircle />
            </div>
        </div>
    );
};

export default Banner;
