'use client'

import { useState } from 'react'

export default function Banner() {

  const [bannerOpen, setBannerOpen] = useState<boolean>(true)

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 left-0 ml-4 w-full sm:w-fit md:bottom-8 md:left-12 md:w-auto z-50">
          <div>

            <button 
              type="button" 
              className="bg-gray-800 text-xs font-bold shadow-lg backdrop-blur-lg rounded-md flex items-center text-white p-2"
            >
              <span className="hidden sm:inline">Made with</span>
              <svg 
                width="38" 
                height="20" 
                viewBox="0 0 199 246" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-auto mx-2"
              >
                {/* SVG paths */}
                <path d="M48.4565 270C40.408 255.107 18.7558 204.177 10.2744 184.059C8.12025 178.95 8.99356 173.108 12.5052 168.818L15.1749 165.557C19.307 160.509 19.5212 153.42 17.0947 147.364C15.4933 143.366 14.3989 138.975 15.5411 135.952C17.5669 130.589 31.4002 97.4769 37.616 82.6252C39.5083 78.104 39.0489 72.9649 36.85 68.5836C30.4837 55.8988 19.9693 28.7719 37.8099 14.8635C54.8944 1.54463 74.7545 17.7032 84.5849 27.8598C88.5699 31.9771 94.3162 34.2056 99.9396 33.1107L150.42 23.282C152.633 22.851 154.916 22.9247 157.097 23.4976L199.836 34.7224C205.598 36.2357 211.69 34.1781 215.94 30.0059C225.909 20.2217 245.231 5.44702 260.502 19.2083C276.025 33.1975 268.664 54.2626 263.33 64.9554C261.155 69.3137 260.495 74.3918 262.173 78.9651C267.634 93.8525 279.587 126.94 280.235 133.114C281.078 141.132 273.451 148.985 274.322 155.503C275.193 162.022 286.163 161.734 285.787 181.232C285.411 200.729 252.296 249.804 236.457 270" stroke="currentColor" strokeWidth="18"></path>
                <path d="M119.132 239.453L166.102 240.369C175.367 240.55 183.971 235.591 188.458 227.484L196.235 213.434C198.206 209.872 199.278 205.882 199.356 201.811L199.907 173.21C200.01 167.888 198.411 162.672 195.344 158.321L181.347 138.465C180.246 136.904 178.97 135.473 177.543 134.202L161.593 119.991C151.525 111.021 136.159 111.649 126.861 121.411L99.817 149.802C95.177 154.673 92.6968 161.21 92.937 167.934L94.6302 215.344C95.104 228.609 105.862 239.194 119.132 239.453Z" fill="currentColor" stroke="currentColor" strokeWidth="2"></path>
                <path d="M88.8435 88.9999L88.7665 92.9991M212.415 90.4106L212.337 94.4099" stroke="currentColor" strokeWidth="25" strokeLinecap="round"></path>
                <path d="M151.829 215.92L138.876 215.667" stroke="currentColor" strokeWidth="20" strokeLinecap="round"></path>
                <path d="M151.977 193.03C148.44 196.26 142.993 196.153 139.584 192.788L120.63 174.076C114.843 168.363 118.996 158.515 127.126 158.674L165.74 159.427C173.87 159.586 177.64 169.589 171.638 175.071L151.977 193.03Z" fill="black"></path>
                <path d="M214.303 37.311C214.303 37.311 230.103 19.1163 244.609 16.3988C259.114 13.6812 264.324 27.7855 264.324 27.7855" stroke="currentColor" strokeWidth="5" strokeLinecap="round"></path>
                <path d="M85.7621 35.2237C85.7621 35.2237 70.6746 16.4264 56.2848 13.1451C41.895 9.86381 36.1452 23.7542 36.1452 23.7542" stroke="currentColor" strokeWidth="5" strokeLinecap="round"></path>
              </svg>
              <span className="hidden sm:inline">Notion Bear</span>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
