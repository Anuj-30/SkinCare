import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import leftArrow from '../assets/svg/left-arrow.svg';
import rightArrow from '../assets/svg/right-arrow.svg';
import cart from '../assets/svg/cart.svg'

const products = [
{ name: 'THE BODY LOTION', price: 'FROM $17.99', image: product3 },
  { name: 'ALVK SKIN CLEANSER', price: 'FROM $12.99', image: product1 },
   { name: 'RITUAL OF SAKURA', price: 'FROM $20.00', image: product2 },
 
  
];

const Product = () => {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width >= 1024) setVisibleCount(3);
      else setVisibleCount(1);
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const getTranslateX = () => {
    if (visibleCount === 3) return 0; // no transform needed on desktop
    return `-${index * 100}%`;
  };

  return (
    <section className="product-section bg-[#FEFFF4] px-4 py-10 font-sans">
      {/* Header Row */}
       <motion.div
        className=""
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
      <div className="flex items-center  justify-between mb-18 ">
        <button className="border px-4 py-1 rounded-full flex items-center gap-2 text-sm text-[#2D3B36]">
          <span className="w-2 h-2 bg-[#2D3B36] rounded-full"></span>
          Best Selling Products
        </button>

        {/* Arrows */}
        <div className="arrows flex gap-4 relative md:top-161 top-145 right-39 lg:top-0 lg:right-0 md:right-86 z-2">
          <div
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-black flex items-center justify-center cursor-pointer bg-white"
          >
            <img src={leftArrow} alt="left" className="w-4" />
          </div>
          <div
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-[#2D3B36] flex items-center justify-center cursor-pointer"
          >
            <img src={rightArrow} alt="right" className="w-4 " />
          </div>
        </div>
      </div>
</motion.div>
      {/* Heading */}
        <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
     <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-35l xl:text-4xl relative
     lg:bottom-27 md:bottom-13 bottom-10
               w-full max-w-[90%] md:max-w-[80%] mx-auto 
               font-semibold text-center mt-10 text-[#2D3B36]">
  Skincare That Brings Out <br className="md:hidden" /> Your Natural Radiance
</h2>
</motion.h2>

      {/* Carousel */}
        <motion.div
        className="relative w-full overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(${getTranslateX()})`,
            width: visibleCount === 3 ? '100%' : `${products.length * 100}%`,
          }}
        >
          {products.map((item, i) => (
            <div
              key={i}
              className={`${
                visibleCount === 3 ? 'w-1/3' : 'w-full'
              } px-3 flex-shrink-0`}
            >
 <div className=" z-1 relative  rounded-xl -mt-30  h-full lg:ml-0 sm:ml-0 md:-mt-4 md:ml-38 ">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full max-w-[360px] lg:max-w-[650px] sm:max-w-[360px]  sm:h-[600px] h-[500px] lg:w-full lg:h-[420px] md:max-w-[400px] md:w-[1000px] md:h-[450px] 
                  sm:w-[1px] object-cover "
                  
                />
                <div className="flex justify-between items-center relative bottom-20 rounded-full bg-white lg:w-[90%] md:w-[16%] sm:w-[1%] w-[28%] ml-5 px-4 py-3">
                  <div>
                    <h4 className="text-[#2D3B36] font-semibold text-sm">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500">{item.price}</p>
                  </div>
                  <button className="bg-gray-200 p-2 ">
                   
                   <img src={cart}></img>
                   
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default Product;
