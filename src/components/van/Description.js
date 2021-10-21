import React from 'react'

const Description = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-screen-lg sm:mx-auto">
          <hr className="animated animatedFadeInUp bg-orange text-orange h-1 mb-20" />
          <div className="mb-20 lg:mb-0">
              <h2 className="animated animatedFadeInUp mb-4 text-3xl text-orange font-bold leading-none sm:text-4xl">
                Cruising old school 
              </h2>
              <p className="animated animatedFadeInUp mb-6">
                Ever hear of #vanlife? or seen pictures on instagram of people taking their things with them to travel the country?
                Well now you can be one of them for a while! Each of our Retro vans is decked out with a full bed and storage area for 
                your convenience as well as a solar panel and outlets so you don't have to sacrifice your stuff! Feel free to take whatever you want 
                and really enjoy the freedom.
              </p>
              <p className="animated animatedFadeInUp mx-20 font-bold mb-20">Rent from Xplore and get...</p>
          </div>
          <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
            <div className="mb-4 lg:mb-0">
              <h5 className="animated animatedFadeInUp mb-4 text-xl font-bold leading-none sm:text-2xl">
                Retro van rental
              </h5>
              <div className="relative pr-8">
                <p className="animated animatedFadeInUp text-base text-gray-700 md:text-lg">
                  Take your very own retro van to cruise the coast and see the sights!
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
            <div className="mb-4 lg:mb-0">
              <h5 className="animated animatedFadeInUp mb-4 text-xl font-bold leading-none sm:text-2xl">
                Customize your ride
              </h5>
              <div className="relative pr-8">
                <p className="animated animatedFadeInUp text-base text-gray-700 md:text-lg">
                  We offer a fully customizable interior so you can decorate it your way! Look through our options to find the perfect vibe to fit your ride.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
            <div className="mb-4 lg:mb-0">
              <h5 className="animated animatedFadeInUp mb-4 text-xl font-bold leading-none sm:text-2xl">
                We'll cover gas!
              </h5>
              <div className="relative pr-8">
                <p className="animated animatedFadeInUp text-base text-gray-700 md:text-lg">
                  Each rental comes with a "Gas card" that is loaded up with cash to cover a day's worth of fuel to get you where you want to go!
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