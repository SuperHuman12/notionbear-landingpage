import Image from 'next/image'
import showcaseImage from '@/public/images/showcase.jpg'
import Link from 'next/link'
import TemplateList from '@/app/(auth)/compare-against/TemplateList'
export default function showcases() {
  return (


    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center md:pb-16">
            <h2 className="h2 mb-4 p-2">Incredible sites built with NotionBear</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Browse through examples of live Notion websites, built with NotionBear</p>

            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center aos-init aos-animate mt-6" data-aos="zoom-y-out" data-aos-delay="300"><div><a className="btn text-dark bg-orange-600 hover:bg-orange-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://app.notionbear.com">Ask our Designer for Help</a></div><div><a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-2 m-auto" href="/template">View all Templates</a></div></div>


          </div>




<TemplateList/>





        </div>
      </div>
    </section>


  )
}