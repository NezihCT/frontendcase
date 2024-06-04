import React from 'react';
import { FaTrophy, FaLeaf, FaAppleAlt } from 'react-icons/fa';

function FeaturesSection() {
  return (
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
  );
}

export default FeaturesSection;
