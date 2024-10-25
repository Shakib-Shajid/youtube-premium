import React from 'react';

const FAQ = () => {
    return (
        //  
        <div className='bg-stone-100 w-[96%] lg:w-[80%] rounded-3xl mx-auto my-10 py-5' data-aos="flip-left">
            <h3 className='text-3xl md:text-5xl font-bold py-5 w-[88%] lg:w-[96%] mx-auto'>Your questions, answered</h3>
            <div className='w-[96%] lg:w-[98%] mx-auto rounded-2xl '>
                <div className="collapse collapse-arrow mb-5">
                    <input type="checkbox" name="my-accordion-2" />
                    <div className="collapse-title text-base md:text-lg font-bold">What’s included with YouTube Premium?</div>
                    <div className="collapse-content text-[#606060]">
                        <p>With a YouTube Premium membership, you can watch ad-free videos on YouTube. Plus, you can download videos to watch offline—and you can play videos in the background while you use other apps.
                            <br /><br />
                            YouTube Music Premium is included in your YouTube Premium membership. Download the YouTube Music app to listen to over 100 million songs ad-free, offline, and while your screen is locked. <br /><br />
                            You can also watch videos on the YouTube Kids app without ads.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mb-5">
                    <input type="checkbox" name="my-accordion-2" />
                    <div className="collapse-title text-base md:text-lg font-bold">How do I download videos and music?</div>
                    <div className="collapse-content text-[#606060]">
                        <p>You can download and watch videos and music on your mobile device using the YouTube app, the YouTube Music app, or the YouTube Kids app. You can also download videos and watch on your computer using Chrome, Edge & Opera browsers.
                            <br /><br />
                            You can watch or listen to content offline for up to 30 days without being connected to the internet.
                            <br /><br />
                            <span className='text-[#065FD4]'>Learn more about how to watch videos offline</span>
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mb-5">
                    <input type="checkbox" name="my-accordion-2" />
                    <div className="collapse-title text-base md:text-lg font-bold">How do I add people to my plan?</div>
                    <div className="collapse-content text-[#606060]">
                        <p>You can share your YouTube Premium membership with up to 5 additional household members with a family plan. Once you get a family plan, you can add members if you’re the family manager of your plan. Family members sharing a family plan must live in the same household as the family manager and have a Google account. Each family member gets their own private, personalized account.
                            <br /><br />
                            <span className='text-[#065FD4]'>Learn more about our family plan</span>
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mb-5">
                    <input type="checkbox" name="my-accordion-2" />
                    <div className="collapse-title text-base md:text-lg font-bold">How do I play videos and music in the background?</div>
                    <div className="collapse-content text-[#606060]">
                        <p>With YouTube Premium, background play is on by default for YouTube, YouTube Music, and YouTube Kids. This means if you’re watching a video on YouTube and you leave the YouTube app, the video will keep playing in the background until you pause it. You can turn off background play anytime in your settings.
                            <br /><br />
                            <span className='text-[#065FD4]'>Learn more about Background Play</span>
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mb-5">
                    <input type="checkbox" name="my-accordion-2" />
                    <div className="collapse-title text-base md:text-lg font-bold">What’s the difference between YouTube Premium and YouTube Music Premium?</div>
                    <div className="collapse-content text-[#606060]">
                        <p>With YouTube Premium, you can watch videos on the YouTube app ad-free, offline, and in the background.
                            <br /><br />
                            YouTube Music Premium is included in your YouTube Premium membership. Download the YouTube Music app to listen to over 100 million songs ad-free, offline, and while your screen is locked.
                            <br /><br />
                            <span className='text-[#065FD4]'>Learn more about YouTube Music</span>
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mb-5">
                    <input type="checkbox" name="my-accordion-2" />
                    <div className="collapse-title text-base md:text-lg font-bold">How can I cancel my membership?</div>
                    <div className="collapse-content text-[#606060]">
                        <p>Cancel your membership by visiting the <span className='text-[#065FD4]'>Paid Membership page</span>. You can rejoin YouTube Premium at any time.</p>
                    </div>
                </div>
                <div className="collapse mb-5">
                    <input type="checkbox" name="my-accordion-2" />
                    <div className="collapse-title text-sm font-bold leading-6">Have other questions? <br />
                        Visit the <span className='text-[#065FD4]'>YouTube Help Center</span></div>

                </div>
            </div>
        </div >
    );
};

export default FAQ;