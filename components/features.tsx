"use client";

import React, { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image, { StaticImageData } from "next/image";
import { ArrowRight, HelpCircle, BookOpen, ShoppingBag, FileText, LucideIcon } from "lucide-react";

import helpdeskImage from "@/public/images/helpdesk.gif";
import marketplaceImage from "@/public/images/marketplace.gif";

interface TabButtonProps {
  tabIndex: number;
  icon: LucideIcon;
  text: string;
  currentTab: number;
  setTab: (index: number) => void;
}

const TabButton: React.FC<TabButtonProps> = ({ tabIndex, icon: Icon, text, currentTab, setTab }) => (
  <button
    className={`group flex items-center justify-between text-lg p-5 rounded-full border transition duration-300 ease-in-out border border-dashed shadow-md border-gray-600 hover:shadow-lg text-gray-900 ${
      currentTab !== tabIndex ? "bg-gray-100" : "bg-orange-800 text-white"
    }`}
    onClick={() => setTab(tabIndex)}
  >
    <div className="flex items-center">
      <Icon className="w-6 h-6 mr-2" />
      <div className="h4 font-bold leading-snug tracking-tight mb-1">
        Notion to <span className="bg-clip-text">{text}</span>
      </div>
    </div>
    <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </button>
);

interface TabContentProps {
  show: boolean;
  image: string | StaticImageData;
  alt1: string;
  alt2: string;
}

const TabContent: React.FC<TabContentProps> = ({ show, image, alt1, alt2 }) => (
  <Transition
    show={show}
    appear={true}
    className="w-full"
    enter="transition ease-in-out duration-700 transform order-first"
    enterFrom="opacity-0 translate-y-16"
    enterTo="opacity-100 translate-y-0"
    leave="transition ease-in-out duration-300 transform absolute"
    leaveFrom="opacity-100 translate-y-0"
    leaveTo="opacity-0 -translate-y-16"
    unmount={false}
  >
    <div className="relative inline-flex flex-col">
      <Image
        className="md:max-w-none mx-auto rounded-2xl border border-2 border-gray-600 shadow-lg"
        src={image}
        unoptimized
        width={500}
        height={462}
        alt="Features bg"
      />
      <div className="flex gap-2 justify-center mt-4 text-xl text-gray-900">
        A simpler alternative to{" "}
        <Image
          alt="Alternative 1"
          width={120}
          height={120}
          src={alt1}
          className="rounded-full w-auto h-8"
          unoptimized
        />{" "}
        and{" "}
        <Image
          alt="Alternative 2"
          width={120}
          height={120}
          src={alt2}
          className="rounded-full w-auto h-8"
          unoptimized
        />
      </div>
    </div>
  </Transition>
);

export default function Features() {
  const [tab, setTab] = useState(1);
  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section
      id="featured-section"
      className="relative mt-4 mb-4 pb-4 bg-gray-900 rounded-4 border-gray-600"
      style={{
        background: "linear-gradient(45deg, rgb(255 236 225), rgb(255 222 205))",
      }}
    >
      <div className="inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">
              No matter how unique your website concept is, BoringSites can support it.
            </h1>
            <p className="text-xl text-gray-600">
              BoringSites is designed for all types from content curation to
              content creation. Build company blogs, helpdesks, company wiki,
              documentations, and marketplaces.
            </p>
          </div>

          <div className="md:grid md:grid-cols-12 md:gap-6">
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="grid gap-4 mb-8 md:mb-0">
                <TabButton tabIndex={1} icon={HelpCircle} text="Helpdesk" currentTab={tab} setTab={setTab} />
                <TabButton tabIndex={2} icon={BookOpen} text="Blog" currentTab={tab} setTab={setTab} />
                <TabButton tabIndex={3} icon={ShoppingBag} text="Marketplace" currentTab={tab} setTab={setTab} />
                <TabButton tabIndex={4} icon={FileText} text="Company Wiki" currentTab={tab} setTab={setTab} />
              </div>
            </div>

            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 grid gap-4 mb-8 md:mb-0 md:order-1 m-auto w-full">
              <div className="transition-all">
                <div
                  className="relative flex flex-col text-center lg:text-right"
                  data-aos="zoom-y-out"
                  ref={tabs}
                >
                  <TabContent
                    show={tab === 1}
                    image={helpdeskImage}
                    alt1="./images/simpler-helpdesk2.png"
                    alt2="./images/simpler-helpdesk.png"
                  />
                  <TabContent
                    show={tab === 2}
                    image="/images/blog.gif"
                    alt1="./images/simpler-blog.png"
                    alt2="./images/simpler-blog2.png"
                  />
                  <TabContent
                    show={tab === 3}
                    image={marketplaceImage}
                    alt1="./images/simpler-marketplaceue2.png"
                    alt2="./images/simpler-marketplaceue.png"
                  />
                  <TabContent
                    show={tab === 4}
                    image="/path/to/your/fourth-tab-image.gif"
                    alt1="./images/webflow-icon.png"
                    alt2="/images/framer-icon.png"
                  />
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