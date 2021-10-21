import React from 'react'
import Img from '../../images/about.jpg'

const Information = () => {
    return (
      <div id="information" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="animated animatedFadeInUp max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                <br className="hidden md:block" />
                Why choose{' '}
                <span className="relative px-1">
                  <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12" />
                  <span className="relative inline-block">
                    <i>Xplore</i>
                  </span>
                </span>
              </h2>
              <p className="animated animatedFadeInUp text-base text-gray-700 md:text-lg">
                Xplore is dedicated to helping everyday people experience the <i>extraordinary</i>. We think it is important for everyone to get the chance 
                to explore the Wonders of the World. We have a dedicated team of hardworking professionals who work hard to provide the deals and packages that 
                you deserve.
              </p>
            </div>
            <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
              <div className="animated animatedFadeInUp bg-white border-l-4 shadow-sm border-orange">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5">
                    Great deals
                  </h6>
                  <p className="text-sm text-gray-900">
                    No one else has the best prices on flights, hotels, and travel experiences. We have your budget in mind!
                  </p>
                </div>
              </div>
              <div className="animated animatedFadeInUp bg-white border-l-4 shadow-sm border-orange">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5">
                    Travel Tips
                  </h6>
                  <p className="text-sm text-gray-900">
                    New to travel? We have got you covered! We offer the latest on travel how-to's, packing plans, and photography tips.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="animated animatedFadeInUp object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src={Img}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };

  export default Information