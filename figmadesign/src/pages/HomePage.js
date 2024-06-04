import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BestSection from '../components/BestSection';
import CustomerComments from '../components/CustomerComments';
import GrowYourCollection from '../components/GrowYourCollection';
import WorldMap from '../components/WorldMap';
import JoinUsSection from '../components/JoinUsSection';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <BestSection />
      <JoinUsSection />
      <CustomerComments />
      <GrowYourCollection />
      <WorldMap />
      <Footer />
    </div>
  );
}

export default HomePage;
