import React from 'react'

const Description = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-screen-lg sm:mx-auto">
          <hr className="animated animatedFadeInUp bg-orange text-orange h-1 mb-20" />
          <div className="mb-20 lg:mb-0">
              <h2 className="animated animatedFadeInUp mb-4 text-3xl text-orange font-bold leading-none sm:text-4xl">
                Embrace your inner mountain man
              </h2>
              <p className="animated animatedFadeInUp mb-6">
                The Rocky Mountains, also known as the Rockies, are the largest mountain system in North America. 
                The Rocky Mountains stretch 3,000 miles in straight-line distance from the northernmost part of western Canada, 
                to New Mexico in southwestern United States. The Rockies are also home to a variety of plants, wildlife, hikers and climbers. 
                With <i>enourmous</i> jagged peaks and endless stretches of trees, these glorious mountains will take your breath away.
              </p>
              <p className="animated animatedFadeInUp mx-20 font-bold mb-20">Schedule now and get...</p>
          </div>
          <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
            <div className="mb-4 lg:mb-0">
              <h5 className="animated animatedFadeInUp mb-4 text-xl font-bold leading-none sm:text-2xl">
                Guided hiking/climbing tour
              </h5>
              <div className="relative pr-8">
                <p className="animated animatedFadeInUp text-base text-gray-700 md:text-lg">
                  Take a guided tour of some of the greatest spots in the rockies. Our certified guides will lead you up and through the winding canyons and up to the precarious peaks!
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
            <div className="mb-4 lg:mb-0">
              <h5 className="animated animatedFadeInUp mb-4 text-xl font-bold leading-none sm:text-2xl">
                Equipment provided
              </h5>
              <div className="relative pr-8">
                <p className="animated animatedFadeInUp text-base text-gray-700 md:text-lg">
                  All climbing tours come with all the necessary equipment such as ropes, helmets and harnesses, climbing picks, and caribeeners.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
            <div className="mb-4 lg:mb-0">
              <h5 className="animated animatedFadeInUp mb-4 text-xl font-bold leading-none sm:text-2xl">
                Hungry? not with us!
              </h5>
              <div className="relative pr-8">
                <p className="animated animatedFadeInUp text-base text-gray-700 md:text-lg">
                  We won't leave you starving! Full rations and refreshments are provided at no cost to you. 
                </p>
              </div>
            </div>
          </div>
          <hr className="animated animatedFadeInUp bg-orange text-orange h-1 mt-20" />
        </div>
      </div>
    );
  };

  export default Description