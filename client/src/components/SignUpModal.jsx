import React, { useState } from 'react';
import { XMarkIcon } from "@heroicons/react/24/outline";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

const SignUpModal = ({ onClose,onSwitch}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');

  const auth = getAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Signed up successfully!");
      onClose();
    } catch (err) {
      setError(err.message);
      toast.error("Please enter valid details");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-80 max-w-md relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-red-500">
          <XMarkIcon className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Sign Up</h2>
        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
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
              placeholder="Enter a password"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Confirm Password:</label>
            <input
              type="password"
              required
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full p-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Confirm password"
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Register
          </button>
          <p className="mt-4 text-sm text-center">
            Already have an account?{' '}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={onSwitch}
            >
              Log in
            </span>
          </p>


        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
