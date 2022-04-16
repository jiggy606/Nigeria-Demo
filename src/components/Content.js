import React from 'react'
import Image1 from '../images/img1.jpg'
import Image2 from '../images/img2.jpg'
import Image3 from '../images/img3.jpg'
import Image4 from '../images/img4.jpg'

const Content = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
                <img className="h-full rounded mb-10 shadow" alt='' src={Image1} />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">
                        Yam
                    </h2>
                    <p className="mb-2">Firm, delicious and nutritious</p>
                    <span>$4.00</span>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
                <img className="h-full rounded mb-10 shadow" alt='' src={Image3} />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">
                        Tomatoes
                    </h2>
                    <p className="mb-2">Red in food, Red in everything...</p>
                    <span>$4.50 per bag</span>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
                <img className="h-full rounded mb-10 shadow" alt='' src={Image4} />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">
                        Kaduna
                    </h2>
                    <p className="mb-2">Center of Learning</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
                <img className="h-full rounded mb-10 shadow" alt='' src={Image2} />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">
                        Lagos
                    </h2>
                    <p className="mb-2">Center of Excellence</p>
                </div>
            </div>
        </>
    );
};

export default Content