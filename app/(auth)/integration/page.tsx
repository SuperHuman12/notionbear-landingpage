import React from 'react';
import Link from 'next/link';
import { _loadFromJson } from '@/app/utils/helper';



export const metadata = {
  title: 'Notion Bear Integrations',
  description: 'Integrate with your stack and extend functionality with powerful integrations built by us and our amazing community.',
}

const Integration = async () => {
  const integrations = await _loadFromJson(false);

  
  

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">NotionBear Integrations</h1>
            <p className="text-xl text-gray-600">Integrate with your stack and extend functionality with powerful integrations built by us and our amazing community.</p>
          </div>
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {integrations.map((integration:any, index:number) => (
              <Link key={index} href={"integration/"+integration.id} >
              <div className="cursor-pointer relative flex flex-col items-center p-6 bg-white rounded shadow-xl text-center h-full border">
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <img className="w-10 h-10" src={integration?.product?.logo} alt={integration?.product?.name} />
                      <span className="text-dark font-bold">{integration?.product?.name}  </span>
                    </div>
                    <p className="text-gray-600 text-center">{integration?.product?.description}</p>
                    <button className="text-white bg-gray-900 rounded w-full p-2 mt-4">
                      {integration?.callToCopy?.text || "Integrate"}
                    </button>
                  </div>
                </div>
              </Link>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
