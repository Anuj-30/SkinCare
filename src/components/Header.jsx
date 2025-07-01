import React from 'react';
import { motion } from 'framer-motion';
import Headerimg from '../assets/Header.png';
import Product from '../assets/header-product.png';
import bag from '../assets/svg/bag.svg';
import user from '../assets/svg/user.svg';
import leftheart from '../assets/svg/left-heart.svg';
import rightheart from '../assets/svg/right-heart.svg';
import grip from '../assets/svg/grip.svg';
import './Header.css';

const Header = () => {
  return (
    <header className="bg-[#EFF5E1] min-h-screen px-8 py-5 font-sans overflow-hidden relative">
      {/* Top Row */}
      <motion.div
        className="flex justify-between items-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-xl font-bold text-[#2D3B36] tracking-wide">SKINCARE</h1>

        <nav className="flex gap-18 text-sm hidden md:flex">
          <a href="#" className="hover:underline">All Products</a>
          <a href="#" className="hover:underline">Serum</a>
          <a href="#" className="hover:underline">Sunscreen</a>
          <a href="#" className="hover:underline">Bundle</a>
        </nav>

        <div className="flex items-center gap-4 text-lg">
          <div className='flex flex-col items-center justify-center w-10 h-10 rounded-full bg-[#FEFFF4]'>
            <img src={grip} alt='bag' />
            <img src={bag} alt='bag' />
          </div>
          <span className="text-sm mr-3.5 hidden lg:block">Cart (0)</span>
          <div className='flex items-center justify-center -space-x-0.5 w-10 h-10 rounded-full bg-[#FEFFF4]'>
            <img src={leftheart} alt='bag' />
            <img src={rightheart} alt='bag' />
          </div>
          <div className='flex items-center justify-center -space-x-0.5 w-10 h-10 rounded-full bg-[#FEFFF4]'>
            <img src={user} alt='user' />
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <div className="hero-grid flex flex-col gap-10 md:grid md:grid-cols-3 items-center relative z-10">

        {/* Left Text */}
        <motion.div
          className="left-text space-y-6 mb-52 order-2 md:order-none z-20"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-[14px] text-gray-600 leading-relaxed mb-34">
        <span>    Transform your skincare <br />
            routine with premium products that<br />
            restore, protect, and enhance your <br />
            natural glow every day.
         </span> </p>
          <button className="shop-btn px-6 py-2 bg-[#2D3B36] text-white text-sm rounded-md w-fit hover:bg-[#3f7562]">
            Shop Now
          </button>
        </motion.div>

        {/* Center Title + Image */}
        <motion.div
          className="text-center order-1 md:order-none z-30"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="title-text text-5xl text-[#2D3B36] font-bold leading-tight mb-6">
            <span className="desktop-title">GLOW<br />NATUR-<br />ALLY</span>
          </h2>

          <div className="girl-image relative inline-block z-20">
            <img src={Headerimg} alt="Avocado girl" className="rounded-xl w-[320px] object-cover" />
            <div className="absolute info flex bottom-4 left-1/2 -translate-x-1/2 bg-white text-[11px] px-4 py-2 rounded-full w-7xl shadow-md max-w-[260px]">
              <img src={Product} alt="product" className="rounded-full object-cover w-16 h-12" />
              While giving you an invigorating cleansing experience.
            </div>
          </div>
        </motion.div>

        {/* Right Product Image */}
        <motion.div
          className="product-img flex justify-center order-3 md:order-none z-10"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img src={Product} alt="Product" className="w-32 h-32 object-contain mb-80" />
        </motion.div>
      </div>

      {/* Giant Background Text */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="giant-bg absolute bottom-0 left-8 text-[17rem] -mb-15 font-extrabold text-[#2D3B36] leading-none tracking-tighter z-0"
      >
        SKINCARE
      </motion.h1>

      {/* Spacer */}
      <div className="ipad-spacer hidden md:block"></div>
    </header>
  );
};

export default Header;
