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

            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center aos-init aos-animate mt-6">
              <div><a className="btn text-dark bg-orange-600 hover:bg-orange-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://app.notionbear.com">Ask our Designer for Help - Free</a></div>
            </div>

          </div>





          <div className="max-w-3xl mx-auto aos-init aos-animate max-w-sm grid md:grid-cols-1 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none gap-6 ">
            {templates.map((template: any, index: number) => (
              <Link key={index} href={"/template/" + template.id} className="cursor-pointer   m-2 relative flex items-center p-6 bg-white rounded shadow-xl h-full border mt-6">
                <div>
                  <div>
                    <div className="items-start">
                      <Image className="w-full rounded mb-4 border border-dashed"
                        width={100}
                        height={100}
                        src={template?.product?.logo}
                        unoptimized
                        alt={template?.product?.name} />


<div className='flex justify-between gap-4'>

<span className="text-dark font-bold">{template?.product?.name}</span>
<span className="bg-gray-100 border-gray-200 border-dashed border-2 p-1 px-4 rounded my-2">Helpdesk</span>

</div>

                    </div>
                    <p className="text-gray-600">{template?.product?.description}</p>



                    <div className="flex gap-4 justify-between">

                      <button className="bg-gray-900 border p-2 px-4 rounded my-2 text-white w-full mt-4 rounded text-center">
                        {template?.callToCopy?.text || "Duplicate"}
                      </button>

                      <button className="bg-gray-200 border p-2 px-4 rounded my-2 border border-gray-600 w-full mt-4 text-center rounded">
                        {template?.callToCopy?.text || "View Site"}
                      </button>
                    </div>

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
