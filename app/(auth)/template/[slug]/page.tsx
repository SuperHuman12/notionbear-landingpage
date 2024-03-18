import React from 'react';
import {_loadFromJson, _transformDataToPostPageView, renderContent} from '../../../utils/helper';

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const content = await _loadFromJson();
  const filterBySlug = content.filter((item: any) => item.id === slug)[0];
  const _postPageView =  _transformDataToPostPageView(filterBySlug);


  if (!filterBySlug) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8 mt-24 mb-16 ml-16 mr-16 bg-gray-100 p-8">
      <div className="flex space-y-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img src={filterBySlug.product?.logo} alt="" className="w-full h-full object-contain" />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-gray-800">{filterBySlug?.product?.name}</h1>
              <p className="text-md text-gray-600">{filterBySlug?.product?.provider}</p>
            </div>
          </div>
          <div className="text-gray-800">
            <p>{filterBySlug?.product?.description}</p>
          </div>
          <div className="flex">
          <div className="flex mr-1 space-x-2 items-center">
            <a href={filterBySlug?.product?.callToCopy?.link} className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center" rel="noopener noreferrer" target="_blank">
              <span>{filterBySlug?.product?.callToCopy?.text}</span>
            </a>
          </div>
          <div className="flex space-x-2 items-center">
            <a href={filterBySlug?.product?.ViewDemo?.link} className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center" rel="noopener noreferrer" target="_blank">
              <span>{filterBySlug?.product?.ViewDemo?.text}</span>
            </a>
          </div>
          </div>
        </div>
      </div>

      <div>
        {_postPageView.map((item: any, index: number) => renderContent(item, index))}
      </div>
    </div>
  );
};

export default Page;
