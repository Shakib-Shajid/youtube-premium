import React from 'react';
import { CiUser } from "react-icons/ci";
import { TbUsers } from "react-icons/tb";
import { RiGraduationCapLine } from "react-icons/ri";
import { RiShareBoxLine } from "react-icons/ri";


const Price = () => {
    return (
        <div>
            <h3 className='text-center text-2xl lg:text-5xl font-bold my-10 lg:my-20'>Pick a membership <br /> that fits you</h3>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto'>
                {/* 1st */}
                <div className="card bg-base-100 w-80 md:w-96 mx-auto shadow-2xl rounded-3xl">
                    <div className="card-body p-5">
                        <h2 className="border-b-2 py-2 pb-4 text-3xl font-bold flex items-center gap-3"><CiUser className='text-2xl'/>Individual</h2>
                        <div>
                            <small className='text-[#606060] font-bold'>Monthly</small>
                            <h5 className='text-lg'>BDT 239.00/month</h5>
                            <small className='text-[#065FD4]'>Restrictions apply.</small>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn w-full rounded-full bg-[#0556BF] text-white text-lg">Get YouTube Premium</button>
                        </div>
                    </div>
                </div>

                {/* 2nd */}
                <div className="card bg-base-100 w-80 md:w-96 mx-auto shadow-2xl rounded-3xl">
                    <div className="card-body p-5">
                        <h2 className="border-b-2 py-2 pb-4 text-3xl font-bold flex items-center gap-3">< TbUsers className='text-2xl'/> Family</h2>
                        <div>
                            <small className='text-[#606060] font-bold'>Monthly</small>
                            <h5 className='text-lg'>BDT 449.00/month</h5>
                            <small className='text-[#606060]'>Add up to 5 family members (ages 13+) in your household. <span className='text-[#065FD4]'>Restrictions apply.</span></small>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn w-full rounded-full bg-[#b5cbe8] text-[#065FD4] text-lg">Get Family Plan</button>
                        </div>
                    </div>
                </div>

                {/* 3rd */}
                <div className="card bg-base-100 w-80 md:w-96 mx-auto shadow-2xl rounded-3xl">
                    <div className="card-body p-5">
                        <h2 className="border-b-2 py-2 pb-4 text-3xl font-bold flex items-center gap-3">< RiGraduationCapLine className='text-2xl'/>Student</h2>
                        <div>
                            <small className='text-[#606060] font-bold'>Monthly</small>
                            <h5 className='text-lg'>BDT 139.00/month</h5>
                            <small className='text-[#606060]'>Eligible students only. Annual verification required. <span className='text-[#065FD4]'>Restrictions apply.</span></small>
                        </div>
                        <div className="card-actions justify-end">
                        <button className="btn w-full rounded-full bg-[#b5cbe8] text-[#065FD4] text-lg"><RiShareBoxLine className='text-2xl'/>Get Student Plan</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Price;