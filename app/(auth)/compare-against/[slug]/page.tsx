import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Rating from '../Rating';
import AggregateStats from '../AggregateStats';
import TrustedBy from '../TrustedBy';
import ComparisonTable from '../ComparisonTable';
import TemplateDesign from '../TemplateDesign';
import TemplateLibrary from '../TemplateList';
import { _loadFromJsonComparison, _transformDataToPostPageView } from '../../../utils/helper';
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
  heroimage: string;
}

interface ContentSection {
  content: string;
}

interface Proof {
  screenshot: string;
  youtubevideo: string;
}

interface ComparisonFeature {
  feature: string;
  feature_value: {
    Item: boolean;
    Notion: boolean;
  };
}

interface FilterBySlugType {
  id: string;
  product: Product;
  overview?: ContentSection;
  howItWorks?: ContentSection;
  configuration?: ContentSection;
  proof?: Proof;
  comparison_table: ComparisonFeature[];
}

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const content = await _loadFromJsonComparison();
  const filteredContent = content.find((item: { id: string }) => item.id === slug) as FilterBySlugType;

  if (!filteredContent) {
    return {
      title: 'BoringSites vs Unknown Template',
      description: 'Compare BoringSites to an unknown template',
    };
  }

  return {
    title: `BoringSites vs ${filteredContent.product.name}`,
    description: `Compare BoringSites to ${filteredContent.product.name}: ${filteredContent.product.description}`,
    openGraph: {
      images: [{ url: filteredContent.product.heroimage }],
    },
  };
}

export default async function ComparisonAgainst({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const content = await _loadFromJsonComparison();
  const filteredContent = content.find((item: { id: string }) => item.id === slug) as FilterBySlugType;
  
  if (!filteredContent) {
    return <Loading />;
  }

  const transformedData = _transformDataToPostPageView(filteredContent);

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-24 pb-12 md:pt-20 md:pb-20">
          <div className="max-w-xl mx-auto text-center pb-12 md:pb-20 pt-12">
            <Image
              src={filteredContent.product.heroimage}
              alt={filteredContent.product.name}
              width={150}
              height={300}
              loading="eager"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-full p-8 mb-8 m-auto"
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Tired of <b>{filteredContent.product.name}</b>? <br /> Say hi to BoringSites
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              {filteredContent.product.description}
            </p>
            <Link href="app.BoringSites.com" className="text-white bg-gray-900 rounded-full w-fit p-2 mt-4 px-4">
              Get Started
            </Link>
          </div>
          <TrustedBy />
          <ComparisonTable id={filteredContent.id} />
          <Rating />
          <TemplateDesign />
          <AggregateStats />
          <TemplateLibrary />
        </div>
      </div>
    </section>
  );
}