'use client'


import React, { useState, useEffect } from 'react'; // Import React hooks
import Image from 'next/image'; // Import the Image component from Next.js
import notionfooterImage from '@/public/images/notionfooter.png';

export default function Newsletter() {
  const words = ["Helpdesk", "marketplaces", "Blog", "Company Wiki", "Documentation" , "Directories"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000); // Change word every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" 
          >

            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" >

             

            <Image alt="Logo" 
              width={400} 
              className="block" 
              src={notionfooterImage} />



            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">Ready to turn your Notion pages into <span className=" -translate-y-full slideUp h-full w-full bg-clip-text text-transparent text-orange-600">{words[index]}</span> ?</h3>
                <p className="text-xl text-gray-600 mb-4">Join the NotionBear AI and discover the easiest way to manage your website.</p>

                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <input type="email" className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" placeholder="I want a site that…" aria-label="I want a site..." />
                    <a className="btn text-white bg-orange-600 hover:bg-orange-700 shadow" href="#0">Create</a>
                  </div>
                  {/* Success message */}
                  {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                  <p className="text-sm text-gray-400 mt-3">Phew! Hassle free life starts here.</p>
                </form>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}