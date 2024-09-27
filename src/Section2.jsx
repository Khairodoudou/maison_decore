import dreamImage from './images/dream.jpg';

export default function Section2() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        
        <div className="lg:max-w-lg md:w-2/5 w-5/6 mb-10 md:mb-0">
          <img className="object-cover object-center rounded" alt="dream" src={dreamImage} />
        </div>

        <div className="lg:flex-grow md:w-3/5 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
            Designing Your Dream in
            <br className="hidden lg:inline-block" /> Three Simple Steps
          </h1>
          <p className="mb-8 leading-relaxed">
            Elevate your spaces with bespoke interior designs that reflect
            your unique style and aspirations, crafted with precision and brilliance for an unforgettable living experience.
          </p>
          
          <div className="relative">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="Curved Dotted Line" />
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
              {steps.map((step, index) => (
                <div key={index}>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                    <span className="text-xl font-semibold text-gray-700">{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-3">{step.title}</h3>
                  <p className="mt-3 text-base text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    title: "Start Project",
    description: "Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience."
  },
  {
    title: "Craft",
    description: "Collaborate closely to achieve design excellence, refining your vision and crafting brilliance into every aspect of your space."
  },
  {
    title: "Execute",
    description: "Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space."
  }
];
