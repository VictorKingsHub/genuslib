"use client"
import { useState } from 'react';
// import Image from 'next/image';
import { HiUser, HiMail, HiPhone, HiLockClosed } from 'react-icons/hi';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  interface FormData {
    name: string;
    email: string;
    phone: string;
    password: string;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: FormData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl max-w-5xl w-full overflow-hidden">

        <div className="hidden md:flex flex-col items-center justify-center w-full md:w-1/2 p-10 bg-blue-600 relative">
          {/* Using a placeholder for the image. You can replace this with your own image. */}
          {/* <Image
            src="st.png"
            alt="Student studying on a laptop"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg"
          /> */}
        </div>

        {/* Right side: Signup form section. */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Student Signup</h2>
          <p className="mt-2 text-gray-600 text-center text-sm">
            Hey enter your details to create your account
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">

            {/* Name Input Field */}
            <div className="relative">
              <HiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email Input Field */}
            <div className="relative">
              <HiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Phone Input Field */}
            <div className="relative">
              <HiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="tel"
                name="phone"
                placeholder="Enter your Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password Input Field */}
            <div className="relative">
              <HiLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Create Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full py-3 mt-6 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Sign up
            </button>
          </form>

          {/* Social Login Options */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500 text-sm">Or Signup with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex space-x-4">
            <button className="flex-1 flex items-center justify-center p-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-300">
              <FaGoogle className="mr-2" /> Google
            </button>
            <button className="flex-1 flex items-center justify-center p-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-300">
              <FaFacebookF className="mr-2" /> Facebook
            </button>
          </div>

          {/* Login Link */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <a href="#" className="font-semibold text-blue-600 hover:underline">
              Sign in
            </a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default SignupPage;
