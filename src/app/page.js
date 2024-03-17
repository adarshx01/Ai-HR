'use client'
import React, { useState } from 'react';

const page = ({ title, onSubmit, fields, buttonText, isSignUp = false }) => {
  const [formData, setFormData] = useState({});
  const [activeForm, setActiveForm] = useState('signin'); // Initial state

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData); // Pass form data to parent component for handling
  };

  const handleSwitchForm = (formType) => {
    setActiveForm(formType);
    setFormData({}); // Clear form data on switch
  };

  // Adjust field types and labels based on active form
  const formFields = activeForm === 'signin'
    ? [
        { name: 'email', label: 'Email Address', type: 'email' },
        { name: 'password', label: 'Password', type: 'password' },
      ]
    : [
        { name: 'name', label: 'Full Name' },
        { name: 'email', label: 'Email Address', type: 'email' },
        { name: 'password', label: 'Password', type: 'password' },
        { name: 'confirmPassword', label: 'Confirm Password', type: 'password' },
      ];

  return (
    <div className="space-y-4 w-96">
      <h2 className="text-xl font-medium text-center">{title}</h2>
      <div className="flex justify-between mb-4">
        <button
          className={`py-2 px-4 text-sm font-medium rounded-md ${
            activeForm === 'signin' ? 'bg-blue-500 text-white' : 'text-gray-500 hover:text-blue-500'
          }`}
          onClick={() => handleSwitchForm('signin')}
        >
          Sign In
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium rounded-md ${
            activeForm === 'signup' ? 'bg-blue-500 text-white' : 'text-gray-500 hover:text-blue-500'
          }`}
          onClick={() => handleSwitchForm('signup')}
        >
          Sign Up
        </button>
      </div>
      <form className="space-y-4 first-line:" onSubmit={handleSubmit}>
        {formFields.map((field) => (
          <div key={field.name} className="flex flex-col">
            <label htmlFor={field.name} className="text-sm font-medium mb-2">
              {field.label}
            </label>
            <input
              type={field.type || 'text'}
              id={field.name}
              name={field.name}
              className="px-3 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={formData[field.name] || ''}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className={`py-2 px-4 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-700 ${
            isSignUp ? 'w-full' : ''
          }`}
        >
          {buttonText}
          </button>
      </form>
    </div>
  );
};

export default page;
