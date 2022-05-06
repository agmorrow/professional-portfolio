import React from 'react';
import J4J from '../assets/j4j.jpg';
import ChartMd from '../assets/chartmd.jpg';
import DinnerParty from '../assets/dinnerparty.png';
import TechBlog from '../assets/techblog.jpg';
import NoteTaker from '../assets/notetaker.png';
import Weather from '../assets/weatherdashboard.png';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-black bg-slate-200'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-black border-amber-400'>Work</p>
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
                  Some quick example text to build on the card title and make up the bulk of the card's
                  content.
                </p>
                <div className="flex justify-center space-x-3">
                <button type="button" className=" inline-block px-8 py-2.5 bg-amber-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-500 hover:shadow-lg focus:bg-amber-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-600 active:shadow-lg transition duration-150 ease-in-out">Demo</button>
                <button type="button" className=" inline-block px-8 py-2.5 bg-amber-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-500 hover:shadow-lg focus:bg-amber-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-600 active:shadow-lg transition duration-150 ease-in-out">Code</button>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <img className="rounded-t-lg" src={ChartMd} alt="" />
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Chard Md</h5>
                <p className="text-gray-700 text-base mb-4">
                  Some quick example text to build on the card title and make up the bulk of the card's
                  content.
                </p>
                <div className="flex justify-center space-x-3">
                <button type="button" className=" inline-block px-8 py-2.5 bg-amber-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-500 hover:shadow-lg focus:bg-amber-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-600 active:shadow-lg transition duration-150 ease-in-out">Demo</button>
                <button type="button" className=" inline-block px-8 py-2.5 bg-amber-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-500 hover:shadow-lg focus:bg-amber-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-600 active:shadow-lg transition duration-150 ease-in-out">Code</button>
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
                  Some quick example text to build on the card title and make up the bulk of the card's
                  content.
                </p>
                <div className="flex justify-center space-x-3">
                <button type="button" className=" inline-block px-8 py-2.5 bg-amber-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-500 hover:shadow-lg focus:bg-amber-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-600 active:shadow-lg transition duration-150 ease-in-out">Demo</button>
                <button type="button" className=" inline-block px-8 py-2.5 bg-amber-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-500 hover:shadow-lg focus:bg-amber-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-600 active:shadow-lg transition duration-150 ease-in-out">Code</button>
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
                  Some quick example text to build on the card title and make up the bulk of the card's
                  content.
                </p>
                <div className="flex justify-center space-x-3">
                <button type="button" className=" inline-block px-8 py-2.5 bg-amber-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-500 hover:shadow-lg focus:bg-amber-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-600 active:shadow-lg transition duration-150 ease-in-out">Demo</button>
                <button type="button" className=" inline-block px-8 py-2.5 bg-amber-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-500 hover:shadow-lg focus:bg-amber-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-600 active:shadow-lg transition duration-150 ease-in-out">Code</button>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <img className="rounded-t-lg" src={NoteTaker} alt="" />
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Note Taker App</h5>
                <p className="text-gray-700 text-base mb-4">
                  Some quick example text to build on the card title and make up the bulk of the card's
                  content.
                </p>
                <div className="flex justify-center space-x-3">
                <button type="button" className=" inline-block px-8 py-2.5 bg-amber-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-500 hover:shadow-lg focus:bg-amber-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-600 active:shadow-lg transition duration-150 ease-in-out">Demo</button>
                <button type="button" className=" inline-block px-8 py-2.5 bg-amber-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-500 hover:shadow-lg focus:bg-amber-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-600 active:shadow-lg transition duration-150 ease-in-out">Code</button>
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
                  Some quick example text to build on the card title and make up the bulk of the card's
                  content.
                </p>
                <div className="flex justify-center space-x-3">
                <button type="button" className=" inline-block px-8 py-2.5 bg-amber-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-500 hover:shadow-lg focus:bg-amber-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-600 active:shadow-lg transition duration-150 ease-in-out">Demo</button>
                <button type="button" className=" inline-block px-8 py-2.5 bg-amber-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-500 hover:shadow-lg focus:bg-amber-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-600 active:shadow-lg transition duration-150 ease-in-out">Code</button>
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