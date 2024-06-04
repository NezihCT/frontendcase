import React, { useState } from 'react';
import '../styles/WorldMap.css';

const WorldMap = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

    const locations = [
        {
            id: 1,
            shoeImage: 'https://via.placeholder.com/200x150',
            comment: 'Amazing sneakers, very comfortable!',
            position: { top: '80%', left: '30%' }
        },
        {
            id: 2,
            shoeImage: 'https://via.placeholder.com/200x150',
            comment: 'Great style and quality!',
            position: { top: '40%', left: '50%' }
        },
        {
            id: 3,
            shoeImage: 'https://via.placeholder.com/200x150',
            comment: 'Loved the design and fit!',
            position: { top: '50%', left: '70%' }
        },
        {
            id: 4,
            shoeImage: 'https://via.placeholder.com/200x150',
            comment: 'Loved the design and fit!',
            position: { top: '45%', left: '15%' }
        },
    ];

    const handleLocationClick = (event, location) => {
        const rect = event.target.getBoundingClientRect();
        setTooltipPosition({
            top: rect.top + window.scrollY - 220, // Tooltip'in yukarıda görünmesi için -70 piksel
            left: rect.left + window.scrollX - 100,
        });
        setSelectedLocation(location);
    };

    const closeTooltip = () => {
        setSelectedLocation(null);
    };

    return (
        <div className="main py-12 bg-brownBg">
            <div className="container mx-auto px-6">
                <div className="relative">
                    <img
                        src={require('../assets/images/world_map.png')}
                        alt="World Map"
                        className="w-full h-auto"
                    />
                    {locations.map((location) => (
                        <div
                            key={location.id}
                            className="location-dot"
                            style={{ top: location.position.top, left: location.position.left }}
                            onClick={(event) => handleLocationClick(event, location)}
                        ></div>
                    ))}
                </div>
                {selectedLocation && (
                    <div
                        className="tooltip visible"
                        style={{ top: tooltipPosition.top, left: tooltipPosition.left }}
                        onClick={closeTooltip}
                    >
                        <h3 className="text-xl font-bold">{selectedLocation.name}</h3>
                        <img
                            src={selectedLocation.shoeImage}
                            alt="Shoe"
                            className="mx-auto mt-4 rounded-lg"
                        />
                        <p className="text-gray-600 mt-4 text-center">{selectedLocation.comment}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WorldMap;
