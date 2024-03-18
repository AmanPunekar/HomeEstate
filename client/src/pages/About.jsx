import React from "react";

export default function About() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-semibold text-center mb-8">
          About HomeEstate
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed mb-12">
          HomeEstate is dedicated to providing you with the best real estate
          solutions. Whether you're looking to buy, sell, or rent a property,
          we're here to make the process smooth and seamless for you. Our team
          of experienced real estate professionals is committed to helping you
          find your dream home or investment property.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <img src={"mission.avif"} alt="Mission" className="mb-4 rounded-lg" />
           
            <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              At HomeEstate, our mission is to simplify the real estate process
              for our clients. We strive to exceed expectations by providing
              personalized service, expert advice, and innovative solutions.
              Whether you're a first-time homebuyer or a seasoned investor,
              we're here to help you achieve your goals.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <img src={"team.avif"} alt="Team" className="mb-4 rounded-lg" />
        
            <h2 className="text-xl font-semibold mb-4">Our Team</h2>
            <p className="text-gray-700">
              Our team consists of passionate real estate professionals with
              years of experience in the industry. We are dedicated to staying
              ahead of market trends and leveraging our expertise to deliver
              exceptional results for our clients. When you work with
              HomeEstate, you can trust that you're in good hands.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
