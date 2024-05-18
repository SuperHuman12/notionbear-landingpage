import Link from 'next/link';
import Image from 'next/image'


export const metadata = {
  title: 'Hire a NotionBear Expert',
  description: 'Hire NotionBear Agency when your ready to grow beyond we can help setup, design and manage your helpdesk, blog, or even marketplace. Also add custom code to your website deployment to make sure your needs are always met.',
  openGraph: {
    images: [
        {
            url: "https://dazzling-cat.netlify.app/notiontohelpdesk_socialshare.png",
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
            url: "https://dazzling-cat.netlify.app/notiontohelpdesk_socialshare.png",
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

    <div className="text-center">
        <h1 className="md:text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl font-extrabold leading-tighter tracking-tighter mb-4 aos-init aos-animate"><span className="gradient-text-accent">Hire a NotionBear Expert</span> to help you grow beyond the limitations.</h1>
        <p className="mt-6 leading-7 text-gray-600 sm:text-lg sm:leading-8">
            If your ready to grow from a 100 users to 10,000 , We can customize your notionbear site to match your needs. 
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
                EXPERTS CAN HELP
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What can NotionBear Experts do for you?
            </h2>
            <p className="mt-6 text-gray-600 sm:text-lg sm:leading-8">
            Experts can help with a wide range of design, development, and marketing projects. Helping you reach your business goals as a solo founder or small team.
            </p>
        </div>
    </div>


    <div className="container mx-auto">

    <div className="mt-4">
        <div role="list" className="project_type-list w-dyn-items grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div role="listitem" className="project_type-item w-dyn-item bg-white shadow-lg p-6 rounded-lg">
                <div className="grid gap-4 items-center">
                    <Image loading="lazy" height="60" alt="Platform migrations" unoptimized src="https://assets-global.website-files.com/6320a2f3bd0b234991397e96/65316fc6b33cce40a33c2b1b_Migration.svg" className="project_type-image mr-4" style={{ filter: 'hue-rotate(161deg)' }} />
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Platform migrations</h3>
                        <p>Move all (or just part of) your site from another platform to Webflow.</p>
                    </div>
                </div>
            </div>
            <div role="listitem" className="project_type-item w-dyn-item bg-white shadow-lg p-6 rounded-lg">
                <div className="grid gap-4 items-center">
                    <Image loading="lazy" height="60" alt="Custom code &amp; integrations" unoptimized src="https://assets-global.website-files.com/6320a2f3bd0b234991397e96/65316fb84aabe974ccc5e90a_Plugins.svg" className="project_type-image mr-4" style={{ filter: 'hue-rotate(161deg)' }} />
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Custom code &amp; integrations</h3>
                        <p>Get help with integrations or other extensions that require development work.</p>
                    </div>
                </div>
            </div>
            <div role="listitem" className="project_type-item w-dyn-item bg-white shadow-lg p-6 rounded-lg">
                <div className="grid gap-4 items-center">
                    <Image loading="lazy" height="60" alt="Rebrands &amp; redesigns" unoptimized src="https://assets-global.website-files.com/6320a2f3bd0b234991397e96/65316f5a0c978936919bd6fe_SiteRefresh.svg" className="project_type-image mr-4" style={{ filter: 'hue-rotate(161deg)' }} />
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Rebrands &amp; redesigns</h3>
                        <p>Give your whole site a new look or work on a fresh new project with an Expert.</p>
                    </div>
                </div>
            </div>
            

        </div>
    </div>
</div>

</section>

          


        </div>
      </div>
    </section>
  )
}
