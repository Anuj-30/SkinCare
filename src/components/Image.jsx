import React from 'react';
import { motion } from 'framer-motion';
import Model from '../assets/model.png'; // Replace with actual path

const Image = () => {
  return (
    <motion.div
      className="hidden bg-[#FEFFF4] lg:block relative rounded-2xl overflow-hidden w-full max-w-[1100px] mx-auto"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {/* Background image */}
      <img
        src={Model}
        alt="Hero"
        className="w-full h-[600px] object-cover rounded-2xl"
      />

      {/* Overlay content */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent flex flex-col items-center justify-end pb-20 text-white text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-4 leading-snug">
          Feel Beautiful Inside and Out <br /> with Every Product.
        </h2>
        <button className="mt-2 px-5 py-2 text-sm bg-white text-black rounded-full hover:bg-gray-100 transition">
          Shop Now
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Image;
