
import React from 'react';
import { motion } from 'framer-motion';

const AboutDeveloper = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About the Developer
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A full-stack developer and UI/UX expert with expertise in C#, Python, Node.js, and React.
          Passionate about building modern, data-driven solutions for digital marketers and business owners.
        </motion.p>
        <div className="flex flex-wrap justify-center space-x-4">
          <span className="bg-primary px-4 py-2 rounded-full text-sm font-semibold">C#</span>
          <span className="bg-secondary px-4 py-2 rounded-full text-sm font-semibold">Python</span>
          <span className="bg-primary px-4 py-2 rounded-full text-sm font-semibold">Node.js</span>
          <span className="bg-secondary px-4 py-2 rounded-full text-sm font-semibold">React</span>
        </div>
      </div>
    </section>
  );
};

export default AboutDeveloper;