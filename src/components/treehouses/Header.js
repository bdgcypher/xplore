import React from 'react'
import styled from 'styled-components'
import Img1 from '../../images/treehouse1.jpg'
import Img2 from '../../images/treehouse2.jpg'
import Img3 from '../../images/treehouse3.jpg'

const Header = () => {
    return (
        <div className="-mt-20 mb-20">
            <div className="bg-gray-900 h-20 w-full" />
            <div className="h-full px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="flex items-center justify-center -mx-4 lg:pl-8">
                        <div className="header animated fadeInUp flex flex-col items-end px-3">
                            <CardImg
                                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                                src={Img1}
                                alt=""
                            />
                            <CardImg
                                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                                src={Img2}
                                alt=""
                            />
                        </div>
                        <div className="header2 animated fadeInUp z-20 px-3">
                            <CardImg
                                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                                src={Img3}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                        <div className="max-w-xl mb-6">
                            <h2 className="header3 animated fadeInUp max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-orange sm:text-4xl sm:leading-none">
                                Treehouse Hotel{' '}
                                <span className="inline-block text-deep-purple-accent-400">
                                package
                                </span>
                            </h2>
                            <p className="header4 animated fadeInUp text-base text-gray-700 md:text-lg">
                                The kid in all of us wants to live in a treehouse. Just take care if you're afraid of heights!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };

  export default Header

  const CardImg = styled.img`
    z-index: 20;
    transition: .3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;