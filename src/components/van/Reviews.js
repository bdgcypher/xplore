import React from 'react'

const Reviews = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 row-gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="animated animatedFadeInUp mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
              20 Nov 2020
            </p>
            <div className="mb-3">
              <a
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                <p className="animated animatedFadeInUp font-sans text-xl text-orange font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl">
                  Loved it, but only for a bit
                </p>
              </a>
            </div>
            <p className="animated animatedFadeInUp mb-4 text-base text-gray-700 md:text-lg">
              This was an epic trip, I liked the freedom, but I miss my shower and my TV
            </p>
            <div className="animated animatedFadeInUp flex items-center">
                <a aria-label="Author" className="mr-3">
                    <img
                    alt="avatar"
                    src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                    />
                </a>
              <div>
                <a
                  aria-label="Author"
                  className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Sarah Suthers
                </a>
                <p className="text-sm font-medium leading-4 text-gray-600">
                  Tourist
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-8 lg:col-span-3">
            <div>
              <p className="animated animatedFadeInUp mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                14 Jul 2020
              </p>
              <div className="mb-3">
                <a
                  aria-label="Article"
                  className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  <p className="animated animatedFadeInUp font-sans text-xl text-orange font-extrabold leading-none tracking-tight lg:text-2xl">
                    #vanlife
                  </p>
                </a>
              </div>
              <p className="animated animatedFadeInUp mb-4 text-base text-gray-700 md:text-lg">
                I loved this trip so much, I am definitely going to get myself a van to keep!
              </p>
              <div className="animated animatedFadeInUp flex items-center">
                <a aria-label="Author" className="mr-3">
                  <img
                    alt="avatar"
                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                  />
                </a>
                <div>
                  <a
                    aria-label="Author"
                    className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Alex Stratulat
                  </a>
                  <p className="text-sm font-medium leading-4 text-gray-600">
                    Travel Enthusiast
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="animated animatedFadeInUp mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                18 Mar 2020
              </p>
              <div className="mb-3">
                <a
                  aria-label="Article"
                  className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  <p className="animated animatedFadeInUp font-sans text-xl text-orange font-extrabold leading-none tracking-tight lg:text-2xl">
                    Why not just go camping?
                  </p>
                </a>
              </div>
              <p className="animated animatedFadeInUp mb-4 text-base text-gray-700 md:text-lg">
                I guess it was cool to have a bed in the back, but why not just take my own car and pull over 
                to set up a tent for the night? The only thing that made it worthwhile was that they covered the gas costs.
              </p>
              <div className="animated animatedFadeInUp flex items-center">
                <a aria-label="Author" className="mr-3">
                  <img
                    alt="avatar"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                  />
                </a>
                <div>
                  <a
                    aria-label="Author"
                    className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Patrick String
                  </a>
                  <p className="text-sm font-medium leading-4 text-gray-600">
                    Tourist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Reviews