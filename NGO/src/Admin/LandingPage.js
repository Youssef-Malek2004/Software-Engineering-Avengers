import React from 'react';
import backgroundImage from '../shared/assets/background2.png';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{backgroundImage:`url(${backgroundImage})`}}>
      <div className="max-w-3xl mx-auto px-8">
        <header className="flex justify-between items-center px-10">
          <h1 className="text-4xl font-bold text-black">Logo</h1>
          <button className="btn bg-white text-purple-800 hover:bg-purple-800 hover:text-white">Login</button>
        </header>
        <main className="text-orange mt-10">
          <h2 className="text-4xl mb-8">BrightHorizon</h2>
          <p className="text-center mb-10">Welcome to BrightHorizon, where we are dedicated to making a positive impact in the world. Our mission is to promote peace, prosperity, and equality, empowering communities, and fostering sustainable change. With a focus on education and healthcare, we strive to create a brighter future for all. Through innovative programs and strategic partnerships, we aim to uplift marginalized communities and advocate for social justice. Join us in our journey towards a more equitable and compassionate world.</p>
          <div className="flex justify-end">
            <button className="btn bg-white text-purple-800 hover:bg-purple-800 hover:text-white py-2 px-6 rounded-full font-semibold text-lg">Join Us</button>
          </div>
        </main>
        <footer className="mt-12 text-center text-gray-600">
          &copy; {new Date().getFullYear()} BrightHorizon. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
