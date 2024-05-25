"use client";
import React, { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation'; // Adjusted imports for Next.js 13
import { _loadFromJson, _transformDataToPostPageView, renderContent } from '../../../utils/helper';
import Image from 'next/image'
import Link from 'next/link';
import MoveBack from '@/components/MoveBack';
import Loading from '@/components/Loading';


interface CallToCopy {
  text: string;
  link: string;
}

interface ViewDemo {
  text: string;
  link: string;
}

interface Product {
  logo: string;
  name: string;
  provider: string;
  description: string;
  callToCopy: CallToCopy;
  ViewDemo: ViewDemo;
}

interface ContentSection {
  content: string;
}

interface Proof {
  screenshot: string;
  youtubevideo: string;
}

interface FilterBySlugType {
  id: string;
  product: Product;
  overview: ContentSection;
  howItWorks: ContentSection;
  configuration: ContentSection;
  proof: Proof;
}


const Page: React.FC = () => {
  const [filterBySlug, setFilterBySlug] = useState<FilterBySlugType | null>(null);
  const [postPageView, setPostPageView] = useState<any[]>([]);
  const pathname = usePathname();
  const [searchParams]: any = useSearchParams();

  useEffect(() => {
    const slug = pathname.split('/').pop();

    if (slug) {
      const fetchData = async () => {
        const content = await _loadFromJson();
        const filteredContent = content.find((item: { id: string }) => item.id === slug) as FilterBySlugType;
        if (filteredContent) {
          setFilterBySlug(filteredContent);
          const transformedData = _transformDataToPostPageView(filteredContent);
          setPostPageView(transformedData);
        }
      };
      fetchData();
    }
  }, [pathname, searchParams]); // Reacting to changes in pathname and searchParams


  if (!filterBySlug) {
    return <Loading />;;
  }

  return (
    <div className="space-y-8 mt-24 mb-16 ml-16 mr-16 p-8">


      <div className="grid grid-cols-1 gap-y-8 gap-x-12 lg:grid-cols-2 xl:gap-x-16">
        <div>
          <MoveBack />

          <div className="mb-4">
            <h1 className="text-3xl font-bold text-gray-800 mt-8">{filterBySlug?.product?.name}</h1>
            <p className="text-md text-gray-600">{filterBySlug?.product?.provider}</p>
          </div>
          <div className="text-gray-800">
            <p>{filterBySlug?.product?.description}</p>
          </div>
          <div className="flex mt-4 gap-4">
            <div className="flex mr-1 space-x-2 items-center">
              <a href={filterBySlug?.product?.callToCopy?.link} className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center" rel="noopener noreferrer" target="_blank">
                <span>{filterBySlug?.product?.callToCopy?.text}</span>
              </a>
            </div>
            <div className="flex space-x-2 items-center">
              <Link href={filterBySlug?.product?.ViewDemo?.link} className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center" rel="noopener noreferrer" target="_blank">
                <span>{filterBySlug?.product?.ViewDemo?.text}</span>
              </Link>
            </div>
          </div>
        </div>

        <Image
          src={filterBySlug?.proof?.screenshot}
          alt={filterBySlug?.product?.name}
          width={400}
          className=" w-full rounded-2xl border border-gray-600 object-cover shadow-xl"
          height={450}
          quality="90"

        />


      </div>


      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Overview</h1>
        <p className="text-md text-gray-600">{filterBySlug?.overview?.content}</p>
      </div>

      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">How it Works</h1>
        <p className="text-md text-gray-600">{filterBySlug?.howItWorks?.content}</p>
      </div>

      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Configuration</h1>
        <p className="text-md text-gray-600">{filterBySlug?.configuration?.content}</p>
      </div>


    </div>
  );
};

export default Page;
