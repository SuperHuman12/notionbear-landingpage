'use client'

import { useState } from "react";


export default function Pricing() {

    const [activeTab, setActiveTab] = useState('Yearly');

    const handleTabClick = (tabName: string) => {
        setActiveTab(tabName);
    };

    return (
        <section className="bg-gradient-to-b from-gray-100 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                    {/* Page header */}
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 aos-init aos-animate">Pricing</h1>
                    </div>

                    {/* Form */}
                    <div className="max-w-3xl m-auto">

                        <div>
                            <div className="w-full text-center ltr:mr-4 rtl:ml-4 md:block mb-8">
                                <p className="mt-2 text-lg font-medium text-gray-400">Enjoy 2 months free with our annual plan.</p>
                            </div>
                            <div className="justify-center mb-4 w-100 my-5"><div className="w-100"></div></div>
                            <div dir="ltr" data-orientation="horizontal" className="mt-8 mb-8 w-1/2 lg:mb-13 border rounded-full m-auto border-gray-600">
                            <div role="tablist" aria-orientation="horizontal" className="relative flex w-full rounded-full bg-gray-100 font-semibold z-0 border-1 border-gray-600" data-orientation="horizontal">
                                <span className={`absolute inset-y-0 left-0 -z-10 rounded-full border-2 w-1/2 h-14 transition-transform duration-300 ease-in-out ${activeTab === 'Monthly' ? 'translate-x-full' : ''}`}></span>
                                <button
                                    className={`w-1/2 text-md h-14 flex items-center justify-center uppercase transition-colors duration-300 ease-in-out ${activeTab === 'Yearly' ? 'text-white bg-orange-600 rounded-full border-2 border-dark' : 'bg-transparent text-gray-900'}`}
                                    type="button"
                                    role="tab"
                                    aria-selected={activeTab === 'Yearly'}
                                    onClick={() => handleTabClick('Yearly')}
                                >
                                    Yearly<span className="relative -top-0.5 rounded-full bg-white p-1 text-xs font-normal text-gray-900 ml-4 px-3">-20%</span>
                                </button>
                                <button
                                    className={`w-1/2 text-md h-14 flex items-center justify-center uppercase transition-colors duration-300 ease-in-out ${activeTab === 'Monthly' ? 'text-white bg-orange-600 rounded-full border-2 border-dark' : 'bg-transparent text-gray-900'}`}
                                    type="button"
                                    role="tab"
                                    aria-selected={activeTab === 'Monthly'}
                                    onClick={() => handleTabClick('Monthly')}
                                >
                                    Monthly
                                </button>
                            </div>

                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Number of Users Every Month</label>
                                <select className="border-1 rounded mt-2 w-full p-4 font-bold h3" id="num-of-views">
                                    <option value="3000">3K Users</option>
                                    <option value="10000">10K Users</option>
                                    <option value="50000">50K Users</option>
                                    <option value="100000">100K Users</option>
                                    <option value="1000000">1 Million Users</option>
                                </select>
                            </div>
                            <div >
                                <article className="overflow-hidden rounded-lg border-2 pb-5 shadow-md">
                                {activeTab === 'Yearly' ? (
                                <>
                                    <div className="border-b-2 border-dashed px-7 py-6 md:pt-7">
                                    <h5 className="h2 flex gap-2">
                                        <span><div className="font-bold">$50</div></span><span className="relative text-3xl leading-8 text-neutral-500">/ Yearly</span>
                                    </h5>
                                    <div className="flex grow flex-col gap-2 md:flex-row md:items-end mt-6 mb-4">
                                        <button className="bg-gray-900 text-white w-full p-4 rounded-lg text-center">Upgrade</button>
                                    </div>
                                    <p className="text-md max-w-[482px] pt-6 text-gray-500 md:pt-4">Extend your workflows with round-robin and collective events and make advanced routing forms.</p>
                                    <ul className="flex gap-4">
                                            <div className="p-4">
                                                <li className="text-md flex items-start gap-2 leading-[32px] mb-2">
                                                    <figure className="min-w-6 flex min-h-[32px] items-center text-green-600 bg-gray-200 text-white rounded-full">
                                                        <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="#060419" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                    </figure>
                                                    <span>Unlimited articles &amp; collections</span>
                                                </li>
                                                <li className="text-md flex items-start gap-2 leading-[32px] mb-2">
                                                    <figure className="min-w-6 flex min-h-[32px] items-center text-green-600 bg-gray-200 text-white rounded-full">
                                                        <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="#060419" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                    </figure>
                                                    <span>Unlimited languages</span>
                                                </li>
                                                <li className="text-md flex items-start gap-2 leading-[32px] mb-2">
                                                    <figure className="min-w-6 flex min-h-[32px] items-center text-green-600 bg-gray-200 text-white rounded-full">
                                                        <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="#060419" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                    </figure>
                                                    <span>5 Help Centers</span>
                                                </li>
                                                <li className="text-md flex items-start gap-2 leading-[32px] mb-2">
                                                    <figure className="min-w-6 flex min-h-[32px] items-center text-green-600 bg-gray-200 text-white rounded-full">
                                                        <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="#060419" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                    </figure>
                                                    <span>Custom Domain / SSL</span>
                                                </li>
                                                <li className="text-md flex items-start gap-2 leading-[32px] mb-2">
                                                    <figure className="min-w-6 flex min-h-[32px] items-center text-green-600 bg-gray-200 text-white rounded-full">
                                                        <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="#060419" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                    </figure>
                                                    <span>Private Help Center</span>
                                                </li>
                                                <li className="text-md flex items-start gap-2 leading-[32px] mb-2">
                                                    <figure className="min-w-6 flex min-h-[32px] items-center text-green-600 bg-gray-200 text-white rounded-full">
                                                        <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="#060419" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                    </figure>
                                                    <span>Password Protection</span>
                                                </li>
                                                <li className="text-md flex items-start gap-2 leading-[32px] mb-2">
                                                    <figure className="min-w-6 flex min-h-[32px] items-center text-green-600 bg-gray-200 text-white rounded-full">
                                                        <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="#060419" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                    </figure>
                                                    <span>Guest Accounts</span>
                                                </li>
                                                <li className="text-md flex items-start gap-2 leading-[32px] mb-2">
                                                    <figure className="min-w-6 flex min-h-[32px] items-center text-green-600 bg-gray-200 text-white rounded-full">
                                                        <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="#060419" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                    </figure>
                                                    <span>Integrations</span>
                                                </li>
                                            </div>
                                            <div className="p-4">
                                                <li className="text-md flex items-start gap-2 leading-[32px] mb-2">
                                                    <figure className="min-w-6 flex min-h-[32px] items-center text-green-600 bg-gray-200 text-white rounded-full">
                                                        <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="#060419" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                    </figure>
                                                    <span>Advanced Customization</span>
                                                </li>
                                                <li className="text-md flex items-start gap-2 leading-[32px] mb-2">
                                                    <figure className="min-w-6 flex min-h-[32px] items-center text-green-600 bg-gray-200 text-white rounded-full">
                                                        <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="#060419" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                    </figure>
                                                    <span>Article Suggester</span>
                                                </li>
                                                <li className="text-md flex items-start gap-2 leading-[32px] mb-2">
                                                    <figure className="min-w-6 flex min-h-[32px] items-center text-green-600 bg-gray-200 text-white rounded-full">
                                                        <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="#060419" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                    </figure>
                                                    <span>Advanced Article Search</span>
                                                </li>
                                                <li className="text-md flex items-start gap-2 leading-[32px] mb-2">
                                                    <figure className="min-w-6 flex min-h-[32px] items-center text-green-600 bg-gray-200 text-white rounded-full">
                                                        <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="#060419" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                    </figure>
                                                    <span>Content Rating</span>
                                                </li>
                                                <li className="text-md flex items-start gap-2 leading-[32px] mb-2">
                                                    <figure className="min-w-6 flex min-h-[32px] items-center text-green-600 bg-gray-200 text-white rounded-full">
                                                        <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="#060419" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                    </figure>
                                                    <span>Auto Sync</span>
                                                </li>
                                                <li className="text-md flex items-start gap-2 leading-[32px] mb-2">
                                                    <figure className="min-w-6 flex min-h-[32px] items-center text-green-600 bg-gray-200 text-white rounded-full">
                                                        <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="#060419" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                    </figure>
                                                    <span>Remove 'Powered by' badge</span>
                                                </li>
                                                <li className="text-md flex items-start gap-2 leading-[32px] mb-2">
                                                    <figure className="min-w-6 flex min-h-[32px] items-center text-green-600 bg-gray-200 text-white rounded-full">
                                                        <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="#060419" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                    </figure>
                                                    <span>Report / Analytics</span>
                                                </li>
                                            </div>
                                    
                                    </ul>
                                    </div>
                                </>
                                ) : (
                                <>
                                    <div className="border-b-2 border-dashed px-7 py-6 md:pt-7">
                                    <h5 className="h2 flex gap-2">
                                        <span><div className="font-bold">$5</div></span><span className="relative text-3xl leading-8 text-neutral-500">/ Monthly</span>
                                    </h5>
                                    <div className="flex grow flex-col gap-2 md:flex-row md:items-end mt-6 mb-4">
                                        <button className="bg-gray-900 text-white w-full p-4 rounded-lg text-center">Upgrade</button>
                                    </div>
                                    <p className="text-md max-w-[482px] pt-6 text-gray-500 md:pt-4">Ideal for temporary projects with the flexibility of monthly planning.</p>
                                    <ul className="flex gap-4">
                                            <div className="p-4">
                                                <li className="text-md flex items-start gap-2 leading-[32px] mb-2">
                                                    <figure className="min-w-6 flex min-h-[32px] items-center text-green-600 bg-gray-200 text-white rounded-full">
                                                        <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="#060419" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                    </figure>
                                                    <span>Unlimited articles &amp; collections</span>
                                                </li>
                                                <li className="text-md flex items-start gap-2 leading-[32px] mb-2">
                                                    <figure className="min-w-6 flex min-h-[32px] items-center text-green-600 bg-gray-200 text-white rounded-full">
                                                        <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="#060419" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                    </figure>
                                                    <span>Unlimited languages</span>
                                                </li>
                                                <li className="text-md flex items-start gap-2 leading-[32px] mb-2">
                                                    <figure className="min-w-6 flex min-h-[32px] items-center text-green-600 bg-gray-200 text-white rounded-full">
                                                        <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="#060419" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                    </figure>
                                                    <span>5 Help Centers</span>
                                                </li>
                                                <li className="text-md flex items-start gap-2 leading-[32px] mb-2">
                                                    <figure className="min-w-6 flex min-h-[32px] items-center text-green-600 bg-gray-200 text-white rounded-full">
                                                        <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="#060419" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                    </figure>
                                                    <span>Custom Domain / SSL</span>
                                                </li>
                                                <li className="text-md flex items-start gap-2 leading-[32px] mb-2">
                                                    <figure className="min-w-6 flex min-h-[32px] items-center text-green-600 bg-gray-200 text-white rounded-full">
                                                        <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="#060419" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                    </figure>
                                                    <span>Private Help Center</span>
                                                </li>
                                                <li className="text-md flex items-start gap-2 leading-[32px] mb-2">
                                                    <figure className="min-w-6 flex min-h-[32px] items-center text-green-600 bg-gray-200 text-white rounded-full">
                                                        <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="#060419" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                    </figure>
                                                    <span>Password Protection</span>
                                                </li>
                                                <li className="text-md flex items-start gap-2 leading-[32px] mb-2">
                                                    <figure className="min-w-6 flex min-h-[32px] items-center text-green-600 bg-gray-200 text-white rounded-full">
                                                        <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="#060419" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                    </figure>
                                                    <span>Guest Accounts</span>
                                                </li>
                                                <li className="text-md flex items-start gap-2 leading-[32px] mb-2">
                                                    <figure className="min-w-6 flex min-h-[32px] items-center text-green-600 bg-gray-200 text-white rounded-full">
                                                        <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="#060419" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                    </figure>
                                                    <span>Integrations</span>
                                                </li>
                                            </div>
                                            <div className="p-4">
                                                <li className="text-md flex items-start gap-2 leading-[32px] mb-2">
                                                    <figure className="min-w-6 flex min-h-[32px] items-center text-green-600 bg-gray-200 text-white rounded-full">
                                                        <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="#060419" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                    </figure>
                                                    <span>Advanced Customization</span>
                                                </li>
                                                <li className="text-md flex items-start gap-2 leading-[32px] mb-2">
                                                    <figure className="min-w-6 flex min-h-[32px] items-center text-green-600 bg-gray-200 text-white rounded-full">
                                                        <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="#060419" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                    </figure>
                                                    <span>Article Suggester</span>
                                                </li>
                                                <li className="text-md flex items-start gap-2 leading-[32px] mb-2">
                                                    <figure className="min-w-6 flex min-h-[32px] items-center text-green-600 bg-gray-200 text-white rounded-full">
                                                        <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="#060419" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                    </figure>
                                                    <span>Advanced Article Search</span>
                                                </li>
                                                <li className="text-md flex items-start gap-2 leading-[32px] mb-2">
                                                    <figure className="min-w-6 flex min-h-[32px] items-center text-green-600 bg-gray-200 text-white rounded-full">
                                                        <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="#060419" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                    </figure>
                                                    <span>Content Rating</span>
                                                </li>
                                                <li className="text-md flex items-start gap-2 leading-[32px] mb-2">
                                                    <figure className="min-w-6 flex min-h-[32px] items-center text-green-600 bg-gray-200 text-white rounded-full">
                                                        <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="#060419" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                    </figure>
                                                    <span>Auto Sync</span>
                                                </li>
                                                <li className="text-md flex items-start gap-2 leading-[32px] mb-2">
                                                    <figure className="min-w-6 flex min-h-[32px] items-center text-green-600 bg-gray-200 text-white rounded-full">
                                                        <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="#060419" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                    </figure>
                                                    <span>Remove 'Powered by' badge</span>
                                                </li>
                                                <li className="text-md flex items-start gap-2 leading-[32px] mb-2">
                                                    <figure className="min-w-6 flex min-h-[32px] items-center text-green-600 bg-gray-200 text-white rounded-full">
                                                        <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="#060419" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                    </figure>
                                                    <span>Report / Analytics</span>
                                                </li>
                                            </div>
                                    
                                    </ul>
                                    </div>
                                </>
                                )}

                                   
                                    <div className="flex gap-3">
                                        <div className="mt-4 border-2 border-gray-200 p-4 shadow-lg rounded grid w-full mx-3">
                                            <div className="text-left w-full">
                                                <h6 className="opacity-75">NotionBear AI Pro</h6>
                                                <h3 className="h3 font-bold p-2 px-0 mb-4">$10 / Month</h3>
                                            </div>
                                            <div className="w-full m-auto"><a className="bg-gray-900 text-white px-4 w-full rounded-lg p-2">+ Add</a></div>
                                        </div>
                                        <div className="mt-4 border-2 border-gray-200 p-4 shadow-lg rounded grid w-full mx-3">
                                            <div className="text-left w-full">
                                                <h6 className="opacity-75">Remove Branding AddOn</h6>
                                                <h3 className="h3 font-bold p-2 px-0 mb-4">$40 / month</h3>
                                            </div>
                                            <div className="w-full m-auto" ><a className="bg-gray-900 text-white px-4 w-full rounded-lg p-2">+ Add</a></div>
                                        </div>
                                    </div>
                                    


                                    



                                    <section className="shadow-[var(--shadow-undefined)] p-8">
                                        <div className="layout-large variant-normal">
                                            <div className="flex flex-col items-center text-center">
                                                <header>
                                                    <div className="text-purple-500 flex items-center justify-center mb-4">
                                                        <span className="text-lg font-bold">Notion AI</span>
                                                        {/* Assuming there's an SVG or an icon component for the sparkles */}
                                                        <div className="ml-2">Now with Q&A</div>
                                                    </div>
                                                    <p className="font-bold">
                                                        Add to your workspace for $8 / member / month billed annually or $10 / member / month billed monthly.
                                                    </p>
                                                </header>
                                                <div className="mt-6">
                                                    <p className="font-semibold">Includes unlimited use of</p>
                                                    <ul className="list-disc">
                                                        <li className="text-purple-600"><strong>Q&A.</strong> Get instant answers to your questions.</li>
                                                        <li className="text-purple-600"><strong>Autofill.</strong> Pull insights from hundreds of pages at once.</li>
                                                        <li className="text-purple-600"><strong>Writer.</strong> Brainstorm new ideas and first drafts.</li>
                                                    </ul>
                                                </div>
                                                <div className="flex space-x-4 mt-4">
                                                    <a href="/signup" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">Get started</a>
                                                    <a href="/pricing#faq" className="text-blue-500 py-2 px-4 rounded hover:text-blue-600 transition-colors">Read AI FAQ</a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Image can be adjusted for responsiveness using Tailwind's breakpoints */}
                                        <picture className="mt-6">
                                            <source srcSet="/front-static/pages/pricing/ai-l.png" media="(min-width: 1280px)" />
                                            <source srcSet="/front-static/pages/pricing/ai-m.png" media="(min-width: 1080px)" />
                                            <source srcSet="/front-static/pages/pricing/ai-s.png" media="(min-width: 600px)" />
                                            <img src="/front-static/pages/pricing/ai-xs.png" alt="Notion AI Features" />
                                        </picture>
                                    </section>


                                </article>
                            </div>
                        </div>




                    </div>

                </div>
            </div>
        </section>
    )
}
