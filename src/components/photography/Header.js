import React from 'react'
import styled from 'styled-components'
import Img1 from '../../images/photography1.jpg'

const Header = () => {
    return (
    <div className="-mt-20 mb-60 bg-eggshell overflow-hidden">
      <div className="bg-gray-900 h-20 w-full" />
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <svg
      className=" z-10 absolute inset-x-0 -bottom-1 text-white"
      viewBox="0 0 1160 163"
      >
        <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
        />
      </svg>
        <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div>
                <p className="header animated fadeInUp inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-orange">
                  New
                </p>
              </div>
              <h2 className="header animated fadeInUp max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                <i>Xplore's</i> top 5{' '}
                <br className="hidden md:block" />
                photography tips.
              </h2>
              <p className="header2 animated fadeInUp text-base text-gray-700 md:text-lg">
                Tips and tricks to make your memories last forever!
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
                <a
                href="#steps"
                aria-label="Scroll down"
                className="header5 bounce flex items-center justify-center z-10 w-10 h-10 mx-auto mt-10 text-white duration-300 transform bg-orange rounded-full hover:bg-cyan hover:shadow hover:scale-110"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                    >
                        <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
                    </svg>
                </a>
            </div>
          </div>
        </div>
        <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <Img
            className="header3 animated fadeInUp object-cover z-1 w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
            src={Img1}
            alt=""
          />
        </div>
      </div>
    </div>  
    );
  };

  export default Header;

  const Img = styled.img`
    filter: brightness(70%);
  `;