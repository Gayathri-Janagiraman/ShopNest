import React, { useState } from 'react';
import { XMarkIcon } from "@heroicons/react/24/outline";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginModal = ({ onClose,onSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully!");
      onClose();
      navigate("/landing");
    } catch (error) {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-80 max-w-md relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-red-500">
          <XMarkIcon className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Sign In</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Email:</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="example@gmail.com"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Password:</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Log In
          </button>
          <p className="mt-4 text-sm text-center">
            Don’t have an account?{' '}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={onSwitch}
            >
              Sign up
            </span>
          </p>

        </form>
      </div>
    </div>
  );
};

export default LoginModal;
