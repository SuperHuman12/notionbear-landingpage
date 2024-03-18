import Link from 'next/link';
import Image from 'next/image';
import { _loadFromJson } from '@/app/utils/helper';


export const metadata = {
  title: 'Notion Bear Templates',
  description: 'Jumpstart your SaaS business with pre-built solutions from NotionBear and our community',
}


export default async function Template() {

  const templates = await _loadFromJson();



  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">Find your Template</h1>
            <p className="text-xl text-gray-600">Jumpstart your SaaS business with pre-built solutions from NotionBear and our community.</p>
          </div>
        
          <div className="flex ">
          {templates.map((template:any, index:number) => (
              <Link key={index} href={"template/"+template.id} >
                <div
                style={{width: '400px'}}
                className="cursor-pointer   m-2 relative flex items-center p-6 bg-white rounded shadow-xl h-full border">
                  <div>
                    <div className="items-start space-x-2">
                      <Image className="w-full rounded"
                        width={100}
                        height={100}
                        src={template?.product?.logo} 
                        alt={template?.product?.name} />

                      <span className="text-dark font-bold">{template?.product?.name}</span>
                    </div>
                    <p className="text-gray-600">{template?.product?.description}</p>
                    <button className="text-white bg-gray-900 rounded w-full p-2 mt-4">
                      {template?.callToCopy?.text || "Clone Template" }
                    </button>
                  </div>
                </div>
              </Link>
            ))}

            </div>
        </div>
      </div>
    </section>
  )
}
