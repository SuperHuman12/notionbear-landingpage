import Link from 'next/link';
import Image from 'next/image'


export const metadata = {
  title: 'Migrate to NotionBear',
  description: 'Migrate your helpdesk, blog, or even marketplace to notionbear. Start living a hassle free life just SET and FORGET.',
  openGraph: {
    images: [
        {
            url: "https://dazzling-cat.netlify.app/notionbear_socialshare.png",
            width: 1200,
            height: 630,
            alt: "Create a Marketplace with Notion",
        },
    ],
},
twitter: {
    card: "summary_large_image",
    images: [
        {
            url: "https://dazzling-cat.netlify.app/notionbear_socialshare.png",
            alt: "Create a Marketplace with Notion",
        },
    ],
},
}

export default function PageDetail() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-18 md:pb-20">

          {/* Page header */}

          <div className="max-w-4xl py-10 mx-auto lg:py-12">
    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative flex items-center justify-center px-3 py-1 text-sm font-semibold leading-6  rounded-full ring-1 ring-orange-700/80 opacity-60  w-fit m-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" className="w-4 h-4 mr-1">
                <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19Zm-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176Zm4.39 3.58a.75.75 0 0 1-.072 1.06L9 9.25h8a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.493-1.315l3.437-3a.75.75 0 0 1 1.059.072ZM15 14.75H7a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 .493 1.315l-3.437 3a.75.75 0 0 1-.987-1.13L15 14.75Z"
                    clip-rule="evenodd"
                ></path>
            </svg>
            Hassle-free Migration
        </div>
    </div>
    <div className="text-center">
        <h1 className="md:text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl font-extrabold leading-tighter tracking-tighter mb-4 aos-init aos-animate"><span className="gradient-text-accent">Migrate</span> your content from another external Knowledge Base</h1>
        <p className="mt-6 leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Planning to move your help content from another provider? We can seamlessly import your existing knowledge base from pretty much any platform into our Notion template.
        </p>
        <div className="flex items-center justify-center mt-10 gap-x-6">
            <button className="px-6 py-2 text-lg font-semibold text-white rounded-lg gradient-bg-accent bg-gray-800">
                Contact Us →
            </button>
        </div>
    </div>
</div>

<section className="mb-20">
    <div className="px-6 pt-5 pb-10 bg-white lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <p className="text-base font-semibold leading-7 text-orange-600">
                SUPPORTED PLATFORMS
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Migrate from 100+ Knowledge base platforms
            </h2>
            <p className="mt-6 text-gray-600 sm:text-lg sm:leading-8">
                Migrate your articles from pretty much any knowledge base platform to NotionBear. Our experts will make sure it’s a hassle-free and quick transition.
            </p>
        </div>
    </div>
    <div className="bg-white">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
                <div className="p-8 bg-gray-400/5 sm:p-10"><Image src="https://helpkit.so/imgs/providers/intercom.png" unoptimized alt="Intercom" width="158" height="48" className="object-contain w-full max-h-10" /></div>
                <div className="p-6 bg-gray-400/5 sm:p-10"><Image src="https://helpkit.so/imgs/providers/crisp.png" unoptimized alt="Crisp" width="158" height="48" className="object-contain w-full pt-1 max-h-10" /></div>
                <div className="p-6 bg-gray-400/5 sm:p-10"><Image src="https://helpkit.so/imgs/providers/helpscout.png" unoptimized alt="HelpScout" width="158" height="48" className="object-contain w-full pt-3 max-h-10" /></div>
                <div className="p-6 bg-gray-400/5 sm:p-10"><Image src="https://helpkit.so/imgs/providers/document360.png" unoptimized alt="Document360" width="158" height="48" className="object-contain w-full max-h-12" /></div>
                <div className="p-6 bg-gray-400/5 sm:p-10"><Image src="https://helpkit.so/imgs/providers/gitbook.png" unoptimized alt="Gitbook" width="158" height="48" className="object-contain w-full max-h-12" /></div>
                <div className="flex items-center justify-center p-6 bg-gray-400/5 sm:p-10"><span className="text-2xl font-semibold gradient-text-accent">Many more</span></div>
            </div>
        </div>
        <div className="flex items-center justify-center w-full pt-12">
            <button className="px-6 py-2 text-lg font-semibold text-white rounded-lg gradient-bg-accent bg-gray-800">
                Contact Us →
            </button>
        </div>
    </div>
</section>

          


        </div>
      </div>
    </section>
  )
}
