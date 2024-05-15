import Image from 'next/image'
import Logo from '@/public/images/logonew-black.png'

import Link from 'next/link';


export default function Footer() {
  return (
    <>
 
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <Link href="/" className="mb-2">
            <Image src={Logo} loading='eager'  alt="Logo" width={200} height={200} />
              <p className="text-sm text-gray-600 mt-4 mb-4">Notion Bear is an easy-to-use website builder for busy founders. Lead by <a href="https://twitter.com/absurdfounder">@absurdfounder</a>.</p>

              <p className='mb-2 text-sm text-gray-400'>NotionBear is not related with Notion™ the company in any way.</p>

            </Link>
            <div className="text-sm text-gray-600">
              <a href="/tos" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Terms</a> · <a href="/privacy-policy" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Privacy Policy</a>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Product</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="https://app.notionbear.com" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">NotionBear Builder</a>
              </li>
              <li className="mb-2">
                <a href="/template" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Showcase</a>
              </li>
              <li className="mb-2">
                <a href="https://notionbear.com/blog" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Blog</a>
              </li>
              <li className="mb-2">
                <a href="https://notionbear.com/changelog" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Changelog</a>
              </li>
              <li className="mb-2">
                <a href="/integration" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Integrations</a>
              </li>
              <li className="mb-2">
                <a href="/pricing" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Pricing</a>
              </li>
              <li className="mb-2">
                <a href="/migrating-to-notionbear" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Migrate to NotionBear</a>
              </li>
              <li className="mb-2">
                <a href="/agency" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Hire Experts</a>
              </li>

              <li className="mb-2">
                <a href="/create-a-blog-notion" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Notion to Blog</a>
              </li>

              <li className="mb-2">
                <a href="/create-a-directory-notion" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Notion to Directory</a>
              </li>
              
              <li className="mb-2">
                <a href="/create-a-documentation-notion" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Notion to Documentation</a>
              </li>

              <li className="mb-2">
                <a href="/create-a-helpdesk-servicedesk-notion" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Notion to Help Desk - Service Desk</a>
              </li>
              
              <li className="mb-2">
                <a href="/create-a-knowledge-base-notion" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Notion to Knowledge Base</a>
              </li>

              <li className="mb-2">
                <a href="/create-a-marketplace-notion" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Notion to Marketplace</a>
              </li>

              <li className="mb-2">
                <a href="/create-a-company-wiki-notion" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Notion to Company Wiki</a>
              </li>
              





            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Resources</h6>
            <ul className="text-sm">


              
              <li className="mb-2">
                <a href="/compare-against/notionbear-vs-wix" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Compare with Wix</a>
              </li>
              <li className="mb-2">
                <a href="/compare-against/notionbear-vs-webflow" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Compare with Webflow</a>
              </li>
              <li className="mb-2">
                <a href="/compare-against/notionbear-vs-wordpress" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Compare with WordPress</a>
              </li>
              <li className="mb-2">
                <a href="/compare-against/notionbear-vs-squarespace" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Compare with Squarespace</a>
              </li>
              <li className="mb-2">
                <a href="/compare-against/notionbear-vs-zendesk" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Compare with Zendesk</a>
              </li>
              <li className="mb-2">
                <a href="/compare-against/notionbear-vs-intercom" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Compare with Intercom</a>
              </li>
              <li className="mb-2">
                <a href="/compare-against/notionbear-vs-ghost" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Compare with Ghost</a>
              </li>
              <li className="mb-2">
                <a href="/compare-against/notionbear-vs-framer" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Compare with Framer</a>
              </li>  
              <li className="mb-2">
                <a href="/compare-against/notionbear-vs-gitbook" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Compare with Gitbook</a>
              </li>                
              <li className="mb-2">
                <a href="/compare-against/notionbear-vs-shopify" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Compare with Shopify</a>
              </li>                                 



              <li className="mb-2">
                <a href="/compare-against/notionbear-vs-wix" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">How to build a peer-to-peer marketplace</a>
              </li>
              <li className="mb-2">
                <a href="/compare-against/notionbear-vs-webflow" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">How to build a B2B marketplace</a>
              </li>
              <li className="mb-2">
                <a href="/compare-against/notionbear-vs-wordpress" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">How to build a website like Airbnb</a>
              </li>
              <li className="mb-2">
                <a href="/compare-against/notionbear-vs-squarespace" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">How to build a website like Etsy</a>
              </li>
              <li className="mb-2">
                <a href="/compare-against/notionbear-vs-zendesk" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">How to build a website like Fiverr</a>
              </li>
              <li className="mb-2">
                <a href="/compare-against/notionbear-vs-intercom" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">How to build a rental marketplace?</a>
              </li>
              <li className="mb-2">
                <a href="/compare-against/notionbear-vs-ghost" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">How to build a service marketplace</a>
              </li>
              <li className="mb-2">
                <a href="/compare-against/notionbear-vs-framer" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">How to build a two-sided marketplace</a>
              </li>  
              <li className="mb-2">
                <a href="/compare-against/notionbear-vs-gitbook" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Compare with Gitbook</a>
              </li>                
              <li className="mb-2">
                <a href="/compare-against/notionbear-vs-shopify" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Compare with Shopify</a>
              </li>                                 


            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Company</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Join on Telegram</a>
              </li>
              <li className="mb-2">
                <a href="https://www.whatsapp.com/channel/0029VaBrxz9FnSzC4z2HGd2T" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Join Whatsapp Channel</a>
              </li>
              <li className="mb-2">
                <a href="https://drive.google.com/drive/u/2/folders/13TfS2QV-VHg5Snw6rVbgmoVVRXTeiDHA" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Media Kit</a>
              </li>
              <li className="mb-2">
                <a href="mailto:hey@vaibhavkalra.com?subject=Hi%2C%20I%20have%20a%20query%20regarding%20NotionBear" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Email Us</a>
              </li>
              <li className="mb-2">
                <a href="/affiliate" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Affiliate Program</a>
              </li>

              <li className="mb-2">
                <a href="/privacy" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Privacy</a>
              </li>

              <li className="mb-2">
                <a href="/terms" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Terms</a>
              </li>              

              <li className="mb-2">
                <a href="https://notionbear.com/help" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Helpcenter</a>
              </li>                                          
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Sites by Bear 🐻</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Discord Bots</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Telegram Bots</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Whatsapp Bots</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Remote Jobs</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Mental Health</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Agency marketplace</a>
              </li>


            </ul>
          </div>



        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Social as */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a href="https://twitter.com/absurdfounder" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a href="https://github.com/SuperHuman12" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">&copy; NotionBear.com. All rights reserved.</div>

        </div>

      </div>
    </footer>
    </>
  )
}
