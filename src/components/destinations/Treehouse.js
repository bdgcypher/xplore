import React from 'react'
import Img from '../../images/treehouse1.jpg'
import { BtnSlide } from '../Btn'

const Treehouse = () => {
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
                Tree-top Hotel
              </h2>
              <p className="animated animatedFadeInUp text-base text-gray-700 md:text-lg">
              Some hotels are built high in the trees with branches as structural elements! For example the <i>Treehotel</i> near Piteå, 
              Sweden or the Costa Rican <i>Tree House</i> near the Jairo Mora Sandoval.
              </p>
            </div>
            <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
              <div>
                <h6 className="animated animatedFadeInUp mb-2 font-semibold leading-5">
                  Skybridges, Treehouses, and Beautiful Views
                </h6>
                <p className="animated animatedFadeInUp text-sm text-gray-900">
                  Spend a week (or more) in one of these incredible treehouse hotels with meal plan, skywalk, and luxury sweet. 
                  You will never feel more free than when defying gravity in one of these terrific treehouse getaways.
                </p>
                <BtnSlide to="/xplore/treehouse" primary={true} round={true} className="animated animatedFadeInUp flex h-12 w-40 mx-auto my-10 w-md text-md">Great Deals</BtnSlide>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  };

  export default Treehouse