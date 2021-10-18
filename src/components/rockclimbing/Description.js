import React from 'react'

const Description = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-screen-lg sm:mx-auto">
          <hr className="animated animatedFadeInUp bg-orange text-orange h-1 mb-20" />
          <div className="mb-20 lg:mb-0">
              <h2 className="animated animatedFadeInUp mb-4 text-3xl text-orange font-bold leading-none sm:text-4xl">
                One of the Seven Wonders of the Ancient World 
              </h2>
              <p className="animated animatedFadeInUp mb-6">
                The last remaining of the Seven Wonders of the ancient world, the great pyramids of Giza are perhaps the most famous and 
                discussed structures in history. These massive monuments were unsurpassed in height for thousands of years after their 
                construction and continue to amaze and enthrall us with their overwhelming mass and seemingly impossible perfection. 
                Their exacting orientation and mind-boggling construction has elicited many theories about their origins, including 
                unsupported suggestions that they had extra-terrestrial impetus. However, by examining the several hundred years prior 
                to their emergence on the Giza plateau, it becomes clear that these incredible structures were the result of many experiments, 
                some more successful than others. Despite this they are still wonderful to behold.
              </p>
              <p className="animated animatedFadeInUp mx-20 font-bold mb-20">Book with Xplore and get...</p>
          </div>
          <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
            <div className="mb-4 lg:mb-0">
              <h5 className="animated animatedFadeInUp mb-4 text-xl font-bold leading-none sm:text-2xl">
                Pyramid Tour
              </h5>
              <div className="relative pr-8">
                <p className="animated animatedFadeInUp text-base text-gray-700 md:text-lg">
                  Take a guided tour of the Pyramid of Khufu (the largest) and walk around the 3 pyramid complexes. 
                  Tour guides will inform you of some historical facts, scary mummy stories and more...
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
            <div className="mb-4 lg:mb-0">
              <h5 className="animated animatedFadeInUp mb-4 text-xl font-bold leading-none sm:text-2xl">
                Camel Ride
              </h5>
              <div className="relative pr-8">
                <p className="animated animatedFadeInUp text-base text-gray-700 md:text-lg">
                  In the desert lanscape of egypt there is only 1 way for a tourist to travel in style! You can ride a camel 
                  around the pyramid complexes and feel like a character in the movie <i>Hump</i>.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
            <div className="mb-4 lg:mb-0">
              <h5 className="animated animatedFadeInUp mb-4 text-xl font-bold leading-none sm:text-2xl">
                The Great Sphinx of Giza
              </h5>
              <div className="relative pr-8">
                <p className="animated animatedFadeInUp text-base text-gray-700 md:text-lg">
                  One of the world's greatest wonders, the sphynx is truly a sight to Behold. As part of our Premium package you will have the chance to stand 
                  right up next to the sphinx and take photos and make some of the best memories imaginable.
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