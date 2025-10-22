import React, { createContext, useContext, useState } from 'react';

const LikedContext = createContext();

export const LikedProvider = ({ children }) => {
    const [likedDestinations, setLikedDestinations] = useState([]);

    const toggleLike = (destination) => {
        setLikedDestinations(prev => {
            const isLiked = prev.some(item => item.id === destination.id);
            
            if (isLiked) {
                // Remove from liked
                return prev.filter(item => item.id !== destination.id);
            } else {
                // Add to liked
                return [...prev, destination];
            }
        });
    };

    const isLiked = (destinationId) => {
        return likedDestinations.some(item => item.id === destinationId);
    };

    return (
        <LikedContext.Provider value={{ 
            likedDestinations, 
            toggleLike, 
            isLiked,
            likedCount: likedDestinations.length 
        }}>
            {children}
        </LikedContext.Provider>
    );
};

export const useLiked = () => {
    const context = useContext(LikedContext);
    if (!context) {
        throw new Error('useLiked must be used within LikedProvider');
    }
    return context;
};