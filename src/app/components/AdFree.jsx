import Image from 'next/image';
import React from 'react';

const AdFree = () => {
    return (
        <div className='my-24 lg:my-36'>
            <h2 className='text-4xl md:text-5xl font-bold text-center w-[90%] mx-auto md:w-full'>Keep playing what you love - uninterrupted</h2>

            <section className='flex flex-col md:flex-row gap-10 items-center justify-evenly w-[80%] mx-auto my-20 lg:my-36'>
                <div className='md:w-[50%]'>
                    <h3 className='font-bold text-5xl'>Unlimited ad-free videos</h3>
                    <p className='text-[#606060] my-5 text-lg leading-6'>Immerse in more of your favorite videos without waiting for ads. Find helpful how-to’s, try new recipes, or work out with your favorite creators — all without any interruptions.</p>
                </div>
                <div className='md:w-[50%]'>
                    <Image src="https://www.gstatic.com/youtube/img/promos/growth/premium_lp2_large_feature_AdFree_light_tablet_632x455.webp" width="1300" height="1200" alt="" />
                </div>
            </section>


            <section className='flex flex-col md:flex-row-reverse gap-10 items-center justify-evenly w-[80%] mx-auto my-36'>
                
                <div className='md:w-[50%]'>
                    <h3 className='font-bold text-5xl'>Enjoy videos offline</h3>
                    <p className='text-[#606060] my-5 text-lg leading-6'>Watch anytime, anywhere — download videos and watch them whenever, wherever, without the need for cell data or WiFi.</p>
                </div>

                <div className='md:w-[50%]'>
                    <Image src="https://www.gstatic.com/youtube/img/promos/growth/premium_lp2_large_feature_UnlimitedDownloads_light_tablet_632x615.webp" width="1500" height="1200" alt="" />
                </div>
            </section>


            <section className='flex flex-col md:flex-row gap-10 items-center justify-evenly w-[80%] mx-auto my-36'>
                <div className='md:w-[50%]'>
                    <h3 className='font-bold text-5xl'>Background play</h3>
                    <p className='text-[#606060] my-5 text-lg leading-6'>Keep watching - whether the screen’s off or you’re using other apps, you can continue playing your videos in the background with zero interruptions.</p>
                </div>

                <div className='md:w-[50%]'>
                    <Image src="https://www.gstatic.com/youtube/img/promos/growth/premium_lp2_large_feature_BackgroundPlay_light_tablet_632x624.webp" width="1500" height="1200" alt="" />
                </div>
            </section>

        </div>
    );
};

export default AdFree;