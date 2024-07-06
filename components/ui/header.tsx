'use client'

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/images/logonew-black.png';
import MobileMenu from './mobile-menu';

export default function Header() {
  const [top, setTop] = useState<boolean>(true);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleDropdownLinkClick = () => {
    setDropdownOpen(false);
  };

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-8xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <Link href="/" className="shrink-0 mr-4">
            <Image src={Logo} unoptimized alt="Logo" width={250} height={200} />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li className="relative" ref={dropdownRef}>
                <button
                  className="font-bold text-gray-900 hover:text-gray-900 px-5 py-3 flex gap-2 items-center transition duration-150 ease-in-out hover:text-orange-600"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Create a..
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500" data-v-0d428460=""><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" data-v-0d428460=""></path></svg>
                </button>
                {dropdownOpen && (
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white absolute z-10 w-screen max-w-lg px-2 transform -translate-x-1/2 left-1/2 sm:px-0">
                    <div className="relative grid gap-6 px-5 py-6 bg-gray-900 text-white sm:gap-8 sm:p-8">
                      <Link href="/create-a-helpdesk-servicedesk-notion" className="flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-800" onClick={handleDropdownLinkClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6 stroke-orange-600">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                          ></path>
                        </svg>
                        <div className="ml-4 -mt-0.5">
                          <p className="text-base font-medium text-gray-50">Help Center</p>
                          <p className="mt-1 text-sm text-gray-400">
                            Create your professional self-service help center with Notion and BoringSites
                          </p>
                        </div>
                      </Link>
                      <Link href="/create-a-documentation-notion" className="flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-800" onClick={handleDropdownLinkClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6 stroke-orange-600">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          ></path>
                        </svg>
                        <div className="ml-4 -mt-0.5">
                          <p className="text-base font-medium text-gray-50">Documentation</p>
                          <p className="mt-1 text-sm text-gray-400">
                            Create your world-class product documentation with Notion and BoringSites
                          </p>
                        </div>
                      </Link>
                      <Link href="/create-a-marketplace-notion" className="flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-800" onClick={handleDropdownLinkClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6 stroke-orange-600">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                          ></path>
                        </svg>
                        <div className="ml-4 -mt-0.5">
                          <p className="text-base font-medium text-gray-50">Marketplace</p>
                          <p className="mt-1 text-sm text-gray-400">
                            Create a self serving community marketplace that can handle millions in traffic on Notion.
                          </p>
                        </div>
                      </Link>
                      <Link href="/create-a-company-wiki-notion" className="flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-800" onClick={handleDropdownLinkClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="flex-shrink-0 w-6 h-6 stroke-orange-600">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          ></path>
                        </svg>
                        <div className="ml-4 -mt-0.5">
                          <p className="text-base font-medium text-gray-50">Company Wiki</p>
                          <p className="mt-1 text-sm text-gray-400">
                            Create company wiki protected access and AI to answer queries on top of Notion as a database.
                          </p>
                        </div>
                      </Link>
                      <Link href="/create-a-blog-notion" className="flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-800" onClick={handleDropdownLinkClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="url(#grad1)" className="flex-shrink-0 w-6 h-6 stroke-orange-600">
                          <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%"></stop>
                              <stop offset="50%"></stop>
                              <stop offset="100%"></stop>
                            </linearGradient>
                          </defs>
                          <path
                            stroke-linecap="round"
                            stroke-width="2"
                            stroke-linejoin="round"
                            d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                          ></path>
                        </svg>
                        <div className="ml-4 -mt-0.5">
                          <p className="relative text-base font-medium text-gray-50">
                            Blog
                          </p>
                          <p className="mt-1 text-sm text-gray-400">
                            Create a beautiful blog for your startup or company with Notion and BoringSites.
                          </p>
                        </div>
                      </Link>
                    </div>
                    <div className="px-5 py-5 space-y-6 bg-gray-900 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8 justify-between w-full pb-6">
                      <div className="flow-root font-medium w-full">
                        <Link href="https://support.helpkit.so/" target="_blank" className="flex items-center text-base font-medium transition duration-150 ease-in-out rounded-full hover:bg-gray-600 p-2 px-4 -m-3 bg-gray-800 text-white" onClick={handleDropdownLinkClick}>
                          <Image src="https://dazzling-cat.netlify.app/helpdesk.png"
                            unoptimized className="shadow-md" alt={''}
                            width={30}
                            height={30}
                          /> <span className="ml-3 text-sm">Help Center Demo <span className="opacity-90"></span></span>
                        </Link>
                      </div>
                      <div className="flow-root font-medium w-full">
                        <Link href="https://docs.helpkit.so/" target="_blank" className="flex items-center text-base font-medium transition duration-150 ease-in-out rounded-full hover:bg-gray-600 p-2 px-4 -m-3 bg-gray-800 text-white" onClick={handleDropdownLinkClick}>
                          <Image
                            src="https://dazzling-cat.netlify.app/documentation.png" unoptimized

                            width={30}
                            height={30}
                            className="shadow-md" alt={''} /> <span className="ml-3 text-sm"> Company Wiki Demo <span className="opacity-90"></span></span>
                        </Link>
                      </div>
                    </div>
                    <div className="px-5 py-5 space-y-6 bg-gray-900 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8 justify-between w-full pb-8">
                      <div className="flow-root font-medium w-full">
                        <Link href="https://support.helpkit.so/" target="_blank" className="flex items-center text-base font-medium transition duration-150 ease-in-out rounded-full hover:bg-gray-600 p-2 px-4 -m-3 bg-gray-800 text-white" onClick={handleDropdownLinkClick}>
                          <Image

                            src="https://dazzling-cat.netlify.app/blog.png" unoptimized
                            width={30}
                            height={30}
                            className="shadow-md" alt={''} /> <span className="ml-3 text-sm">Blog Site Demo <span className="opacity-90"></span></span>
                        </Link>
                      </div>
                      <div className="flow-root font-medium w-full">
                        <Link href="https://docs.helpkit.so/" target="_blank" className="flex items-center text-base font-medium transition duration-150 ease-in-out rounded-full hover:bg-gray-600 p-2 px-4 -m-3 bg-gray-800 text-white" onClick={handleDropdownLinkClick}>
                          <Image

                            width={30}
                            height={30}
                            src="https://dazzling-cat.netlify.app/catalogue.png" unoptimized className="shadow-md" alt={''} /> <span className="ml-3 text-sm"> Marketplace Demo <span className="opacity-90"></span></span>
                        </Link>
                      </div>
                    </div>
                  </div>

                )}
              </li>
              <li>
                <Link href="/affiliate" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Earn $$$</Link>
              </li>
              <li>
                <Link href="/pricing" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Pricing</Link>
              </li>
              <li>
                <Link href="/integration" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Integrations</Link>
              </li>
              <li>
                <Link href="/showcase" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Showcase</Link>
              </li>
              <li>
                <Link href="https://app.BoringSites.com" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Login</Link>
              </li>
              <li>
                <Link href="https://app.BoringSites.com" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                  <span>Create a Site</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  );
}
