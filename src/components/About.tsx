import React from 'react';
import { motion } from 'framer-motion';
import { Award, BarChart, Clock, DropletIcon } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const features = [
    {
      icon: <Award className="w-10 h-10 text-[#006C35]" />,
      title: "Quality Certified",
      description: "All our products meet and exceed international quality standards."
    },
    {
      icon: <BarChart className="w-10 h-10 text-[#006C35]" />,
      title: "Industry Leaders",
      description: "Trusted by leading businesses across Saudi Arabia."
    },
    {
      icon: <Clock className="w-10 h-10 text-[#006C35]" />,
      title: "24/7 Support",
      description: "Our customer service team is available round the clock."
    },
    {
      icon: <DropletIcon className="w-10 h-10 text-[#006C35]" />,
      title: "Eco-Friendly",
      description: "Committed to sustainable production and environmentally safe products."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Yommi Detergent Factory</h2>
          <div className="w-20 h-1 bg-[#006C35] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Founded in Saudi Arabia, Yommi Detergent Factory has been a pioneer in manufacturing high-quality cleaning solutions since 2010. Our state-of-the-art facility combines advanced technology with traditional values to deliver products that meet the highest standards of cleanliness and efficiency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img 
              src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Yommi Factory" 
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              At Yommi, our mission is to provide superior cleaning solutions that enhance the quality of life for our customers while promoting sustainable practices. We are committed to innovation, quality, and customer satisfaction.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Made in Saudi Arabia</h3>
            <p className="text-gray-600">
              We take pride in being a 100% Saudi-owned and operated company. Our products are manufactured in the Kingdom of Saudi Arabia, contributing to the local economy and aligning with the Saudi Vision 2030 initiative for economic diversification and growth.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;