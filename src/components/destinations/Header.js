import React from 'react'
import header from '../../images/peru1.jpg'
import styled from 'styled-components'
import { Btn } from '../Btn'
import { FaCaretDown } from 'react-icons/fa'
import './Header.css'

const Header = () => {
    return (
      <div className="relative -mt-20">
        <Img
          src={header}
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
          <svg
            className="absolute inset-x-0 -bottom-1 text-white"
            viewBox="0 0 1160 163"
          >
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg>
          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col mt-20 items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="header animated fadeInUp max-w-lg mb-20 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  The <i>greatest</i> adventure you've <br className="hidden md:block" />
                   ever had is just a click away
                </h2>
                <a
                href="#trip1"
                aria-label="Scroll down"
                className="header4 bounce flex items-center justify-center w-10 h-10 mx-auto mt-10 text-white duration-300 transform bg-orange rounded-full hover:bg-cyan hover:shadow hover:scale-110"
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
              <div className="w-full mt-20 max-w-xl xl:px-8 xl:w-5/12">
                <div className="header2 animated fadeInUp bg-white rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="header3 animated fadeInUp mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Machu Picchu, Peru
                  </h3>
                  <p className="header4 animated fadeInUp mt-10 mb-32">
                      <i>Live</i> the past as you hike through the Ancient Incan ruins of Machu Picchu. 
                      With an all inclusive vacation deal you can take a guided tour of the ruins,
                      experience authentic peruvian cuisine, and be a part of the colorful culture
                  </p>
                  <Btn to="/machupicchu" primary={true} round={true} className="header5 animated fadeInUp inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-orange hover:bg-white focus:shadow-outline focus:outline-none">View Destination</Btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Header

  const Img = styled.img`
    filter: brightness(50%);
  `;

  const DownBtn = styled(FaCaretDown)`
    height: 50px;
    width: 50px;
    margin-top: 10px;
    border-radius: 50px;
    background: #F06449;
    color: #fff;
    transition: 0.3s ease-out !important;

    &:hover {
      transform: translateY(-2px);
      background: #5BC3EB;
      color: #fff;
    }
  `;