import { useState } from 'react';
import ampouleeImg from './images/ampoulee.jpg';
import interiorImg from './images/Interior.jpg';
import outdoorImg from './images/Outdoor.jpg';
import salonImg from './images/salon.png';

export default function Services() {
  const [activeTab, setActiveTab] = useState('advanced-tools');

  const images = {
    'advanced-tools': ampouleeImg,
    'smart-dashboards': interiorImg,
    'powerful-features': outdoorImg,
  };

  return (
    // Features
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="relative p-6 md:p-16">
        {/* Grid */}
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
            <h1 className="title-font flex flex-col justify-center items-center text-5xl mb-10 font-bold text-gray-900">
              Our Services
            </h1>

            {/* Tab Navs */}
            <nav className="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist" aria-orientation="vertical">
              <button
                type="button"
                className={`hs-tab-active:bg-black hs-tab-active:shadow-md text-start p-4 md:p-5 rounded-xl ${activeTab === 'advanced-tools' ? 'bg-slate-400 shadow-md' : 'hover:bg-gray-200 dark:hover:bg-white'}`}
                onClick={() => setActiveTab('advanced-tools')}
                aria-selected={activeTab === 'advanced-tools'}
                aria-label="Lighting Design"
              >
                <span className="flex gap-x-6">
                  <svg
                    className="shrink-0 mt-2 size-6 md:size-7 text-gray-800 dark:text-neutral-200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M24 4v6" />
                    <path d="M8 10h32" />
                    <circle cx="8" cy="22" r="5" />
                    <circle cx="24" cy="22" r="5" />
                    <circle cx="40" cy="22" r="5" />
                    <circle cx="16" cy="34" r="5" />
                    <circle cx="32" cy="34" r="5" />
                    <path d="M8 15v7" />
                    <path d="M24 15v7" />
                    <path d="M40 15v7" />
                    <path d="M16 27v7" />
                    <path d="M32 27v7" />
                    <path d="M24 4l-6 6" />
                    <path d="M24 4l6 6" />
                  </svg>

                  <span className="grow">
                    <span className="block text-lg font-semibold text-gray-800 dark:text-neutral-200">
                      Lighting Design
                    </span>
                    <span className="block mt-1 text-gray-800 dark:text-neutral-200">
                      Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere
                    </span>
                  </span>
                </span>
              </button>

              <button
                type="button"
                className={`hs-tab-active:bg-black hs-tab-active:shadow-md text-start p-4 md:p-5 rounded-xl ${activeTab === 'smart-dashboards' ? 'bg-slate-400 shadow-md' : 'hover:bg-gray-200 dark:hover:bg-white'}`}
                onClick={() => setActiveTab('smart-dashboards')}
                aria-selected={activeTab === 'smart-dashboards'}
                aria-label="Interior Design"
              >
                <span className="flex gap-x-6">
                  <img className="shrink-0 mt-2 size-6 md:size-7 text-gray-800 dark:text-neutral-200 dark:bg-white dark:rounded-full" src={salonImg} alt='Interior Design' />

                  <span className="grow">
                    <span className="block text-lg font-semibold text-gray-800 dark:text-neutral-200">
                      Interior Design
                    </span>
                    <span className="block mt-1 text-gray-800 dark:text-neutral-200">
                      From concept to completion, we oversee every detail to bring your vision to life efficiently
                    </span>
                  </span>
                </span>
              </button>

              <button
                type="button"
                className={`hs-tab-active:bg-black hs-tab-active:shadow-md text-start p-4 md:p-5 rounded-xl ${activeTab === 'powerful-features' ? 'bg-slate-400 shadow-md' : 'hover:bg-gray-200 dark:hover:bg-white'}`}
                onClick={() => setActiveTab('powerful-features')}
                aria-selected={activeTab === 'powerful-features'}
                aria-label="Outdoor Design"
              >
                <span className="flex gap-x-6">
                  <svg
                    className="shrink-0 mt-2 size-6 md:size-7 text-gray-800 dark:text-neutral-200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="7" r="4" />
                    <circle cx="7" cy="12" r="4" />
                    <circle cx="12" cy="17" r="4" />
                    <circle cx="17" cy="12" r="4" />
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 17v5" />
                    <path d="M9 22l-3-3 3-3" />
                    <path d="M15 22l3-3-3-3" />
                  </svg>

                  <span className="grow">
                    <span className="block text-lg font-semibold text-gray-800 dark:text-neutral-200">
                      Outdoor Design
                    </span>
                    <span className="block mt-1 text-gray-800 dark:text-neutral-200">
                      Celebrate the changing seasons with our seasonal outdoor decor services
                    </span>
                  </span>
                </span>
              </button>
            </nav>
            {/* End Tab Navs */}
          </div>

          <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
            <svg className="w-16 h-auto text-orange-600" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
              <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
              <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
            </svg>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              {/* Display the corresponding image based on the active tab */}
              <div>
                <img
                  className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                  src={images[activeTab]} // Display image based on activeTab
                  alt="Features Image"
                />
              </div>
              {/* End Tab Content */}
            </div>
          </div>
          {/* End Col */}
        </div>
      </div>
    </div>
  );
}
