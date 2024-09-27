import logo from '../images/logo.png'; // ES6 import for the image

export default function Footer() {
  return (
    <>
      {/* ========== FOOTER ========== */}
      <div className="container mx-auto rounded px-4 relative mb-14 md:-mb-8 md:w-2/5 bg-white">
        <form className="bg-white">
        <div className="mt-4 flex flex-row items-center gap-2 hidden sm:hidden md:flex md:gap-3 bg-white rounded-lg p-2">
  <div className="w-full">
    <input
      type="text"
      id="hero-input"
      name="hero-input"
      className="py-3 bg-white px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
      placeholder="Enter your email"
    />
  </div>
  <div>
    <a
      className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-slate-700 text-white transition-all hover:bg-black focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
      href="#"
    >
      Subscribe
    </a>
  </div>
</div>

        </form>
      </div>

      <footer className="mt-auto bg-gray-900 w-full dark:bg-neutral-950">
        <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="col-span-full lg:col-span-1">
              <a
                className="flex-none text-xl font-semibold text-white focus:outline-none focus:opacity-80"
                href="#"
                aria-label="Brand"
              >
                <img
                  className="w-32 h-14 md:ml-8 bg-white text-white rounded-full p-2"
                  src={logo}
                  alt="logo"
                />
              </a>
              <p>
                <span className="inline-flex gap-x-2 p-3 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                  VivaDecore your premier destination for luxury and modern interior design
                </span>
              </p>
            </div>
            {/* End Col */}

            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100">Our Services</h4>
              <div className="mt-3 grid space-y-3">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Lighting Design
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Interior Design
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Outdoor Design
                  </a>
                </p>
              </div>
            </div>
            {/* End Col */}

            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100">Other Links</h4>
              <div className="mt-3 grid space-y-3">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Reviews
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Careers
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Pricing
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Press inquiries
                  </a>
                </p>
              </div>
            </div>
            {/* End Col */}

            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100">Contact</h4>
              <div className="mt-3 grid space-y-3">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="mailto:info@VivaDecor.com"
                  >
                    info@VivaDecor.com
                  </a>
                </p>

                <p>
                  <span
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  >
                    + 213 696 56 69 05
                  </span>
                </p>
                <p className="pt-2">
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Design Avenue Cityville CA 90210 Annaba, Algérie
                  </a>
                </p>
                <ul className="flex items-center mt-5 space-x-3 md:order-3 sm:mt-0">
                  <li>
                    <a
                      href="#"
                      title=""
                      className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-white border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
                    >
                      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path
                          d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.002 2.056z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-white border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
                    >
                      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path
                          d="M20.707 8.293a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0l-2.414-2.414a1 1 0 0 1 1.414-1.414L15 12.586l4.293-4.293a1 1 0 0 1 1.414 0zM20 12a8 8 0 1 1-8-8 8 8 0 0 1 8 8z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-white border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
                    >
                      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path
                          d="M22.225 0H1.775C.794 0 0 .794 0 1.775v20.45C0 23.206.794 24 1.775 24h20.45C23.206 24 24 23.206 24 22.225V1.775C24 .794 23.206 0 22.225 0zM16.38 20.092H7.62v-1.9h8.76v1.9zm0-5.45H7.62v-1.9h8.76v1.9zm0-5.45H7.62v-1.9h8.76v1.9zM22 20.092h-1.88v-9.03h1.88v9.03zm-3.77-9.03h-1.88v-1.9h1.88v1.9zm-3.76 0h-1.88v-1.9h1.88v1.9zm-3.76 0h-1.88v-1.9h1.88v1.9zm-3.76 0h-1.88v-1.9h1.88v1.9z"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* End Grid */}

          {/* Copyright */}
          <div className="pt-10 mt-10 border-t border-gray-800">
            <p className="text-center text-gray-400">
              &copy; {new Date().getFullYear()} VivaDecore. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      {/* ========== END FOOTER ========== */}
    </>
  );
}
