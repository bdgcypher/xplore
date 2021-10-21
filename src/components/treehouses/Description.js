import React from 'react'

const Description = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-screen-lg sm:mx-auto">
          <hr className="animated animatedFadeInUp bg-orange text-orange h-1 mb-20" />
          <div className="mb-20 lg:mb-0">
              <h2 className="animated animatedFadeInUp mb-4 text-3xl text-orange font-bold leading-none sm:text-4xl">
                The great outdoors... in your bedroom!
              </h2>
              <p className="animated animatedFadeInUp mb-6">
                With over 30 different locations worldwide you have some options to choose from. Each Treehouse hotel is different, 
                but they all offer a few things in common. Incredible views, beautiful woodwork, cozy cabin-like interiors, and they 
                are all nestled into the arms of beautiful foliage
              </p>
              <p className="animated animatedFadeInUp mx-20 font-bold mb-20">Book with Xplore and get...</p>
          </div>
          <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
            <div className="mb-4 lg:mb-0">
              <h5 className="animated animatedFadeInUp mb-4 text-xl font-bold leading-none sm:text-2xl">
                Private rooms
              </h5>
              <div className="relative pr-8">
                <p className="animated animatedFadeInUp text-base text-gray-700 md:text-lg">
                  Get your own cozy, private rooms at one of our 30 locations.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
            <div className="mb-4 lg:mb-0">
              <h5 className="animated animatedFadeInUp mb-4 text-xl font-bold leading-none sm:text-2xl">
                Skywalk
              </h5>
              <div className="relative pr-8">
                <p className="animated animatedFadeInUp text-base text-gray-700 md:text-lg">
                  Many of our locations include beautiful bridges that extend high above the canopy, offering you the experience of walking on air.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
            <div className="mb-4 lg:mb-0">
              <h5 className="animated animatedFadeInUp mb-4 text-xl font-bold leading-none sm:text-2xl">
                Free Wifi and more
              </h5>
              <div className="relative pr-8">
                <p className="animated animatedFadeInUp text-base text-gray-700 md:text-lg">
                  Not only will you feel free, you can relax to music or snuggle up to watch your favorite shows with free wifi and TV accessories.
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