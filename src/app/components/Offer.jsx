import Image from 'next/image';
import React from 'react';

const Offer = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-2 max-w-7xl mx-auto'>
            {/* 1st */}
            <div className="card card-compact w-80 h-full mx-auto ">
                <figure className="w-full h-32 flex justify-center items-center">
                    <Image src="https://www.gstatic.com/youtube/img/promos/growth/premium_lp2_small_feature_Ad-free_light_tablet_600x444.webp" width="100" height="100" alt="" className="object-contain" />
                </figure>
                <div className="card-body ">
                    <p className='text-base leading-[1.38rem]'>Ad-free so you can immerse in your favorite videos without interruption</p>
                    
                </div>
            </div>

            {/* 2nd */}
            <div className="card card-compact w-80 h-full mx-auto">
                <figure className="w-full h-32 flex justify-center items-center">
                    <Image src="https://www.gstatic.com/youtube/img/promos/growth/premium_lp2_small_feature_DownloadMultiple_light_tablet_600x508.webp" width="100" height="100" alt="" className="object-contain" />
                </figure>
                <div className="card-body ">
                    <p className='text-base leading-[1.38rem]'>Download videos to watch later when you’re offline or on the go</p>
                    
                </div>
            </div>

            {/* 3rd */}
            <div className="card card-compact w-80 h-full mx-auto">
                <figure className="w-full h-32 flex justify-center items-center">
                    <Image src="https://www.gstatic.com/youtube/img/promos/growth/premium_lp2_small_feature_PictureInPicture_light_tablet_600x764.webp" width="100" height="100" alt="" className="object-contain" />
                </figure>
                <div className="card-body ">
                    <p className='text-base leading-[1.38rem]'>Background play so you can watch while using other apps or with your screen locked</p>
                    
                </div>
            </div>

            {/* 4th */}
            <div className="card card-compact w-80 h-full mx-auto">
                <figure className="w-full h-32 flex justify-center items-center">
                    <Image src="https://www.gstatic.com/youtube/img/promos/growth/premium_lp2_small_feature_UnlimitedMusic_light_tablet_600x505.webp" width="100" height="100" alt="" className="object-contain" />
                </figure>
                <div className="card-body ">
                    <p className='text-base leading-[1.38rem]'>Stream all the music you want to hear, ad-free on the YouTube Music app</p>
                    
                </div>
            </div>
        </div>



    );
};

export default Offer;







