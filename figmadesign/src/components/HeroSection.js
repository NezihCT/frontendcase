import React from 'react';
import { FaTrophy, FaLeaf, FaAppleAlt, FaPlay } from 'react-icons/fa';
import HeadShoes from '../assets/images/head_shoes.svg';

function HeroSection() {
  return (
    <section className="relative bg-yellow-100 py-20" style={{ background: '#fffbec'}}>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-6">Collectible Sneakers</h1>
          <p className="text-lg mb-6">
            Sit eleifend augue eget integer accumsan turpis. Sed suspendisse nec lorem mauris.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="border text-brownText border-brownText font-medium px-4 py-2 rounded-md hover:bg-transparent hover:border-brownText">Sign up now</button>
            <button className="flex items-center font-medium space-x-2 border-none bg-transparent text-brownText py-2 px-4">
              <FaPlay />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <img src={HeadShoes} alt="Sneaker" className="mx-auto" />
        </div>
      </div>
      <section className="py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="space-y-4">
          <FaTrophy className="mx-auto text-4xl text-yellow-500" />
          <h3 className="text-2xl font-semibold">Nibh viverra</h3>
          <p className="text-gray-600">
            Sit bibendum donec dolor fames neque vulputate montes. Consequat turpis natoque leo, massa.
          </p>
        </div>
        <div className="space-y-4">
          <FaLeaf className="mx-auto text-4xl text-green-500" />
          <h3 className="text-2xl font-semibold">Cursus amet</h3>
          <p className="text-gray-600">
            Sit bibendum donec dolor fames neque vulputate montes. Consequat turpis natoque leo, massa.
          </p>
        </div>
        <div className="space-y-4">
          <FaAppleAlt className="mx-auto text-4xl text-red-500" />
          <h3 className="text-2xl font-semibold">Ipsum fermentum</h3>
          <p className="text-gray-600">
            Sit bibendum donec dolor fames neque vulputate montes. Consequat turpis natoque leo, massa.
          </p>
        </div>
      </div>
    </section>
    </section>
  );
}

export default HeroSection;
