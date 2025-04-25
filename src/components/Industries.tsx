import React from 'react';
import { motion } from 'framer-motion';
import IndustryCard from './IndustryCard';
import { industries } from '../data/industries';

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <div className="w-20 h-1 bg-[#006C35] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            From healthcare facilities to manufacturing plants, our specialized cleaning solutions are tailored to meet the unique requirements of various industries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;