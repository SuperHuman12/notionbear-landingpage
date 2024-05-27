"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    querytype: '',
    firstName: '',
    lastName: '',
    phone: '',
    company: '',
    jobTitle: '',
    email: '',
    employeesRange: '',
    feedback: '',
    usage: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          querytype: '',
          firstName: '',
          lastName: '',
          phone: '',
          company: '',
          jobTitle: '',
          email: '',
          employeesRange: '',
          feedback: '',
          usage: '',
        });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const renderFormFields = () => {
    switch (formData.querytype) {
      case 'demo':
        return (
          <>
            <div className="field mb-4"><input className="block w-full px-4 py-2 border rounded-md" placeholder="First Name" type="text" name="firstName" value={formData.firstName} onChange={handleChange} /></div>
            <div className="field mb-4"><input className="block w-full px-4 py-2 border rounded-md" placeholder="Last Name" type="text" name="lastName" value={formData.lastName} onChange={handleChange} /></div>
            <div className="field mb-4"><input className="block w-full px-4 py-2 border rounded-md" placeholder="Phone (optional)" type="text" name="phone" value={formData.phone} onChange={handleChange} /></div>
            <div className="field mb-4"><input className="block w-full px-4 py-2 border rounded-md" placeholder="Company Name" type="text" name="company" value={formData.company} onChange={handleChange} /></div>
            <div className="field mb-4"><input className="block w-full px-4 py-2 border rounded-md" placeholder="Job Title (optional)" type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} /></div>
            <div className="field mb-4"><input className="block w-full px-4 py-2 border rounded-md" placeholder="E-mail" type="email" name="email" value={formData.email} onChange={handleChange} /></div>
            <div className="field mb-4">
              <select className="block w-full px-4 py-2 border rounded-md" name="employeesRange" value={formData.employeesRange} onChange={handleChange}>
                <option value="">Number of Employees</option>
                <option value="1-5">1-5</option>
                <option value="5-25">5-25</option>
                <option value="25-50">25-50</option>
                <option value="50-100">50-100</option>
                <option value="100-500">100-500</option>
                <option value="500-1000">500-1000</option>
                <option value="1000+">1000+</option>
              </select>
            </div>
            <div className="field mb-4">
              <label className="block mb-2">Type of Knowledge Base</label>
              <select className="block w-full px-4 py-2 border rounded-md" name="usage" value={formData.usage} onChange={handleChange}>
                <option value="both">External + Internal Knowledge Base</option>
                <option value="external">Only External</option>
                <option value="internal">Only Internal</option>
              </select>
            </div>
          </>
        );
      case 'freedesign':
        return (
          <>
            <div className="field mb-4"><input className="block w-full px-4 py-2 border rounded-md" placeholder="First Name" type="text" name="firstName" value={formData.firstName} onChange={handleChange} /></div>
            <div className="field mb-4"><input className="block w-full px-4 py-2 border rounded-md" placeholder="Last Name" type="text" name="lastName" value={formData.lastName} onChange={handleChange} /></div>
            <div className="field mb-4"><input className="block w-full px-4 py-2 border rounded-md" placeholder="E-mail" type="email" name="email" value={formData.email} onChange={handleChange} /></div>
          </>
        );
      case 'feedbackbugs':
        return (
          <>
            <div className="field mb-4"><input className="block w-full px-4 py-2 border rounded-md" placeholder="First Name" type="text" name="firstName" value={formData.firstName} onChange={handleChange} /></div>
            <div className="field mb-4"><input className="block w-full px-4 py-2 border rounded-md" placeholder="Last Name" type="text" name="lastName" value={formData.lastName} onChange={handleChange} /></div>
            <div className="field mb-4"><input className="block w-full px-4 py-2 border rounded-md" placeholder="E-mail" type="email" name="email" value={formData.email} onChange={handleChange} /></div>
            <div className="field mb-4"><textarea className="block w-full px-4 py-2 border rounded-md" placeholder="Describe the issue or feedback" name="feedback" value={formData.feedback} onChange={handleChange}></textarea></div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="card create-demo mt-24">
      <div className="justify-center mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start max-w-6xl border bg-gray-100 rounded-2xl p-8 mb-12">
        <div className="w-full p-4 h-full px-12">
          <h3 className="text-center text-2xl font-semibold mt-12 mb-12">Request a Demo</h3>
          <div className="flex justify-center my-4">
            <img alt="VP of Success" className="rounded-full w-48 h-48 object-cover" src="https://dazzling-cat.netlify.app/image 1469.png" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold">VP of Success</h3>
            <a href="mailto:success@notionbear.com" className="text-orange-500 block">success@notionbear.com</a>
          </div>
          <p className="text-center mt-4">Please complete this form, and VP of Success will be in touch with you shortly.</p>
          <div className="awards mt-4 flex justify-around">
            <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
              <img alt="Award" className="w-16 h-16" src="https://static.helpjuice.com/assets/marketing/awards/market-leader-logo-4775cba81746241703878cdbc60141ce04eb129a391a30be47fe5a777ce52075.png" />
            </a>
            <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
              <img alt="Award" className="w-16 h-16" src="https://static.helpjuice.com/assets/marketing/awards/market-leader-logo-4775cba81746241703878cdbc60141ce04eb129a391a30be47fe5a777ce52075.png" />
            </a>
            <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
              <img alt="Award" className="w-16 h-16" src="https://static.helpjuice.com/assets/marketing/awards/market-leader-logo-4775cba81746241703878cdbc60141ce04eb129a391a30be47fe5a777ce52075.png" />
            </a>
            <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
              <img alt="Award" className="w-16 h-16" src="https://static.helpjuice.com/assets/marketing/awards/market-leader-logo-4775cba81746241703878cdbc60141ce04eb129a391a30be47fe5a777ce52075.png" />
            </a>
          </div>
        </div>
        <div className="w-full border p-4 px-12 rounded-2xl shadow-lg bg-white">
          <h3 className="text-center text-2xl font-semibold mt-12 mb-12">Tell us a bit about yourself</h3>
          <form className="new_demo mt-4" onSubmit={handleSubmit}>
            <div className="field mb-4">
              <label className="block mb-2">I am reaching out for..</label>
              <select className="block w-full px-4 py-2 border rounded-md" name="querytype" value={formData.querytype} onChange={handleChange}>
                <option value="">Select an option</option>
                <option value="demo">Demo Walkthrough</option>
                <option value="freedesign">My Free Design Work</option>
                <option value="feedbackbugs">Feedback and Bugs</option>
              </select>
            </div>
            {renderFormFields()}
            <button type="submit" className="w-full px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600">Submit</button>
          </form>
          <div className="contact-us mt-4 text-center">
            <span className="block">+1 (833) 387 3877</span>
            <a href="mailto:support@notionbear.com" className="text-orange-500 block">support@notionbear.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
