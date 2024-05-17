"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import notionfooterImage from "@/public/images/freedesigner.png";
import MigrateFrom from "@/public/images/migratefrom.png";
import Testimonials from "@/components/testimonials";
import Rating from "../compare-against/Rating";

const pricingMap: Record<number, number> = {
  3000: 5,
  10000: 15,
  50000: 30,
  100000: 50,
  1000000: 100,
};

interface Feature {
  name: string;
  popup?: {
    image: string;
    headline: string;
    description: string;
  };
}

const features: Feature[] = [
  { name: "Unlimited articles & collections", popup: { image: "/path/to/image1.png", headline: "Unlimited Articles", description: "Create unlimited articles and collections effortlessly." } },
  { name: "Unlimited languages" },
  { name: "5 NotionBear Sites", popup: { image: "/path/to/image2.png", headline: "Multiple Sites", description: "Manage up to 5 different NotionBear sites." } },
  { name: "Custom Domain / SSL" },
  { name: "Paywall Integration", popup: { image: "/path/to/image3.png", headline: "Paywall Integration", description: "Integrate paywall seamlessly with your content." } },
  { name: "Password Protection" },
  { name: "SEO Ready", popup: { image: "/path/to/image4.png", headline: "SEO Ready", description: "Optimize your content for search engines with built-in SEO tools." } },
  { name: "Integrations" },
  { name: "Advanced Customization" },
  { name: "Article Suggester" },
  { name: "Advanced Article Search" },
  { name: "Content Rating" },
  { name: "Auto Sync" },
  { name: "Remove 'Powered by' badge" },
  { name: "Detailed Analytics" },
];


export default function Pricing() {
  const [activeTab, setActiveTab] = useState<"Monthly" | "Yearly">("Yearly");
  const [selectedUsers, setSelectedUsers] = useState<keyof typeof pricingMap>(3000);
  const [monthlyPrice, setMonthlyPrice] = useState(pricingMap[selectedUsers]);
  const [yearlyPrice, setYearlyPrice] = useState(monthlyPrice * 10);
  const [popupFeature, setPopupFeature] = useState<Feature | null>(null);

  useEffect(() => {
    const newMonthlyPrice = pricingMap[selectedUsers];
    setMonthlyPrice(newMonthlyPrice);
    setYearlyPrice(newMonthlyPrice * 10);
  }, [selectedUsers]);

  const handleTabClick = (tabName: "Monthly" | "Yearly") => {
    setActiveTab(tabName);
  };

  const handleUserChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUsers(Number(event.target.value) as keyof typeof pricingMap);
  };



  const handleFeatureClick = (feature: Feature) => {
    setPopupFeature(feature);
  };
  
  const closePopup = () => {
    setPopupFeature(null);
  };
  


  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div
        className="absolute bottom-0 pointer-events-none z-1 h-screen w-screen"
        aria-hidden="true"
        style={{ width: "-webkit-fill-available", opacity: 0.1 }}
      >
        <svg className=" h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-pattern"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
              x="50%"
              y="100%"
              patternTransform="translate(0 -1)"
            >
              <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)"></rect>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-18 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 aos-init aos-animate">
              Try NotionBear free for{" "}
              <span className="gradient-border-accent"> 7 days</span>
            </h1>
          </div>

          {/* Form */}
          <div className="max-w-3xl m-auto">
            <div>
              <div className="w-full text-center ltr:mr-4 rtl:ml-4 md:block mb-8">
                <p className="mt-2 text-lg font-medium text-gray-400">
                  Join 50+ happy customers who set up fully functional
                  marketplaces, helpdesk and blogs in hours not days --- All
                  powered by Notion.
                </p>
              </div>
              <div className="justify-center mb-4 w-100 my-5">
                <div className="w-100"></div>
              </div>

              <div className="relative bg-gray-900 rounded py-6 px-4 md:py-8 md:px-12 shadow-2xl overflow-hidden">
                {/* Background illustration */}
                <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block">
                  <Image
                    alt="Logo"
                    width={220}
                    className="block"
                    src={notionfooterImage}
                  />
                </div>

                <div className="relative flex flex-col lg:flex-row justify-between items-center">
                  {/* CTA content */}
                  <div className="text-center lg:text-left lg:max-w-xl">
                    <h3 className="h3 text-white mb-2">
                      Get <b className="text-orange-600">Lifetime Deal</b> at
                      $137
                    </h3>

                    {/* CTA form */}
                    <form className="w-full lg:w-auto">
                      <div>
                        <a
                          className="btn bg-orange-600 hover:bg-orange-700 shadow"
                          href="https://buy.stripe.com/5kAeV0b6K27w8BG6os"
                        >
                          Get this Deal
                        </a>
                      </div>
                      {/* Success message */}
                      {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                      <p className="text-sm text-gray-400 mt-3">
                        Offer ends in 2 days, next plan $199.
                      </p>
                    </form>
                  </div>
                </div>
              </div>

              <div
                dir="ltr"
                data-orientation="horizontal"
                className="mt-8 mb-4 w-1/2 lg:mb-13 border rounded-full m-auto border-gray-600"
              >
                <div
                  role="tablist"
                  aria-orientation="horizontal"
                  className="relative flex w-full rounded-full bg-gray-100 font-semibold z-0 border-1 border-gray-600"
                  data-orientation="horizontal"
                >
                  <span
                    className={`absolute inset-y-0 left-0 -z-10 rounded-full border-2 w-1/2 h-14 transition-transform duration-300 ease-in-out ${
                      activeTab === "Monthly" ? "translate-x-full" : ""
                    }`}
                  ></span>
                  <button
                    className={`w-1/2 text-md h-14 flex items-center justify-center uppercase transition-colors duration-300 ease-in-out ${
                      activeTab === "Yearly"
                        ? "bg-orange-600 rounded-full border-2 border-dark"
                        : "bg-transparent text-gray-900"
                    }`}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === "Yearly"}
                    onClick={() => handleTabClick("Yearly")}
                  >
                    Yearly
                    <span className="relative -top-0.5 rounded-full bg-white p-1 text-xs font-normal text-gray-900 ml-4 px-3">
                      -20%
                    </span>
                  </button>
                  <button
                    className={`w-1/2 text-md h-14 flex items-center justify-center uppercase transition-colors duration-300 ease-in-out ${
                      activeTab === "Monthly"
                        ? "bg-orange-600 rounded-full border-2 border-dark"
                        : "bg-transparent text-gray-900"
                    }`}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === "Monthly"}
                    onClick={() => handleTabClick("Monthly")}
                  >
                    Monthly
                  </button>
                </div>

              </div>

              <div className="sm:block hidden text-xs opacity-50 font-medium justify-center text-center mb-4">
         Save 2 months on yearly 🎁
      </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Number of Users Every Month
                </label>
                <select
                  className="relative bg-white border-1 rounded mt-2 w-full p-4 font-bold h3"
                  id="num-of-views"
                  value={selectedUsers}
                  onChange={handleUserChange}
                >
                  <option value="3000">3K Users</option>
                  <option value="10000">10K Users</option>
                  <option value="50000">50K Users</option>
                  <option value="100000">100K Users</option>
                  <option value="1000000">1 Million Users</option>
                </select>
              </div>
              <div>
                <article className="overflow-hidden rounded-lg border-2 pb-5 shadow-md gradient-border-accent">
                  <div className="relative bg-white border-b-2 border-dashed px-7 py-6 md:pt-7">
                    <h5 className="h2 flex gap-2">
                      <span>
                        <div className="font-bold">
                          {activeTab === "Yearly" ? `$${yearlyPrice}` : `$${monthlyPrice}`}
                        </div>
                      </span>
                      <span
                        className="relative text-3xl leading-8 text-neutral-500 m-auto"
                        style={{ marginLeft: "0" }}
                      >
                        / {activeTab}
                      </span>
                    </h5>
                    <div className="flex grow flex-col gap-2 md:flex-row md:items-end mt-6 mb-4">
                      <button className="bg-orange-700 text-white w-full p-4 rounded-lg text-center">
                        Get Started
                      </button>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white">
                      <div className="p-6 md:px-10 md:py-4 justify-center bg-gray-200">
                        <div className="relative flex items-center">
                          <div className="flex h-5 items-center">
                            <input
                              type="checkbox"
                              id="addon"
                              checked
                              name="addon"
                              className="h-5 w-5 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                              aria-label="Sub-marketplace blogs addon"
                            />
                          </div>
                          <div className="ml-3 text-base">
                            <label className="font-normal text-gray-900">
                              <span>Including </span>
                              <span className="mr-3 inline-flex items-center rounded-md bg-gray-900 px-2.5 py-0.5 text-sm font-medium uppercase text-white">
                                Free Design Services
                              </span>
                              <span>limited time only.</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-md max-w-[482px] pt-6 text-gray-500 md:pt-4">
                      Extend your workflows with round-robin and collective
                      events and make advanced routing forms.
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4  p-8">
                      {features.map((feature, index) => (
                        <li
                          key={index}
                          className={`text-md flex items-start gap-2 leading-[32px] mb-2 items-center ${feature.popup ? 'underline cursor-pointer' : ''}`}
                          onClick={() => feature.popup && handleFeatureClick(feature)}
                        >
                          <figure className="border bg-orange-700 p-2 px-4 rounded-full font-bold text-white">
                            ✓
                          </figure>
                          <span>{feature.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>

        {popupFeature && popupFeature.popup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
              <button onClick={closePopup} className="absolute top-2 right-2">
                Close
              </button>
              <Image src={popupFeature.popup.image} alt={popupFeature.popup.headline} width={300} height={200} />
              <h2 className="text-2xl font-bold mt-4">{popupFeature.popup.headline}</h2>
              <p className="mt-2">{popupFeature.popup.description}</p>
            </div>
          </div>
        )}

        <div className="max-w-5xl px-4 py-8 mx-auto mt-10">
          <section className="p-8 rounded-lg bg-gray-100">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
              <div className="relative">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src="https://helpkit.so/_nuxt/image/bffbe5.webp"
                    width="800"
                    alt=""
                    loading="lazy"
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="absolute bottom-0 right-0 inline-flex px-4 py-2 -mb-5 -mr-4 bg-white rounded-lg shadow-xl">
                  <img
                    src="https://helpkit.so/_nuxt/image/73bb1e.webp"
                    width="400"
                    alt=""
                    loading="lazy"
                    className="w-20 rounded-lg"
                  />
                </div>
              </div>
              <blockquote className="sm:col-span-2">
                <p className="font-medium text-lg sm:text-xl">
                  "With NotionBear we literally went from 0 to fully functional
                  knowledge-base in 1 hour! The best thing about NotionBear is
                  it allows my non-technical co-founder to do 95% of the work
                  and manage our knowledge-base. We signed up because of how
                  beautiful and well-designed the product is!"
                </p>
                <div className="mt-5 flex space-x-0.5 justify-start text-yellow-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    ></path>
                  </svg>
                </div>
                <cite className="inline-flex items-center mt-8 not-italic">
                  <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                  <h3 className="text-sm text-gray-500 uppercase sm:ml-3">
                    <span className="sr-only">Testimonial from</span>{" "}
                    <strong>Dan Kelly</strong>, CEO at Adjust Square.
                  </h3>
                </cite>
              </blockquote>
            </div>
          </section>
        </div>

        <div className="bg-white w-4/5 mx-auto">
          <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center sm:max-w-2xl lg:mx-auto">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Frequently asked questions
              </h2>
              <p className="mx-auto mt-4 sm:w-8/12 text-cool-gray-500">
                You have questions? 🤔 We have the answers. Can’t find the
                answer you’re looking for? Reach out and ask
              </p>
            </div>
            <div className="mt-10 sm:mt-20">
              <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
                <div>
                  <dt className="inline-flex items-center justify-center font-semibold text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4 mr-1.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    What is NotionBear?
                  </dt>
                  <dd className="mt-3 text-gray-500">
                    NotionBear is the perfect tool for creating your knowledge
                    base in the shortest possible time. It is powered by the
                    best content management system in the world: Notion. You
                    write your help articles in Notion and NotionBear takes care
                    of the rest. It's as simple as that.
                  </dd>
                </div>
                <div>
                  <dt className="inline-flex items-center justify-center font-semibold text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4 mr-1.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Why do I need a knowledge base?
                  </dt>
                  <dd className="mt-3 text-gray-500">
                    Unless you have built a flawless product (
                    <i>congratulations</i> 🤩), your customers will always have
                    questions and they demand immediate help. A knowledge base
                    can provide all the information that users need in one
                    place. It can range from FAQs about your product/service,
                    common issues and their solutions, videos with tutorials on
                    how to do things and more.
                  </dd>
                </div>
                <div>
                  <dt className="inline-flex items-center justify-center font-semibold text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4 mr-1.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    How does the free 7 day trial work?
                  </dt>
                  <dd className="mt-3 text-gray-500">
                    NotionBear offers a 7 day free trial to help you explore. No
                    credit card required. There’s zero cost to get in the
                    product and set things up. Within the trial period you will
                    be able to use all available features. After the trial is
                    over, you can choose to subscribe to one of our offered
                    subscription plans.
                  </dd>
                </div>
                <div>
                  <dt className="inline-flex items-center justify-center font-semibold text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4 mr-1.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Is my data safe with NotionBear?
                  </dt>
                  <dd className="mt-3 text-gray-500">
                    NotionBear takes your privacy seriously and follows best
                    practices to ensure that the confidentiality of personal
                    information and customer data is protected and maintained.
                    We do not disclose or share your data with outside parties.
                    All your knowledge base content is hosted in your own Notion
                    workspace.
                  </dd>
                </div>
                <div>
                  <dt className="inline-flex items-center justify-center font-semibold text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4 mr-1.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Can I use every block type from Notion?
                  </dt>
                  <dd className="mt-3 text-gray-500">
                    NotionBear supports most blocks from Notion. There are just
                    a few complex block types such as calendars and databases
                    that we are working on to get rendered as well. You can see
                    our
                    <a
                      href="https://support.notionbear.com/Working-with-Notion-Docs/crG31kiLtd678d3PdJXvfj/Which-Notion-block-types-are-supported/2qK2E1KRvDMdsmHYi625Xd"
                      target="_blank"
                      className="font-medium underline"
                    >
                      {" "}
                      test suite here
                    </a>
                    .
                  </dd>
                </div>
                <div>
                  <dt className="inline-flex items-center justify-center font-semibold text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4 mr-1.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Who is behind NotionBear?
                  </dt>
                  <dd className="mt-3 text-gray-500">
                    NotionBear is an indie software company run by a human named
                    <a
                      href="https://twitter.com/absurdfounder"
                      target="_blank"
                      className="font-medium text-orange-500"
                    >
                      {" "}
                      Vaibhav
                    </a>
                    .
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="relative bg-gray-900 rounded py-6 px-4 md:py-8 md:px-12 shadow-2xl overflow-hidden">
          {/* Background illustration */}
          <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block">
            <Image
              alt="Logo"
              width={400}
              className="block"
              src={MigrateFrom}
            />
          </div>

          <div className="relative flex flex-col lg:flex-row justify-between items-center">
            {/* CTA content */}
            <div className="text-center lg:text-left lg:max-w-xl">
              <h3 className="h3 text-white mb-2">
                Planning to <b className="text-orange-600">migrate</b> to
                NotionBear from another platform?
              </h3>

              {/* CTA form */}
              <form className="w-full lg:w-auto">
                <div>
                  <a
                    className="btn bg-orange-600 hover:bg-orange-700 shadow"
                    href="#"
                  >
                    We can do it for you →
                  </a>
                </div>
                {/* Success message */}
                {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                <p className="text-sm text-gray-400 mt-3">Free of charge</p>
              </form>
            </div>
          </div>
        </div>

        <Rating />

        <Testimonials />
      </div>
    </section>
  );
}
