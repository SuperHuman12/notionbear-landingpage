"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import FeaturesBg from "@/public/images/features-bg.png";
import FeaturesElement from "@/public/images/features-element.png";
import helpdeskImage from "@/public/images/helpdesk.gif";
import blogImage from "@/public/images/blog.gif";
import marketplaceImage from "@/public/images/marketplace.gif";
import helpdeskrival1 from "@/public/images/simpler-helpdesk.png";
import helpdeskrival2 from "@/public/images/simpler-helpdesk2.png";
import blogrival1 from "@/public/images/simpler-blog.png";
import blogrival2 from "@/public/images/simpler-blog2.png";
import marketplacerival1 from "@/public/images/simpler-catalogue.png";
import marketplacerival2 from "@/public/images/simpler-catalogue2.png";
import Link from "next/link";

export default function Marketplace_Type() {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
    console.log("Marketplace_Type component mounted");
  }, []);

  useEffect(() => {
    console.log("Current tab:", tab);
  }, [tab]);

  return (
    <section
      id="featured-section"
      className="relative mt-4 mb-4 pb-4 bg-gray-900 rounded-4 border-gray-600"
      style={{
        background:
          "linear-gradient(45deg, rgb(255 236 225), rgb(255 222 205))",
      }}
    >
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">
              No matter how unique your marketplace concept is, BoringSites can support it.
              over.
            </h1>
            <p className="text-xl text-gray-600">
              BoringSites is designed for all types from content curation to
              content creation. Build company blogs, helpdesks, company wiki,
              documentations, and marketplaces.
            </p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              {/* Tabs buttons */}
              <div className="grid gap-4 mb-8 md:mb-0">
                <Link href="#"
                  className={`flex items-center text-lg p-5 rounded-2xl border transition duration-300 ease-in-out border border-dashed shadow-md border-gray-600 hover:shadow-lg text-gray-900 ${tab !== 1 ? "bg-gray-100" : "bg-orange-800 text-white"
                    }`}

                  onClick={(e) => {
                    e.preventDefault();
                    console.log("Tab 1 clicked");
                    setTab(1);
                  }}
                >
                  <div>
                    <div className="h4 font-bold leading-snug tracking-tight mb-1">
                      <span className="bg-clip-text ">API</span> Docs
                    </div>
                  </div>
                </Link>
                <Link href="#"
                  className={`flex items-center text-lg p-5 rounded-2xl border transition duration-300 ease-in-out border border-dashed shadow-md border-gray-600 hover:shadow-lg text-gray-900 ${tab !== 2 ? "bg-gray-100" : "bg-orange-800 text-white"
                    }`}

                  onClick={(e) => {
                    e.preventDefault();
                    console.log("Tab 2 clicked");
                    setTab(2);
                  }}
                >
                  <div>
                    <div className="h4 font-bold leading-snug tracking-tight mb-1">
                      <span className="bg-clip-text ">Technical</span> Docs
                    </div>
                  </div>
                </Link>

                <Link href="#"
                  className={`flex items-center text-lg p-5 rounded-2xl border transition duration-300 ease-in-out border border-dashed shadow-md border-gray-600 hover:shadow-lg text-gray-900 ${tab !== 3 ? "bg-gray-100" : "bg-orange-800 text-white"
                    }`}

                  onClick={(e) => {
                    e.preventDefault();
                    console.log("Tab 3 clicked");
                    setTab(3);
                  }}
                >
                  <div>
                    <div className="h4 font-bold leading-snug tracking-tight mb-1">
                      <span className="bg-clip-text ">User Manual</span> Docs
                    </div>
                  </div>
                </Link>

                <Link href="#"
                  className={`flex items-center text-lg p-5 rounded-2xl border transition duration-300 ease-in-out border border-dashed shadow-md border-gray-600 hover:shadow-lg text-gray-900 ${tab !== 4 ? "bg-gray-100" : "bg-orange-800 text-white"
                    }`}

                  onClick={(e) => {
                    e.preventDefault();
                    console.log("Tab 4 clicked");
                    setTab(4);
                  }}
                >
                  <div>
                    <div className="h4 font-bold leading-snug tracking-tight mb-1">
                      <span className="bg-clip-text ">Other</span> Docs
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 grid gap-4 mb-8 md:mb-0 md:order-1 m-auto w-full">
              <div className="transition-all">
                <div
                  className="relative flex flex-col text-center lg:text-right"
                  data-aos="zoom-y-out"
                  ref={tabs}
                >
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => {
                      console.log("Entering Tab 1");
                      heightFix();
                    }}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="md:max-w-none mx-auto rounded-2xl border border-2 border-gray-600 shadow-lg"
                        src={helpdeskImage}
                        unoptimized
                        width={500}
                        height={462}
                        alt="Features bg"
                      />
                      <div className="flex gap-2 justify-center mt-4 text-xl text-gray-900">
                        A simpler alternative to{" "}
                        <Image
                          alt="Ana"
                          width={120}
                          height={120}
                          src={helpdeskrival1}
                          className="rounded-full w-auto h-8"
                          unoptimized
                        />{" "}
                        and{" "}
                        <Image
                          alt="Ana"
                          height={120}
                          width={120}
                          src={helpdeskrival2}
                          className="rounded-full w-auto h-8"
                          unoptimized
                        />
                      </div>
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => {
                      console.log("Entering Tab 2");
                      heightFix();
                    }}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="md:max-w-none mx-auto rounded-2xl border border-2 border-gray-600 shadow-lg"
                        src={blogImage}
                        unoptimized
                        width={500}
                        height="462"
                        alt="Features bg"
                      />
                      <div className="flex gap-2 justify-center mt-4 text-xl text-gray-900">
                        A simpler alternative to{" "}
                        <Image
                          alt="Ana"
                          src={blogrival1}
                          className="rounded-full w-auto h-8"
                          height={120}
                          width={120}
                          unoptimized

                        />{" "}
                        and{" "}
                        <Image
                          alt="Ana"
                          src={blogrival2}
                          className="rounded-full w-auto h-8"
                          width={120}
                          height={120}
                          unoptimized
                        />
                      </div>
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => {
                      console.log("Entering Tab 3");
                      heightFix();
                    }}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="md:max-w-none mx-auto rounded-2xl border border-2 border-gray-600 shadow-lg"
                        src={marketplaceImage}
                        width={500}
                        height={462}
                        unoptimized
                        alt="Features bg"
                      />
                      <div className="flex gap-2 justify-center mt-4 text-xl text-gray-900">
                        A simpler alternative to{" "}
                        <Image
                          alt="Ana"
                          src={marketplacerival1}
                          className="rounded-full w-auto h-8"
                          unoptimized
                          width={120}
                          height={120}
                        />{" "}
                        and{" "}
                        <Image
                          alt="Ana"
                          src={marketplacerival2}
                          className="rounded-full w-auto h-8"
                          height={120}
                          width={120}
                          unoptimized
                        />
                      </div>
                    </div>
                  </Transition>

                  <Transition
                    show={tab === 4}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => {
                      console.log("Entering Tab 4");
                      heightFix();
                    }}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="md:max-w-none mx-auto rounded-2xl border border-2 border-gray-600 shadow-lg"
                        src={"/path/to/your/fourth-tab-image.gif"} // Update this path
                        width={500}
                        height={462}
                        unoptimized
                        alt="Fourth tab gif"
                      />
                      <div className="flex gap-2 justify-center mt-4 text-xl text-gray-900">
                        A simpler alternative to{" "}
                        <Image
                          alt="Ana"
                          src={helpdeskrival1}
                          className="rounded-full w-auto h-8"
                          height={120}
                          width={120}
                          unoptimized
                        />{" "}
                        and{" "}
                        <Image
                          alt="Ana"
                          src={helpdeskrival1}
                          className="rounded-full w-auto h-8"
                          width={120}
                          height={120

                          }

                        />
                      </div>
                    </div>
                  </Transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
    </section>
  );
}
