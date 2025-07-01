import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-[#2D3B36] text-white px-6 md:px-16 py-24 overflow-hidden">
     

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col lg:flex-row md:flex-col justify-between w-full">
        {/* Left Section */}
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="text-4xl  ">
              Join The Skincare <br /> Community Now.
            </h3>
          </div>
          <div className="flex gap-18 md:gap-9 mt-4 mb-15  lg:mt-15 md:mt-0 text-sm text-gray-300">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>YouTube</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-10 md:text-left text-right">
          <div>
            <p className="text-xl text-gray-300">Get in Touch</p>
            <h3 className="md:text-4xl md:ml-0 text-[2.7rem] -ml-3">contact.skincare.com</h3>
          </div>
          <div className="flex gap-10 md:gap-6 text-sm mt-1 mb-1 lg:mt-19 lg-mb-15 md:mb-0 lg:justify-end md:mt-8 md:justify-start text-gray-300 ">
            <span>Terms Of Service</span>
            <span>Privacy Policy</span>
            <span>Cookies Policy</span>
          </div>
        </div>
      </div>
       {/* SKINCARE Background Text */}
      <h1 className="absolute -bottom-4 left-0 text-[4.6rem] lg:text-[14rem] lg:-bottom-16 md:-bottom-12 md:text-[8rem] font-extrabold text-white opacity-[0.05] leading-none select-none pointer-events-none tracking-wider z-0">
        SKINCARE
      </h1>
    </footer>
  );
};

export default Footer;
