'use client'

import { useState, useRef, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-6 h-6 fill-current text-gray-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/* Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-5 py-2 space-y-4">
            <li>
              <button
                className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out w-full justify-between border-b-2"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Create a..
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500" data-v-0d428460=""><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" data-v-0d428460=""></path></svg>
              </button>
              {dropdownOpen && (
                <div className="bg-white w-full">
                  <ul>
                    <li className="flex items-start p-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-orange-600">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                      </svg>
                      <div className="ml-4">
                        <Link href="/create-a-helpdesk-servicedesk-notion">
                          <Link className="text-base font-medium text-gray-900">Help Center</Link>
                        </Link>
                        <p className="mt-1 text-sm text-gray-500">Create your professional self-service help center with Notion and NotionBear.</p>
                      </div>
                    </li>
                    <li className="flex items-start p-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-orange-600">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                      </svg>
                      <div className="ml-4">
                        <Link href="/create-a-documentation-notion">
                          <Link className="text-base font-medium text-gray-900">Documentation</Link>
                        </Link>
                        <p className="mt-1 text-sm text-gray-500">Create your world-class product documentation with Notion and NotionBear.</p>
                      </div>
                    </li>
                    <li className="flex items-start p-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-orange-600">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                      </svg>
                      <div className="ml-4">
                        <Link href="/create-a-marketplace-notion">
                          <Link className="text-base font-medium text-gray-900">Marketplace</Link>
                        </Link>
                        <p className="mt-1 text-sm text-gray-500">Create a self-serving community marketplace that can handle millions in traffic on Notion.</p>
                      </div>
                    </li>
                    <li className="flex items-start p-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-orange-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"></path>
                      </svg>
                      <div className="ml-4">
                        <Link href="/create-a-company-wiki-notion">
                          <Link className="text-base font-medium text-gray-900">Company Wiki</Link>
                        </Link>
                        <p className="mt-1 text-sm text-gray-500">Create a company wiki with protected access and AI to answer queries on top of Notion as a database.</p>
                      </div>
                    </li>
                    <li className="flex items-start p-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100">
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
                      <div className="ml-4">
                        <Link href="/create-a-blog-notion">
                          <Link className="text-base font-medium text-gray-900">Blog</Link>
                        </Link>
                        <p className="mt-1 text-sm text-gray-500">Create a beautiful blog for your startup or company with Notion and NotionBear.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link href="/affiliate" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out w-full justify-between border-b-2">Earn $$$</Link>
            </li>
            <li>
              <Link href="/pricing" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out w-full justify-between border-b-2">Pricing</Link>
            </li>
            <li>
              <Link href="/integration" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out w-full justify-between border-b-2">Integrations</Link>
            </li>
            <li>
              <Link href="/showcase" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out w-full justify-between border-b-2">Showcase</Link>
            </li>
            <li>
              <Link href="https://app.notionbear.com" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out w-full justify-between">Login</Link>
            </li>
            <li>
              <Link href="https://app.notionbear.com" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3 w-full justify-between">
                <span>Create a Site</span>
                <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                </svg>
              </Link>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  );
}
