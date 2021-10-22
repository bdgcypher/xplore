import React from 'react'
import styled from 'styled-components'
import { BtnSlide } from '../Btn'

const Deals = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    <div className="animated animatedFadeInUp overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                        <CardImg
                        src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                        className="object-cover w-full h-64"
                        alt=""
                        />
                        <div className="p-5 border border-t-0">
                        <p className="animated animatedFadeInUp mb-3 text-xs font-semibold tracking-wide uppercase">
                            <a
                            href="/"
                            className="transition-colors duration-200"
                            aria-label="Category"
                            title="traveling"
                            >
                            traveling
                            </a>
                            <span className="text-gray-600"> — spring {new Date().getFullYear()}?</span>
                        </p>
                        <a
                            href="/"
                            aria-label="Category"
                            title="Visit the East"
                            className="animated animatedFadeInUp inline-block mb-3 text-orange text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            See the World
                        </a>
                        <p className="animated animatedFadeInUp mb-2 text-gray-700">
                            There are loads of Historical and cultural events to visit and experience in countries such as Egypt, The United States, Slovakia, The Netherlands and more...
                        </p>
                        <BtnSlide to="/destinations" className="inline-flex items-center font-semibold">View Destinations</BtnSlide>
                        </div>
                    </div>
                    <div className="animated animatedFadeInUp overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                        <CardImg
                        src="https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        className="object-cover w-full h-64"
                        alt=""
                        />
                        <div className="p-5 border border-t-0">
                        <p className="animated animatedFadeInUp mb-3 text-xs font-semibold tracking-wide uppercase">
                            <a
                            href="/"
                            className="animated animatedFadeInUp transition-colors duration-200 "
                            aria-label="Category"
                            title="traveling"
                            >
                            traveling
                            </a>
                            <span className="text-gray-600"> — Dec-Feb {new Date().getFullYear()}?</span>
                        </p>
                        <a
                            href="/"
                            aria-label="Category"
                            title="Simple is better"
                            className="animated animatedFadeInUp inline-block mb-3 text-orange text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            Simple is better
                        </a>
                        <p className="animated animatedFadeInUp mb-2 text-gray-700">
                        Take some personal time in the upcoming winter months to shed your coat <i>and</i> your worries in one of our all-inclusive Resort Locations.
                        </p>
                        <BtnSlide to="/treehouse" className="inline-flex items-center font-semibold">See resort deals</BtnSlide>
                        </div>
                    </div>
                    <div className="animated animatedFadeInUp overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                        <CardImg
                        src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        className="object-cover w-full h-64"
                        alt=""
                        />
                        <div className="p-5 border border-t-0">
                        <p className="animated animatedFadeInUp mb-3 text-xs font-semibold tracking-wide uppercase">
                            <a
                            href="/xplore"
                            className="transition-colors duration-200 "
                            aria-label="Category"
                            title="traveling"
                            >
                            traveling
                            </a>
                            <span className="text-gray-600"> — summer {new Date().getFullYear()}?</span>
                        </p>
                        <a
                            href="/"
                            aria-label="Category"
                            title="Film It!"
                            className="animated animatedFadeInUp inline-block mb-3 text-orange text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            Film It!
                        </a>
                        <p className="animated animatedFadeInUp mb-2 text-gray-700">
                            Looking to boost your camera career, or even just add some inspiration to your instagram page? Take one of our in-depth photography courses and really make those pictures <i>pop!</i>
                        </p>
                        <BtnSlide to="/photography" className="inline-flex items-center font-semibold">Get photography tips</BtnSlide>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
  };

export default Deals

const CardImg = styled.img`
  transition: .3s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;