import React from 'react'
import styled from 'styled-components'
import { FaPaperPlane } from 'react-icons/fa'
import { MdDirectionsBoat, MdHotel } from 'react-icons/md'
import { FaSuitcaseRolling } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Features = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-28 -mt-8 -ml-20 text-orange lg:w-28 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                  width="52"
                  height="24"
                />
              </svg>
            </span>{' '}
            Start planning your next trip
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Find your perfect vacation and book with confidence with Xplore's team of trained proffessionals. Great deals Guaranteed!
          </p>
        </div>
        <div className="grid gap-4 row-gap-5 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureBox className="flex flex-col justify-between p-4 w-24 h-32 overflow-hidden border rounded shadow-sm hover:min-w-32">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 px-2 text-5xl"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <FaPaperPlane />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5 text-orange">Flights</h6>
              <p className="mb-3 text-sm text-gray-900">
                
              </p>
            </div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </FeatureBox>
          <FeatureBox className="flex flex-col justify-between p-4 w-24 h-32 overflow-hidden border rounded shadow-sm">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                    className="w-12 h-12 px-2 text-5xl"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                    >
                    <MdDirectionsBoat />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5 text-orange">Cruises</h6>
              <p className="mb-3 text-sm text-gray-900">
                
              </p>
            </div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </FeatureBox>
          <FeatureBox className="flex flex-col justify-between p-4 w-24 h-32 overflow-hidden border rounded shadow-sm">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                    className="w-12 h-12 px-2 text-5xl"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                    >
                    <MdHotel />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5 text-orange">Stays</h6>
              <p className="mb-3 text-sm text-gray-900">
                
              </p>
            </div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </FeatureBox>
          <FeatureBox className="flex flex-col justify-between p-4 w-24 h-32 overflow-hidden border rounded shadow-sm">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                    className="w-12 h-12 px-2 text-5xl"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                    >
                    <FaSuitcaseRolling />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5 text-orange">Packages</h6>
              <p className="mb-3 text-sm text-gray-900">
                
              </p>
            </div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </FeatureBox>
        </div>
      </div>
    );
  };

  export default Features

  const FeatureBox = styled(Link)`

    &:hover {
        border-left: 2px solid #F06449;
    }
  `;