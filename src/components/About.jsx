import React from 'react';
import { motion } from 'framer-motion';
import GirlImg from '../assets/girl-patch.png';
import award from '../assets/svg/award.svg';

const About = () => {
  return (
    <section className="about-wrapper bg-[#FEFFF4] py-16 px-6 sm:px-10 md:px-16 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-20">
        {/* Text Section */}
        <motion.div
          className="text-left space-y-8"
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <button className="px-4 py-1 border border-[#2D3B36] rounded-full text-sm text-[#2D3B36] flex items-center gap-2">
            <span className="w-2 h-2 bg-[#2D3B36] rounded-full"></span>
            Why Our Products
          </button>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D3B36] leading-snug">
            YOUR SKIN DESERVES<br />THE BEST CARE.
          </h2>

          <p className="text-sm md:text-base text-gray-600 md:max-w-xl">
            Discover a curated collection of skincare products designed to rejuvenate,
            protect, and pamper your skin. Treat your regime crafted with love-based
            bio elements, and minimal impact.
          </p>

          <div className="space-y-10">
            {[{
              number: '01',
              title: 'Bio Ingredients',
              desc: 'Get naturally beautiful and radiant skin with our safe ingredients sourced from nature, backed by science.',
            }, {
              number: '02',
              title: 'Everything Natural',
              desc: 'Pure ingredients for pure skin. The perfect solution for your skin care needs.',
            }, {
              number: '03',
              title: 'All Handmade',
              desc: 'Made with love and care. Just for you. Give your skin the tender loving care it deserves.',
            }].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex gap-6 md:gap-8 items-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.2, ease: 'easeOut' }}
              >
                <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#2D3B36] to-[#FEFFF4] min-w-[3rem]">
                  {item.number}
                </h3>
                <div className="flex-1">
                  <h4 className="text-[#2D3B36] text-2xl md:text-3xl mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm md:text-base">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative flex justify-center items-left"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <img
            src={GirlImg}
            alt="Girl with eye patch"
            className="rounded-2xl object-cover w-full max-w-sm md:max-w-md lg:max-w-lg"
          />

          {/* Award Label */}
          <motion.div
            className="absolute bottom-15 left-1/2 -translate-x-1/2 bg-white text-[#2D3B36] md:w-auto w-70 text-sm px-6 py-5 rounded-full shadow-md flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
          >
            <div className="w-14 h-10 rounded-full bg-[#2D3B36] flex items-center justify-center">
              <img src={award} className="w-8" alt="award" />
            </div>
            Best Skin-Care Product<br className="block md:hidden" /> Award Winning
          </motion.div>

          {/* Bottom Row Text */}
          <motion.div
            className="absolute -bottom-8 w-10/12 flex justify-between text-xs text-gray-500 px-2 pt-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <span>SINCE 2001</span>
            <span className="underline">LEARN MORE</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
