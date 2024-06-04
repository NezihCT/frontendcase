import React from 'react';
import waves from '../assets/images/waves.svg';
import '../styles/GrowYourCollection.css';

const GrowYourCollection = () => {

    return (
        <div className="waves-container py-12 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center text-black mb-12">
                    <h2 className="text-3xl font-bold">Grow your collection</h2>
                    <p className="mt-4">
                        Enim neque massa porta adipiscing sit. Sit enim libero id faucibus nibh amet dictum pellentesque sed.
                        Eu dui non turpis risus odio sapien, fames sit rhoncus. Nec magna sed interdum sit purus tellus.
                        Et volutpat pretium neque placerat ac bibendum quam tellus.
                    </p>
                </div>
            </div>
            <div class=" absolute bottom-0 left-0 w-full overflow-hidden">
               <img src={waves} className='w-full h-full' alt='Waves'/>
            </div>
        </div>

    );
};

export default GrowYourCollection;
