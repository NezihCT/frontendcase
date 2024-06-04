import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function BestSection() {
  return (
    <section className="py-20" style={{ background: '#0F172A'}}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl text-white font-bold">The best of the best</h2>
          <button className="border border-white bg-transparent text-white font-bold py-3 px-8 rounded-md mt-4 md:mt-0">Sign up now</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array(3).fill().map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
              <img src={require(`../assets/images/card_picture_${index + 1}.svg`)} alt="Sneaker" className="mb-4 w-full rounded-lg" />
              <h3 className="text-2xl font-semibold mb-2">Title</h3>
              <p className="text-gray-600 mb-4 flex-grow">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <button className="bg-blue-900 text-white py-2 px-4 rounded-lg border border-white shadow-lg w-full flex items-center justify-center">
                <FaShoppingCart className="mr-2" /> Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestSection;
