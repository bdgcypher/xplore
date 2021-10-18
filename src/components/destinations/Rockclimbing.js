import React from 'react'
import Img from '../../images/rockclimbing1.jpg'
import { BtnSlide } from '../Btn'

const Rockclimbing = () => {
    return (
      <div className="px-8 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="animated animatedFadeInUp max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-orange sm:text-4xl sm:leading-none">
                Climbing Tour
              </h2>
              <p className="animated animatedFadeInUp text-base text-gray-700 md:text-lg">
                The Rocky Mountains are a major mountain range and the largest mountain system in North America. 
                Through <i>Xplore</i> you can take a guided Hiking or climbing excursion through their natural beauty.
              </p>
            </div>
            <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
              <div>
                <h6 className="animated animatedFadeInUp mb-2 font-semibold leading-5">
                  Climb, Explore, and Overcome
                </h6>
                <p className="animated animatedFadeInUp text-sm text-gray-900">
                  With Rocky Ridges, and Crazy Cliffsides, Green Slopes and Shimmering Streams, you will love our guided hiking and climbing tours.
                  A 100% professionally certified guide will lead you through a series of climbs to reach the peaks. All equipment is included and Rations are provided. 
                  All you'll need is your camera and the spirit of <i>Adventure</i>.
                </p>
                <BtnSlide to="/xplore/rockclimbing" primary={true} round={true} className="animated animatedFadeInUp flex h-12 w-40 mx-auto my-10 w-md text-md">See Availability</BtnSlide>
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

  export default Rockclimbing