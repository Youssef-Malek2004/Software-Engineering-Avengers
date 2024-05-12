import React from "react";
import backgroundImage from "../shared/assets/background2.png";

const LandingPage = () => {
  const logoPic = "NGO-Logo-Small.png";

  return (
    <div
      className="min-h-screen bg-cover bg-center justify-center items-start flex flex-col"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-3xl px-8 my-auto justify-center items-center  ">
        <header className="flex justify-between items-left px-10  justify-left items-start   ">
          {/* <h1 className="text-4xl font-bold text-black">Logo</h1> */}
        </header>
        <main className="text-left text-orange">
          <h2 className="text-4xl mb-5 flex items-center font-bold text-pink-800">
            <img
              src={require(`../shared/assets/${logoPic}`)}
              style={{ maxWidth: "50px", maxHeight: "50px" }}
              alt={"BrightHorizon Logo"}
              className="max-w-full h-auto rounded-lg mr-4"
            />
            BrightHorizon
          </h2>

          <p className="text-left w-11/12 ">
            Welcome to BrightHorizon, where we are dedicated to making a
            positive impact in the world. Our mission is to promote peace,
            prosperity, and equality, empowering communities, and fostering
            sustainable change. With a focus on education and healthcare, we
            strive to create a brighter future for all. Through innovative
            programs and strategic partnerships, we aim to uplift marginalized
            communities and advocate for social justice. Join us in our journey
            towards a more equitable and compassionate world.
          </p>
          <div className="flex justify-end">
            <button className="btn bg-purple-600 hover:bg-white-500 text-white py-2 px-3  rounded-full font-semibold text-lg">
              Join Us
            </button>
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
