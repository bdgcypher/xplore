import React from 'react'
import styled from 'styled-components'
import { BtnSlide } from './Btn'

const Deals = () => {
    return (
        <CardsContainer>
            <CardsWrapper className="px-4 py-16 mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                        <CardImg
                        src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                        className="object-cover w-full h-64"
                        alt=""
                        />
                        <div className="p-5 border border-t-0">
                        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                            <a
                            href="/"
                            className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
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
                            className="inline-block mb-3 text-orange text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            Visit the East
                        </a>
                        <p className="mb-2 text-gray-700">
                            There are loads of Historical and cultural events to visit and experience in countries such as Spain, Italy, Slovakia, The Netherlands and more...
                        </p>
                        <BtnSlide className="inline-flex items-center font-semibold">View Destinations</BtnSlide>
                        </div>
                    </div>
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                        <CardImg
                        src="https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        className="object-cover w-full h-64"
                        alt=""
                        />
                        <div className="p-5 border border-t-0">
                        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                            <a
                            href="/"
                            className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
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
                            className="inline-block mb-3 text-orange text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            Simple is better
                        </a>
                        <p className="mb-2 text-gray-700">
                        Take some personal time in the upcoming winter months to shed your coat <i>and</i> your worries in one of our all-inclusive Resort Locations.
                        </p>
                        <BtnSlide className="inline-flex items-center font-semibold">See resort deals</BtnSlide>
                        </div>
                    </div>
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                        <CardImg
                        src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        className="object-cover w-full h-64"
                        alt=""
                        />
                        <div className="p-5 border border-t-0">
                        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                            <a
                            href="/"
                            className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
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
                            className="inline-block mb-3 text-orange text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            Film It!
                        </a>
                        <p className="mb-2 text-gray-700">
                            Looking to boost your camera career, or even just add some inspiration to your instagram page? Take one of our in-depth photography courses and really make those pictures <i>pop!</i>
                        </p>
                        <BtnSlide className="inline-flex items-center font-semibold">Get photography tips</BtnSlide>
                        </div>
                    </div>
                </div>
            </CardsWrapper>
      </CardsContainer>
    );
  };

export default Deals

const CardsContainer = styled.div`
  background: #EDE6E3;
`;

const CardsWrapper = styled.div`
  background: #EDE6E3;
`;

const CardImg = styled.img`
  transition: .3s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;