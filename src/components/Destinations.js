import React from 'react'
import pic1 from '../images/camels1.jpg'
import pic2 from '../images/treehouse1.jpg'
import pic3 from '../images/rockclimbing1.jpg'
import pic4 from '../images/van1.jpg'
import { Btn, BtnSlide } from './Btn'

const Destinations = () => {
    return (
        <div className="bg-eggshell">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-eggshell">
                <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
                    <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-orange sm:text-4xl sm:leading-none md:mb-6 group">
                        <span className="inline-block mb-1 sm:mb-4">
                        Wake yourself up to the 
                        <br className="hidden md:block" />
                        Wonders of the World
                        </span>
                        <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
                    </h2>
                    <p className="text-gray-700 lg:text-sm lg:max-w-md">
                        Many of us find ourselves lost in an endless cycle of waking up to the monotonous chores of everyday life. Work, School, doctor's appointments, car repairs, the list goes on...
                        but now with Xplore you can wake up to a new adventure every morning!
                    </p>
                </div>
                <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
                    <a href="/" aria-label="View Item">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-full md:h-64 xl:h-80"
                            src={pic1}
                            alt=""
                        />
                        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-4 text-lg font-bold text-orange">Giza Pyramids</p>
                            <p className="text-sm tracking-wide text-gray-300">
                                Initially standing at 146.5 metres (481 feet) tall, the Giza Pyramids were the tallest man-made structures in the world for more than 3,800 years.
                            </p>
                            <BtnSlide primary={true} round={true} className="flex my-10 px-10 w-md">Visit this destination</BtnSlide>
                        </div>
                        </div>
                    </a>
                    <a href="/" aria-label="View Item">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-full md:h-64 xl:h-80"
                            src={pic2}
                            alt=""
                        />
                        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-4 text-lg font-bold text-orange">
                            Tree-top Hotel
                            </p>
                            <p className="text-sm tracking-wide text-gray-300">
                                Some hotels are built high in the trees with branches as structural elements! For example the <i>Treehotel</i> near Piteå,
                                Sweden or the Costa Rican <i>Tree House</i> near the Jairo Mora Sandoval.
                            </p>
                            <BtnSlide primary={true} round={true} className="flex my-10 px-10 w-md">Schedule a stay here</BtnSlide>
                        </div>
                        </div>
                    </a>
                    <a href="/" aria-label="View Item">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-full md:h-64 xl:h-80"
                            src={pic3}
                            alt=""
                        />
                        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-4 text-lg font-bold text-orange">Rocky Mountains</p>
                            <p className="text-sm tracking-wide text-gray-300">
                                The Rocky Mountains are a major mountain range and the largest mountain system in North America.
                                Through <i>Xplore</i> you can take a guided Hiking or climbing excursion through their natural beauty.
                            </p>
                            <BtnSlide primary={true} round={true} className="flex my-10 px-10 w-md">Getaway to the wild</BtnSlide>
                        </div>
                        </div>
                    </a>
                    <a href="/" aria-label="View Item">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-full md:h-64 xl:h-80"
                            src={pic4}
                            alt=""
                        />
                        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-4 text-lg font-bold text-orange">
                            Retro van road trip
                            </p>
                            <p className="text-sm tracking-wide text-gray-300">
                            In an oldschool style van converted to a tiny-home you are free to travel as much or little as you would like. 
                            Rent now and cruise down the coast in style.
                            </p>
                            <BtnSlide primary={true} round={true} className="flex my-10 px-10 w-md">Plan your Van-cation</BtnSlide>
                        </div>
                        </div>
                    </a>
                </div>
                <div className="text-center">
                    <Btn>
                        View All
                        <svg
                        className="inline-block w-3 ml-2"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                        >
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                        </svg>
                    </Btn>
                </div>
            </div>
        </div>
    );
  };

export default Destinations