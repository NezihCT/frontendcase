import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import DecoVideo from '../assets/images/deco_video.svg';
import Video from '../assets/images/video_screen.svg';

function JoinUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center">
        <div className="w-full py-8 px-8 md:w-1/2 space-y-4">
          <h2 className="text-7xl py-5 md:text-5xl font-bold">Why join us</h2>
          <ul className="space-y-3">
            <li className="flex items-center text-lg px-1">
              <FaCheckCircle className="text-green-500 mr-2" />
              <span>Est in sit pharetra magna adipiscing ornare aliquam.</span>
            </li>
            <li className="flex items-center  text-lg px-1">
              <FaCheckCircle className="text-green-500 mr-2" />
              <span>Tellus arcu sed consequat et velit ut et blandit.</span>
            </li>
            <li className="flex items-center  text-lg px-1">
              <FaCheckCircle className="text-green-500 mr-2" />
              <span>Ullamcorper ornare in et egestas dolor orci.</span>
            </li>
          </ul>
          <button className="border text-brownText border-brownText font-medium px-4 py-2 rounded-md hover:bg-transparent hover:border-brownText mt-6">Sign up now</button>
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0 relative">
          <img src={DecoVideo} alt='DecoVideo' className="w-full h-auto"/>
          <img src={Video} alt='video'  className="absolute inset-0 w-full h-full"/>
        </div>
      </div>
    </section>
  );
}

export default JoinUsSection;
