import React from 'react';
import ContactStories from '../../components/contactStories/ContactStories';
import HomeHeader from '../../components/homeHeader/HomeHeader';

const HomeScreen = () => {
    return (
        <div>
            <HomeHeader />
            <ContactStories />
        </div>
    );
};

export default HomeScreen;