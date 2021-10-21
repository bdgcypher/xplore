import React from 'react'

const Header = () => {
    return (
      <div className="-mt-20 mb-60">
        <div className="bg-gray-900 h-20 w-full" />
        <div className="relative bg-eggshell">
          <div className="absolute inset-x-0 bottom-0">
            <svg
              viewBox="0 0 224 12"
              fill="currentColor"
              className="w-full -mb-1 text-white"
              preserveAspectRatio="none"
            >
              <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
            </svg>
          </div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
              <h2 className="header animated fadeInUp max-w-lgmb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Learn more about <i>Xplore</i>{' '}
              </h2>
              <p className="header2 animated fadeInUp mb-6 text-base text-gray-700 md:text-lg">
                Want to hear the latest that we have to offer? Sign up and we will keep you posted!
              </p>
              <form className="header3 animated fadeInUp flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
                <input
                  placeholder="Email"
                  required
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded-full shadow-md md:w-auto bg-orange hover:bg-cyan focus:shadow-outline focus:outline-none"
                >
                  Subscribe
                </button>
              </form>
              <p className="header4 animated fadeInUp max-w-md mb-10 text-xs tracking-wide text-gray-700 sm:text-sm sm:mx-auto md:mb-16">
                <i>Xplore</i> respects your privacy. Feel free to unsubscribe at any time.
              </p>
              <a
                href="#information"
                aria-label="Scroll down"
                className="header5 bounce flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform bg-orange rounded-full hover:bg-cyan hover:shadow hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                >
                  <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Header