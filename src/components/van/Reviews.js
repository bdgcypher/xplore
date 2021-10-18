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
                  Awe inspiring! Changed my life.
                </p>
              </a>
            </div>
            <p className="animated animatedFadeInUp mb-4 text-base text-gray-700 md:text-lg">
              Call it magical, call it unreal, call it whatever
              you want, this trip was sooooo cool!
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
                  Petru Vîrtos
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
                    What an experience
                  </p>
                </a>
              </div>
              <p className="animated animatedFadeInUp mb-4 text-base text-gray-700 md:text-lg">
                I loved the sphinx and the amazing architechture and history! It felt like I was living in the past. Sad I had to come back to the present. Thanks Xplore!
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
                    Travel Journalist
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
                    Hump Day!!!
                  </p>
                </a>
              </div>
              <p className="animated animatedFadeInUp mb-4 text-base text-gray-700 md:text-lg">
                My favorite part by faaarrrrr was the camel rides! It was so much fun and they were really weird :P 
                Plus the buffet is so good! I would definitely splurge and go for the premium package.
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
                    Susie the Cat
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