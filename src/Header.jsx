import React, { useState, useEffect, useRef } from "react";
import decor from './images/decor.jpg'
import decor2 from './images/decor2.jpg'

export default function Header() {
  // State for the counter values
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [styles, setStyles] = useState(0);
  
  const intervalsRef = useRef([]);

  // Function to increment the counter
  const incrementCounter = (setValue, targetValue) => {
    let currentValue = 0;
    const incrementSpeed = Math.max(10, targetValue / 1000); // Adjust speed based on target value
    const step = targetValue / 100; // Control the smoothness of increment
    const interval = setInterval(() => {
      currentValue += step;
      if (currentValue >= targetValue) {
        setValue(targetValue);
        clearInterval(interval);
      } else {
        setValue(Math.ceil(currentValue));
      }
    }, incrementSpeed);
    
    intervalsRef.current.push(interval);
  };

  // useEffect to trigger the increment once on component mount
  useEffect(() => {
    incrementCounter(setProjects, 400);
    incrementCounter(setClients, 600);
    incrementCounter(setStyles, 100);
    
    // Cleanup intervals on unmount
    return () => {
      intervalsRef.current.forEach(clearInterval);
    };
  }, []);

  return (
    <div>
      <section className="text-gray-600 z-10  body-font">
        <div className="container mx-auto flex px-5 py-3 pt-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="mb-5 pb-10">
              <h1 className="title-font flex flex-col text-center md:text-start text-5xl mb-10 font-bold text-gray-900">
                Interior Design
              </h1>

              <p className="mb-8 leading-relaxed">
                Step into a world where the art of Interior Design is
                meticulously crafted to bring together timeless elegance
                and cutting-edge modern innovation, allowing you to
                transform your living spaces into the epitome of luxury
                and sophistication.
              </p>
            </div>

            <div className="flex justify-center">
              <button 
                aria-label="Start Project"
                className="inline-flex text-white bg-slate-700 border-0 transition-all duration-300 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg">
                Start Project
              </button>
            </div>

            <div className="container mx-auto pt-10">
              <div className="grid grid-cols-3 gap-x-4 sm:text-start sm:pr-5 md:text-center mx-10 ">
                <div className="p-4">
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    {projects}+
                  </h2>
                  <p className="leading-relaxed">Projects Complete</p>
                </div>

                <div className="p-4">
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    {clients}+
                  </h2>
                  <p className="leading-relaxed">Satisfied Clients</p>
                </div>

                <div className="p-4">
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    {styles}+
                  </h2>
                  <p className="leading-relaxed">Unique Styles</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:max-w-lg md:w-1/2 w-5/6">
            <img
              className="object-cover rounded object-center w-full h-full"
              alt="Decor"
              src={decor}
            />
            <div className="relative rounded md:-ml-32">
              <img
                className="object-cover rounded-xl md:mr-14 object-center w-full h-full pt-5 md:pr-10"
                src={decor2}
                alt="Decor 2"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
