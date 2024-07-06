import React from 'react';
import { Metadata, ResolvingMetadata } from 'next';
import { _loadFromJson, _transformDataToPostPageView } from '../../../utils/helper';
import Image from 'next/image';
import Link from 'next/link';
import MoveBack from '@/components/MoveBack';
import Loading from '@/components/Loading';

interface CallToAction {
  text: string;
  link: string;
}

interface Product {
  logo: string;
  name: string;
  provider: string;
  description: string;
  callToAction: CallToAction;
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

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const content = await _loadFromJson(false);
  const filteredContent = content.find((item: { id: string }) => item.id === slug) as FilterBySlugType;

  if (!filteredContent) {
    return {
      title: 'BoringSites vs Unknown Integration',
      description: 'Compare BoringSites to an unknown integration',
    };
  }

  return {
    title: `BoringSites vs ${filteredContent.product.name}`,
    description: `Compare BoringSites to ${filteredContent.product.name}: ${filteredContent.product.description}`,
    openGraph: {
      images: [{ url: filteredContent.proof.screenshot }],
    },
  };
}

async function getData(slug: string) {
  const content = await _loadFromJson(false);
  const filteredContent = content.find((item: { id: string }) => item.id === slug) as FilterBySlugType;
  if (filteredContent) {
    const transformedData = _transformDataToPostPageView(filteredContent);
    return { filterBySlug: filteredContent, postPageView: transformedData };
  }
  return null;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);

  if (!data) {
    return <Loading />;
  }

  const { filterBySlug, postPageView } = data;

  return (
    <div className="space-y-8 mt-24 mb-16 mx-4 sm:mx-8 md:mx-16 p-4 sm:p-8">
      <div className="grid grid-cols-1 gap-y-8 gap-x-8 lg:grid-cols-2 xl:gap-x-12">
        <div>
          <MoveBack />
          <div className="flex gap-4 mb-4">
            <Image
              alt="Logo"
              height={100}
              width={100}
              className="rounded-full object-cover w-20 h-20 mt-6 p-2"
              src={filterBySlug.product.logo}
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mt-8">{filterBySlug.product.name}</h1>
              <p className="text-md text-gray-600">{filterBySlug.product.provider}</p>
            </div>
          </div>
          <div className="text-gray-800">
            <p>{filterBySlug.product.description}</p>
          </div>
          <div className="flex mt-4 gap-4">
            <div className="flex space-x-2 items-center">
              <Link
                href={filterBySlug.product.callToAction.link}
                className="bg-gray-900 hover:bg-gray-700 text-white cursor-pointer font-bold py-2 px-4 rounded-full inline-flex items-center"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Install</span>
              </Link>
            </div>
          </div>
        </div>

        <Image
          src={filterBySlug.proof.screenshot}
          alt={filterBySlug.product.name}
          width={400}
          height={450}
          className="w-full rounded-2xl object-cover shadow-xl"
          quality="90"
        />
      </div>

      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Overview</h1>
        <p className="text-md text-gray-600">{filterBySlug.overview.content}</p>
      </div>

      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">How it Works</h1>
        <p className="text-md text-gray-600">{filterBySlug.howItWorks.content}</p>
      </div>

      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Configuration</h1>
        <p className="text-md text-gray-600">{filterBySlug.configuration.content}</p>
      </div>
    </div>
  );
}