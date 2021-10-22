import React from 'react'
import Img1 from '../../images/homepage.png'
import Img2 from '../../images/subscribe.jpg'

export const Subscribe = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-center">
        <h1 className="animated animatedFadeInUp mb-10 text-xl">Not what you're looking for?</h1>
        <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
          <div className="animated animatedFadeInUp transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
            <div className="relative">
              <img
                className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                src={Img1}
                alt=""
              />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
            </div>
            <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
              <h5 className="animated animatedFadeInUp mb-2 text-xl font-bold leading-none sm:text-2xl">
                Check out our homepage
              </h5>
              <p className="animated animatedFadeInUp mb-5 mx-14 text-gray-700">
                Get more information on our other services or contact us with questions.
              </p>
              <a
                href="/"
                type="submit"
                className="animated animatedFadeInUp inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 shadow-md bg-cyan hover:bg-orange focus:shadow-outline focus:outline-none"
              >
                Back to Home
              </a>
            </div>
          </div>
          <div className="animated animatedFadeInUp transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
            <div className="relative">
              <img
                className="object-cover w-full h-64 rounded-t lg:h-64 xl:h-72"
                src={Img2}
                alt=""
              />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
            </div>
            <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
              <h5 className="animated animatedFadeInUp mb-5 text-xl font-bold leading-none sm:text-2xl">
                Subscribe for other offers
              </h5>
              <form>
                    <div className="mb-1 sm:mb-2">
                      <input
                        placeholder="Name"
                        required
                        type="text"
                        className="animated animatedFadeInUp flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="name"
                        name="name"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <input
                        placeholder="Email"
                        required
                        type="text"
                        className="animated animatedFadeInUp flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="animated animatedFadeInUp inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 shadow-md bg-cyan hover:bg-orange focus:shadow-outline focus:outline-none"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Subscribe