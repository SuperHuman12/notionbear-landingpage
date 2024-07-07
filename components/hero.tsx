"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { StarIcon, ArrowUpRight, Check, ShoppingBag, BookOpen, FileText , FileQuestionIcon } from "lucide-react";

import VideoThumb from "@/public/images/hero-image.png";
import ModalVideo from "@/components/modal-video";

export default function Hero() {
  const words = [
    "Helpdesk",
    "Marketplace",
    "Blog",
    "Company Wiki",
    "Documentation",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div
        className="absolute bottom-0 pointer-events-none z-1 h-screen w-screen"
        aria-hidden="true"
        style={{ width: "-webkit-fill-available", opacity: 0.1 }}
      >
        <svg className=" w-full h-full opacity-50" xmlns="http://www.w3.org/2000/svg">
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
          <div className="text-center px-4 sm:px-6 lg:px-8">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-loose mb-4 aos-init aos-animate"
              data-aos="zoom-y-out"
            >
              <span className="font-normal">Effortlessly publish</span> <br />
              <span className=" -translate-y-full slideUp h-full w-full bg-clip-text text-transparent gradient-text-accent">
                {words[index]}
              </span>{" "}
              <br />
              <span className="flex gap-4 justify-center items-center mt-2">
                from 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="12 0.19 487.619 510.941"
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain m-auto ml-0 mr-0"
                >
                  <path
                    d="M96.085 91.118c15.81 12.845 21.741 11.865 51.43 9.884l279.888-16.806c5.936 0 1-5.922-.98-6.906L379.94 43.686c-8.907-6.915-20.773-14.834-43.516-12.853L65.408 50.6c-9.884.98-11.858 5.922-7.922 9.883zm16.804 65.228v294.491c0 15.827 7.909 21.748 25.71 20.769l307.597-17.799c17.81-.979 19.794-11.865 19.794-24.722V136.57c0-12.836-4.938-19.758-15.84-18.77l-321.442 18.77c-11.863.997-15.82 6.931-15.82 19.776zm303.659 15.797c1.972 8.903 0 17.798-8.92 18.799l-14.82 2.953v217.412c-12.868 6.916-24.734 10.87-34.622 10.87-15.831 0-19.796-4.945-31.654-19.76l-96.944-152.19v147.248l30.677 6.922s0 17.78-24.75 17.78l-68.23 3.958c-1.982-3.958 0-13.832 6.921-15.81l17.805-4.935V210.7l-24.721-1.981c-1.983-8.903 2.955-21.74 16.812-22.736l73.195-4.934L358.186 335.22V198.836l-25.723-2.952c-1.974-10.884 5.927-18.787 15.819-19.767zM42.653 23.919l281.9-20.76c34.618-2.969 43.525-.98 65.283 14.825l89.986 63.247c14.848 10.876 19.797 13.837 19.797 25.693v346.883c0 21.74-7.92 34.597-35.608 36.564L136.64 510.14c-20.785.991-30.677-1.971-41.562-15.815l-66.267-85.978C16.938 392.52 12 380.68 12 366.828V58.495c0-17.778 7.922-32.608 30.653-34.576z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                Notion.
              </span>
            </h1>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-lg text-gray-600 mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              <b className="text-gray-900">Turn your Notion docs</b> quickly
              into a beautiful{" "}
              <b className="text-gray-900">
                SaaS, Apps, Directories, Marketplaces, Blogs, Helpdesks
              </b>{" "}
              – no code required.
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              <div>
                <Link
                  className="btn text-dark bg-orange-600 hover:bg-orange-700 w-full mb-4 sm:w-auto sm:mb-0"
                  href="https://app.BoringSites.com"
                >
                  Get Started
                </Link>
              </div>
              <div>
                <Link
                  className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                  href="#template-section"
                >
                  View Examples
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-x-2 space-y-1 text-sm opacity-60 sm:flex-row sm:space-y-0 mt-6">
            <div className="flex items-center justify-start">
              <Check className="w-4 h-4 mr-2 text-orange-600" />
              Free 7-day trial
            </div>{" "}
            <div className="flex items-center justify-start">
              <Check className="w-4 h-4 mr-2 text-orange-600" />
              No credit card required
            </div>{" "}
            <div className="flex items-center justify-start">
              <Check className="w-4 h-4 mr-2 text-orange-600" />
              24/7 support
            </div>
          </div>

          <div className="hidden sm:flex justify-center items-center pt-12 sm:mb-0 mb-3 bg-white w-fit mx-auto mx-4 p-4 rounded-md">
            <div className="flex-shrink-0 sm:block hidden">
              <Image
                src="https://www.helpkit.so/imgs/testimonials/adjust_square_portrait.jpg"
                unoptimized
                width={100}
                height={100}
                alt="Author's image"
                className="w-16 h-16 object-cover text-gray-300 bg-white rounded-full"
              />
            </div>
            <div className="ml-5">
              <div className="text-left">
                <p className="mt-1">
                  <span className="mr-1 text-xl italic opacity-60 font-medium">
                    "
                  </span>
                  With BoringSites we literally went
                  <span className="bg-[#ffecd7] text-[#ce6a01] font-medium px-0.5 py-0.5 mx-1 px-2">
                    from 0 to fully functional knowledge-base in 1 hour.
                  </span>{" "}
                  I highly recommend it!
                  <span className="ml-0 font-serif text-xl italic opacity-50">
                    "
                  </span>
                </p>
                <div className="mt-2 text-sm opacity-100 text-gray-400 inline-flex justify-start items-center">
                  <div className="inline-flex mr-2 space-x-0.5 justify-start text-yellow-300">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4" />
                    ))}
                  </div>
                  Dan Kelly, CEO at Adjust Square
                </div>
              </div>
            </div>
          </div>

          <div className="sm:flex justify-center items-center mt-8 flex-col sm:flex-row hidden">
            <DemoLink
              href="#"
              imageSrc="https://dazzling-cat.netlify.app/helpdesk.png"
              text="View Helpdesk Demo"
              Icon={FileQuestionIcon}
            />
            <DemoLink
              href="#"
              imageSrc="https://dazzling-cat.netlify.app/catalogue.png"
              text="View Marketplace Demo"
              Icon={ShoppingBag}
            />
            <DemoLink
              href="#"
              imageSrc="https://dazzling-cat.netlify.app/blog.png"
              text="View Blog Demo"
              Icon={BookOpen}
            />
            <DemoLink
              href="#"
              imageSrc="https://dazzling-cat.netlify.app/documentation.png"
              text="View Company Wiki Demo"
              Icon={FileText}
            />
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}

function DemoLink({ href, imageSrc, text, Icon }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex whitespace-nowrap items-center text-base font-medium text-gray-900 transition duration-150 ease-in-out rounded-full cursor-pointer hover:border-gray-600 sm:ml-6 mt-2 sm:mt-0 bg-gray-100 border border-gray-200 px-6 py-4 opacity-80 hover:opacity-100"
    >
      <Icon className="ml-2 w-5 h-5" />

      <span className="ml-3 text-sm">
        {text} <ArrowUpRight className="inline w-4 h-4 opacity-90" />
      </span>
    </Link>
  );
}