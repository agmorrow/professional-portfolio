import React from 'react';
import J4J from '../assets/j4j.jpg';
import ChartMd from '../assets/chartmd.jpg';
import DinnerParty from '../assets/dinnerparty.png';
import TechBlog from '../assets/techblog.jpg';
import TeamProfile from '../assets/teamprofile.jpg';
import Weather from '../assets/weatherdashboard.png';

const Work = () => {
  return (
    <div name='work' className='w-full pt-12 text-black bg-gray-200'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-10'>
          <p className='text-4xl font-bold inline border-b-4 text-black border-amber-400'>MY RECENT WORK</p>
        </div>
        {/* Container */}
        < div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Grid Item */}
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <img className="rounded-t-lg" src={J4J} alt="" />
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Java 4 JavaScripters</h5>
                <p className="text-gray-700 text-base mb-4">
                  Full stack application
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="https://java4jsrs.herokuapp.com/" target="_blank" rel="noreferrer"><button type="button" className=" inline-block px-8 py-2.5 bg-amber-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-500 hover:shadow-lg focus:bg-amber-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-600 active:shadow-lg transition duration-150 ease-in-out">Demo</button></a>
                  <a href="https://github.com/stuartwood2010/SW_Java4Javascripters" target="_blank" rel="noreferrer"><button type="button" className=" inline-block px-8 py-2.5 bg-amber-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-500 hover:shadow-lg focus:bg-amber-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-600 active:shadow-lg transition duration-150 ease-in-out">Code</button></a>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <img className="rounded-t-lg mb-10" src={ChartMd} alt="" />
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Chard Md</h5>
                <p className="text-gray-700 text-base mb-4">
                  Full stack application
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="https://chartmd.herokuapp.com/" target="_blank" rel="noreferrer"><button type="button" className=" inline-block px-8 py-2.5 bg-amber-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-500 hover:shadow-lg focus:bg-amber-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-600 active:shadow-lg transition duration-150 ease-in-out">Demo</button></a>
                  <a href="https://github.com/stuartwood2010/chartMd_app" target="_blank" rel="noreferrer"><button type="button" className=" inline-block px-8 py-2.5 bg-amber-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-500 hover:shadow-lg focus:bg-amber-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-600 active:shadow-lg transition duration-150 ease-in-out">Code</button></a>
                </div>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <img className="rounded-t-lg" src={DinnerParty} alt="" />
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Dinner Party</h5>
                <p className="text-gray-700 text-base mb-4">
                  Front end application
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="https://agmorrow.github.io/DinnerParty-App/" target="_blank" rel="noreferrer"><button type="button" className=" inline-block px-8 py-2.5 bg-amber-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-500 hover:shadow-lg focus:bg-amber-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-600 active:shadow-lg transition duration-150 ease-in-out">Demo</button></a>
                  <a href="https://github.com/agmorrow/DinnerParty-App" target="_blank" rel="noreferrer"><button type="button" className=" inline-block px-8 py-2.5 bg-amber-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-500 hover:shadow-lg focus:bg-amber-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-600 active:shadow-lg transition duration-150 ease-in-out">Code</button></a>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <img className="rounded-t-lg" src={TechBlog} alt="" />
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">The TechBlog</h5>
                <p className="text-gray-700 text-base mb-4">
                  Full stack application
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="https://thetechblog-14-agm.herokuapp.com/" target="_blank" rel="noreferrer"><button type="button" className=" inline-block px-8 py-2.5 bg-amber-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-500 hover:shadow-lg focus:bg-amber-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-600 active:shadow-lg transition duration-150 ease-in-out">Demo</button></a>
                  <a href="https://github.com/agmorrow/TheTechBlog" target="_blank" rel="noreferrer"><button type="button" className=" inline-block px-8 py-2.5 bg-amber-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-500 hover:shadow-lg focus:bg-amber-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-600 active:shadow-lg transition duration-150 ease-in-out">Code</button></a>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <img className="rounded-t-lg" src={TeamProfile} alt="" />
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Team Profile Generator</h5>
                <p className="text-gray-700 text-base mb-4">
                  Back end application
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="https://github.com/agmorrow/TeamProfile_Week10_AGM" target="_blank" rel="noreferrer"><button type="button" className=" inline-block px-8 py-2.5 bg-amber-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-500 hover:shadow-lg focus:bg-amber-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-600 active:shadow-lg transition duration-150 ease-in-out">Code</button></a>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <img className="rounded-t-lg" src={Weather} alt="" />
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Weather Dashboard</h5>
                <p className="text-gray-700 text-base mb-4">
                  Front end application
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="https://agmorrow.github.io/WeatherDashboard_Week6_AGM/" target="_blank" rel="noreferrer"><button type="button" className=" inline-block px-8 py-2.5 bg-amber-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-500 hover:shadow-lg focus:bg-amber-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-600 active:shadow-lg transition duration-150 ease-in-out">Demo</button></a>
                  <a href="https://github.com/agmorrow/WeatherDashboard_Week6_AGM" target="_blank" rel="noreferrer"><button type="button" className=" inline-block px-8 py-2.5 bg-amber-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-500 hover:shadow-lg focus:bg-amber-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-600 active:shadow-lg transition duration-150 ease-in-out">Code</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work