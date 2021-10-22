import React from 'react'
import Img from '../../images/van1.jpg'
import { BtnSlide } from '../Btn'

const Van = () => {
    return (
      <div className="px-8 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div>
            <img
              className="animated animatedFadeInUp object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src={Img}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="animated animatedFadeInUp max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-orange sm:text-4xl sm:leading-none">
                Retro van road trip
              </h2>
              <p className="animated animatedFadeInUp text-base text-gray-700 md:text-lg">
                In an oldschool style van converted to a tiny-home you are free to travel as much or little as you would like. 
                Rent now and cruise down the coast in style.
              </p>
            </div>
            <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
              <div>
                <h6 className="animated animatedFadeInUp mb-2 font-semibold leading-5">
                  Cruise, Park, Relax
                </h6>
                <p className="animated animatedFadeInUp text-sm text-gray-900">
                  Pick your route, and don't forget your Pj's because home is coming with <i>you</i> as you cruise down the coast 
                  and experience a taste of #vanlife. With a built in bed, solar-power, and plenty of space, you will feel at home while on the road.
                </p>
                <BtnSlide to="/van" primary={true} round={true} className="animated animatedFadeInUp flex h-12 w-40 mx-auto my-10 w-md text-md">Schedule Trip</BtnSlide>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  };

  export default Van