import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';
import { FormValues } from '../types';

interface DemoFormProps {
  isModal?: boolean;
  onClose?: () => void;
}

const DemoForm: React.FC<DemoFormProps> = ({ isModal = false, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    setIsSubmitted(true);
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section 
      id="demo" 
      className={`${isModal ? 'p-6' : 'py-20 bg-gray-50'}`}
    >
      <div className={`${isModal ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        {isModal && (
          <div className="flex justify-end mb-2">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <X size={24} />
            </button>
          </div>
        )}

        {!isModal && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Book a Demo</h2>
            <div className="w-20 h-1 bg-[#006C35] mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Experience the Yommi difference with a personalized product demonstration. Fill out the form below, and our team will get in touch with you.
            </p>
          </motion.div>
        )}

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-[#006C35] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg 
                className="w-10 h-10 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
            <p className="text-gray-600 mb-6">
              Your demo request has been submitted successfully. One of our representatives will contact you within 24 hours to schedule your personalized demo.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-[#006C35] text-white px-6 py-2 rounded-md font-medium hover:bg-[#005a2d] transition-colors duration-200"
            >
              Request Another Demo
            </button>
          </motion.div>
        ) : (
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`bg-white p-8 rounded-lg shadow-md ${isModal ? '' : 'max-w-2xl mx-auto'}`}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name*
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#006C35] ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="John Doe"
                    {...register('name', {
                      required: 'Name is required',
                      minLength: {
                        value: 2,
                        message: 'Name must be at least 2 characters'
                      }
                    })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#006C35] ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="john@example.com"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name (Optional)
                  </label>
                  <input
                    id="company"
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#006C35]"
                    placeholder="Your Company"
                    {...register('company')}
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number*
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#006C35] ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="+966 XX XXX XXXX"
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^(\+|00)[0-9]{1,3}[0-9]{4,14}(?:x.+)?$/,
                        message: 'Please enter a valid phone number'
                      }
                    })}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date*
                  </label>
                  <input
                    id="date"
                    type="date"
                    className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#006C35] ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
                    {...register('date', {
                      required: 'Date is required'
                    })}
                  />
                  {errors.date && (
                    <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
                  )}
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#006C35] ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Tell us about your requirements..."
                    {...register('message', {
                      required: 'Message is required',
                      minLength: {
                        value: 10,
                        message: 'Message must be at least 10 characters'
                      }
                    })}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#006C35] text-white py-3 rounded-md font-medium hover:bg-[#005a2d] transition-colors duration-200 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : 'Book Your Demo'}
              </motion.button>
            </form>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default DemoForm;