import Image from 'next/image';
import React from 'react';

const Another = () => {
    return (
        <div className='relative'>
            <div className='w-[90%] mx-auto flex flex-col md:flex-row h-[500px] my-10 '>
                <div
                    className="hero lg:w-[50%] rounded-t-3xl md:rounded-r-none md:rounded-l-3xl"
                    style={{
                        backgroundImage: "url(https://www.gstatic.com/youtube/img/promos/growth/premium_lp2_large_feature_MusicModuleSquare_text_background_tablet_1284x1875.jpg)",
                    }}>
                    <div className=' text-white  w-[80%] px-2 py-10' >
                        <Image src="/music.png" width="150" height="150" alt="" />
                        <h3 className='text-3xl font-bold my-5'>An app made just for music</h3>
                        <p className='text-base'>With YouTube Premium you get uninterrupted access to stream all you want on the YouTube Music app. Listen to the world’s largest music catalog with over 100 million songs, ad-free — enjoy personalized mixes, playlists to fit every mood, chart-toppers from around the world and more, all without ads.</p>
                    </div>
                </div>


                {/* <Image src="https://www.gstatic.com/youtube/img/promos/growth/premium_lp2_large_feature_MusicModuleSquare_text_background_tablet_1284x1875.jpg" width="700" height="200" alt="" className='rounded-l-3xl' /> */}
                <Image src="https://www.gstatic.com/youtube/img/promos/growth/premium_lp2_large_feature_MusicModuleSquare_tablet_640x550.webp" width="700" height="200" alt="" className='rounded-b-3xl md:rounded-l-none md:rounded-r-3xl -mt-1 md:-mt-0 md:w-[50%]' />
            </div>

            {/* <div className='absolute top-24 left-32 w-[40%] text-white px-5 py-7' >
                <Image src="/music.png" width="150" height="150" alt="" />
                <h3 className='text-3xl font-bold my-5'>An app made just for music</h3>
                <p className='text-base'>With YouTube Premium you get uninterrupted access to stream all you want on the YouTube Music app. Listen to the world’s largest music catalog with over 100 million songs, ad-free — enjoy personalized mixes, playlists to fit every mood, chart-toppers from around the world and more, all without ads.</p>
            </div> */}

        </div>

    );
};

export default Another;