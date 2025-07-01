import React, { useState } from 'react';
import { motion } from 'framer-motion';
import productImg from '../assets/product2.png';
import headphone from '../assets/svg/headphone.png';

const faqs = [
  {
    question: 'Are your products safe for sensitive skin?',
    answer: 'Yes, all our products are dermatologically tested and formulated to be gentle, especially for sensitive skin types.',
  },
  {
    question: 'Are your products cruelty-free?',
    answer: 'Absolutely! We do not test on animals. Our entire skincare line is 100% cruelty-free.',
  },
  {
    question: "What's your return policy?",
    answer: 'You can return unused products within 30 days of purchase. Refunds are processed within 5–7 business days.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship globally. Shipping rates and times may vary depending on your location.',
  },
  {
    question: 'How do I choose the right product?',
    answer: 'Use our product quiz or reach out to our support team to find the perfect match for your skin type and concerns.',
  },
];

const Feedback = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="bg-[#FEFFF4] px-6 py-16 overflow-hidden">
      {/* Heading */}
      <motion.button
        className="border px-4 py-1 rounded-full flex items-center gap-2 text-sm text-[#2D3B36] mb-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <span className="w-2 h-2 bg-[#2D3B36] rounded-full"></span>
        Frequently Asked Question
      </motion.button>

      <div className="flex flex-col-reverse lg:flex-row gap-10 items-start">
        {/* Image Section */}
        <motion.div
          className="flex-1 w-full lg:w-1/2 relative mt-10 lg:mt-0 block sm:hidden lg:block"
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl overflow-hidden">
            <img
              src={productImg}
              alt="Product"
              className="w-[38rem] h-[30rem] object-cover"
            />
          </div>
          <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-md">
            <div className="bg-[#2D3B36] text-white p-1 rounded-full">
              <img src={headphone} alt="icon" className="w-4 h-4" />
            </div>
            24/7 We’re Here to Help You
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="flex-1 w-full md:w-full lg:w-1/2"
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2D3B36] mb-6 max-w-xl">
            Answers to Your <br className="hidden md:block" />
            Skincare Questions, All in One Place.
          </h2>

          <div className="space-y-3 w-full">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="border border-[#DADADA] rounded-lg bg-transparent overflow-hidden"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex justify-between items-center w-full text-left px-4 py-3 font-medium text-[#2D3B36]"
                >
                  <span>{faq.question}</span>
                  {openIndex === i ? (
                    <i className="ri-subtract-line text-xl"></i>
                  ) : (
                    <i className="ri-add-line text-xl"></i>
                  )}
                </button>
                {openIndex === i && faq.answer && (
                  <div className="px-4 pb-4 text-sm text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Feedback;
