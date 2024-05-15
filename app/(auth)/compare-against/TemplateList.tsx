"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link'; 
import templateData from '@/public/template_data.json';

// Define TypeScript interfaces for the template data
interface Product {
  name: string;
  logo: string;
  description: string;
}

interface Template {
  id: string;
  product: Product;
}

// Utility function to truncate text
const truncateText = (text: string, maxLength: number): string => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

// Utility function to shuffle an array
const shuffleArray = (array: Template[]): Template[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const TemplateLibrary = () => {
  const [templates, setTemplates] = useState<Template[]>([]);

  useEffect(() => {
    const shuffledTemplates = shuffleArray([...templateData.template_library]);
    setTemplates(shuffledTemplates.slice(0, 6));
  }, []);

  return (
    <section className='max-w-3xl m-auto text-center space-y-4'>
      <h1 className="h2 mb-4 p-2">Incredible sites built with NotionBear</h1>
      <p className="text-xl text-gray-600 mb-8">Browse through examples of live Notion websites, built with NotionBear.</p>

      <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center aos-init aos-animate mt-6" data-aos="zoom-y-out" data-aos-delay="300">
        <div>
          <a className="btn text-dark bg-orange-600 hover:bg-orange-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://app.notionbear.com">Ask our Designer for Help</a>
        </div>
        <div>
          <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-2 m-auto" href="/template">View all Templates</a>
        </div>
      </div>

      <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none mt-9">
        {templates.map((template, index) => (
          <Link
            href={"/template/" + template.id}
            key={index}
            className="relative flex flex-col items-center  bg-white rounded shadow-xl h-full border"
          >
            <div>
              <div>
                <div className="items-start">
                  <div className="m-auto flex border justify-center items-center h-64">
                    <Image
                      className="w-auto mx-auto"
                      width={100}
                      height={100}
                      src={template.product.logo}
                      unoptimized
                      alt={template.product.name}
                    />
                  </div>
                  <div className="p-6 text-start">
                    <Link href={template.id} className="flex gap-2">
                      <span className="text-start mt-2 mb-1 font-bold hover:text-orange-600">
                        {template.product.name}
                      </span>
                      <span className="ml-2 m-auto mb-3">
                        <svg
                          width="12"
                          height="11"
                          viewBox="0 0 12 11"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            stroke="#52667A"
                            stroke-width="1.25"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M4.10437012.76923H1.83333333C1.37309604.76923 1 1.11362635 1 1.53846077v7.69230769c0 .42483442.37309604.76923077.83333333.76923077h8.33333334c.46023729 0 .83333333-.34439635.83333333-.76923077V7.03051681M7.4205317.78000087h3.20254469c.21241721 0 .38461538.17219818.38461538.38461539V4.345704M10.5 1.5L6 5.84615385"></path>
                          </g>
                        </svg>
                      </span>
                    </Link>
                    <p className="text-sm text-gray-400 mt-2 mb-3">
                      {truncateText(template.product.description, 76)}
                    </p>
                    <span className="bg-gray-100 border-gray-200 border-dashed border-2 p-1 px-4 rounded my-2">
                      Helpdesk
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TemplateLibrary;
