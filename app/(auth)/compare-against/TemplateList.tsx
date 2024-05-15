import React from 'react';
import Image from "next/image";
import Link from 'next/link'; 
import templateData from '@/public/template_data.json';


// Utility function to truncate text
const truncateText = (text: string, maxLength: number): string => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};


const TemplateLibrary = () => {
  return (
    <section className='max-w-3xl m-auto text-center space-y-4'>
      <h1 className="h1 mb-4">Get Ready-To-Execute businesses, not just templates.</h1>
      <p className="text-xl text-gray-600 mb-8">NotionBear has thousands of templates for different uses from project management to meeting agendas, team wikis, and CRMs. Using these templates makes getting setup and up-to-speed easier than ever.</p>
      <button className="text-dark border rounded w-fit p-2 mt-4 px-4 bg-gray-200">View all Templates</button>
      <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none mt-9">
        {templateData.template_library.map((template, index) => (

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
        src={template?.product?.logo}
        unoptimized
        alt={template?.product?.name}
      />
      </div>

      <div className="p-6 text-start">
        <Link href={template.id} className="flex gap-2">
          <span className="text-start mt-2 mb-1 font-bold hover:text-orange-600">
            {template?.product?.name}
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
        {truncateText(template?.product?.description, 76)}
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
