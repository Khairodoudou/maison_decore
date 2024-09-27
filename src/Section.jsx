
import decor3 from './images/decor3.avif';

export default function Section() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 md:py-2 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
            Designing Your Dream
            <br className="hidden lg:inline-block" /> With Brilliance
          </h1>
          <p className="mb-8 leading-relaxed">
            Elevate your spaces with bespoke interior designs that reflect your unique style and aspirations, crafted with precision and brilliance for an unforgettable living experience.
          </p>

          {/* First Collapse Section */}
          <div className="collapse collapse-plus border-b-2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">Living Room Interior Design</div>
            <div className="collapse-content">
              <p>Our Living Room Interior Design offers a blend of comfort and luxury, creating an inviting space perfect for both relaxation and entertaining guests.</p>
            </div>
          </div>

          {/* Second Collapse Section */}
          <div className="collapse collapse-plus border-b-2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">Commercial Office Room Interior Design</div>
            <div className="collapse-content">
              <p>We specialize in transforming commercial office spaces into professional yet creative environments that inspire productivity and collaboration.</p>
            </div>
          </div>

          {/* Learn More Button */}
          <div className="flex justify-center p-5">
            <button className="inline-flex text-white bg-slate-700 transition-all duration-300 border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg">
              Learn More
            </button>
          </div>
        </div>

        <div className="hidden md:flex lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="dream" src={decor3} />
        </div>
      </div>
    </section>
  );
}
