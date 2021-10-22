import React from 'react'
import Img from '../../images/camels1.jpg'
import { BtnSlide } from '../Btn'

const Camels = () => {
    return (
      <div id="trip1" className="px-8 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="animated animatedFadeInUp max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-orange sm:text-4xl sm:leading-none">
                Giza Pyramids
              </h2>
              <p className="animated animatedFadeInUp text-base text-gray-700 md:text-lg">
              Initially standing at 146.5 metres (481 feet) tall, the Giza Pyramids were the tallest man-made structures in the world for more than 3,800 years.
              </p>
            </div>
            <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
              <div>
                <h6 className="animated animatedFadeInUp mb-2 font-semibold leading-5">
                  Camel Rides, Pyramids, and more
                </h6>
                <p className="animated animatedFadeInUp text-sm text-gray-900">
                  Take a trip into the past, where mummies were plentiful, and the standard transportation had humps!
                  With our Giza Pyramids package you can see the grand egyptian pyramids, ride camels, and even stand 
                  under the watchful gaze of the <i>Great Sphynx</i> of Giza.
                </p>
                <BtnSlide to="/camels" primary={true} round={true} className="animated animatedFadeInUp flex h-12 w-40 mx-auto my-10 w-md text-md">More Details</BtnSlide>
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

  export default Camels