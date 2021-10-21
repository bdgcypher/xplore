import React from 'react'

const Description = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-screen-lg sm:mx-auto">
          <hr className="animated animatedFadeInUp bg-orange text-orange h-1 mb-20" />
          <div className="mb-20 lg:mb-0">
              <h2 className="animated animatedFadeInUp mb-4 text-3xl text-orange font-bold leading-none sm:text-4xl">
                A world lost in time
              </h2>
              <p className="animated animatedFadeInUp mb-6">
                Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru. 
                The Urubamba River flows past it, cutting through the Cordillera and creating a canyon with a tropical mountain climate. 
                Machu Picchu was built in the classical Inca style, with polished dry-stone walls. Its three primary structures are the 
                Intihuatana, the Temple of the Sun, and the Room of the Three Windows. Most of the outlying buildings have been 
                reconstructed in order to give visitors a better idea of how they originally appeared. You will be astounded by the vast beauty of these ruins.
              </p>
              <p className="animated animatedFadeInUp mx-20 font-bold mb-20">Book with Xplore and get...</p>
          </div>
          <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
            <div className="mb-4 lg:mb-0">
              <h5 className="animated animatedFadeInUp mb-4 text-xl font-bold leading-none sm:text-2xl">
                Ruins tour
              </h5>
              <div className="relative pr-8">
                <p className="animated animatedFadeInUp text-base text-gray-700 md:text-lg">
                  Take a guided tour of the 3 main stuctures. We especially like the <i>Temple of the Sun</i>.
                  Tour guides will recount you with some historical facts and stories
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
            <div className="mb-4 lg:mb-0">
              <h5 className="animated animatedFadeInUp mb-4 text-xl font-bold leading-none sm:text-2xl">
                Unguided exploration
              </h5>
              <div className="relative pr-8">
                <p className="animated animatedFadeInUp text-base text-gray-700 md:text-lg">
                  On your trip you will also get the opportunity to explore for yourself and hike around the mountainside.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
            <div className="mb-4 lg:mb-0">
              <h5 className="animated animatedFadeInUp mb-4 text-xl font-bold leading-none sm:text-2xl">
                The Food!
              </h5>
              <div className="relative pr-8">
                <p className="animated animatedFadeInUp text-base text-gray-700 md:text-lg">
                  At the end of your time exploring and hiking you can sit down for an authentic peruvian dinner 
                  with foods such as Empanadas, Ceviche, and Rocoto Relleno (Stuffed Spicy Peppers).
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