import React from 'react'
import Img1 from '../../images/photography3.jpg'

const Conclusion = () => {
    return (
    <div className="overflow-hidden">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <img
              src={Img1}
              alt=""
              className="object-cover w-full lg:absolute h-80 lg:h-full"
            />
            <svg
              className="absolute top-0 right-0 hidden h-full text-eggshell lg:inline-block"
              viewBox="0 0 20 104"
              fill="currentColor"
            >
              <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
            </svg>
          </div>
          <div className="flex flex-col justify-center p-8 bg-eggshell lg:p-16 lg:pl-10 lg:w-1/2">
            <h5 className="mb-3 text-3xl text-orange font-extrabold leading-none sm:text-4xl">
              It's up to you
            </h5>
            <p className="mb-5 text-gray-800">
              <span className="font-bold">Take the Lead!</span> Now that you have some tools to get started it is up to you to take what 
              you've learned and apply it. We wish you luck and hope to see your many memories captured with your new camera skills! 
              Tag us with #xplore on social media.
            </p>
          </div>
        </div>
      </div>
    </div>
    );
  };

  export default Conclusion
