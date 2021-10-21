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
                  So much fun!
                </p>
              </a>
            </div>
            <p className="animated animatedFadeInUp mb-4 text-base text-gray-700 md:text-lg">
              I can't believe I had never done this before! I am a little afraid of heights but the guides coached me 
              through everything and I didn't just climb a mountain, I overcame my fears!
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
                  Kaden Moteral
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
                    This was hard...
                  </p>
                </a>
              </div>
              <p className="animated animatedFadeInUp mb-4 text-base text-gray-700 md:text-lg">
                I wish I had prepared batter. Just because it is a guided tour doesn't mean they can carry you up the mountain... I was so tired at the end.
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
                    Arthur Cambell
                  </a>
                  <p className="text-sm font-medium leading-4 text-gray-600">
                    Travel Journalist
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="animated animatedFadeInUp mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                15 Sep 2021
              </p>
              <div className="mb-3">
                <a
                  aria-label="Article"
                  className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  <p className="animated animatedFadeInUp font-sans text-xl text-orange font-extrabold leading-none tracking-tight lg:text-2xl">
                    Woohoo!!
                  </p>
                </a>
              </div>
              <p className="animated animatedFadeInUp mb-4 text-base text-gray-700 md:text-lg">
                Definitely not for pansies, but I raced up those walls! The tour guides could barely keep up :P
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
                    Stewart Martin
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