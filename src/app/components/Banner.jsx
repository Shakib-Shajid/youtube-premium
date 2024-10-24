import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div
            className="hero h-[700px]"
            style={{
                backgroundImage: "url(https://www.gstatic.com/youtube/img/promos/growth/ytp_lp2_background_web_4098x2304.jpg)",
            }}>
            <div className="hero-content text-center">
                <div className=" max-w-xl w-[80%] mx-auto md:w-full">
                    <div className='flex justify-center'>
                        <Image src="/premium.png" width="300" height="300" alt="" />
                    </div>
                    <h1 className="mb-5 text-2xl md:text-6xl font-bold">
                        All YouTube.
                        <span className="block my-5"></span>
                        No interruptions.
                    </h1>

                    <p className="mb-5 text-base">YouTube and YouTube Music ad-free, offline, and in the background</p>
                    <p className="mb-5 text-base">BDT 239.00/month • Cancel anytime </p>
                    <button className="btn bg-[#0556BF] btn-lg rounded-full text-white mb-10 mt-7">Get YouTube Premium</button>
                    <p className="mb-5 text-base">Or save money with a <span className='text-[#065FD4]'>family or student plan</span>  </p>

                    <p className='text-xs'>Recurring billing. <br />
                        <span className='text-[#065FD4]'> Restrictions apply.</span> </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;