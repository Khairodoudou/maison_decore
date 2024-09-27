
import decor4 from './images/decor4.avif';

export default function About() {
    return (
        <section className="" id='about'>
            <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                <section className="block md:hidden w-full flex-col text-center justify-center items-center relative">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                        What Our Customers 
                        <br className="hidden lg:inline-block" /> Say About Us
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Our clients' satisfaction is our top priority. We are committed to delivering exceptional service and
                        creating beautiful, functional spaces that exceed expectations. Here's what they have to say about their
                        experiences with us.
                    </p>
                </section>

                <div className="flex flex-col items-center md:flex-row md:gap-x-5 gap-y-4">
                    <div className="relative z-10 md:w-1/2 pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">
                        <img
                            className="absolute -right-4 xl:-right-12"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/features/3/dots-pattern.svg"
                            alt="Decorative dots pattern"
                        />
                        <div className="relative md:pb-32 max-w-lg ml-auto">
                            <div className="overflow-hidden ">
                                <img

                                    className="object-cover rounded-full w-full h-full scale-150"
                                    src={decor4}
                                    alt="People discussing"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:-mr-32 z-50">
                        <section className="hidden md:flex md:mb-24 md:w-4/5 flex-col text-center md:text-start justify-center items-center relative md:justify-start md:items-start">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                                What Our Customers
                                <br className="hidden lg:inline-block" /> Say About Us
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                Our clients' satisfaction is our top priority. We are committed to delivering exceptional service and
                                creating beautiful, functional spaces that exceed expectations. Here's what they have to say about their
                                experiences with us.
                            </p>
                        </section>

                        <div className="flex flex-col md:mb-24 gap-y-5 md:gap-y-0 md:flex-row md:gap-10 relative">
                            {/** Testimonial Card Component */}
                            {[{
                                name: "Monsri Abderahmane",
                                date: "Dec 16, 2023",
                                text: "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
                                avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                            }, {
                                name: "Samouna Yasmine",
                                date: "Feb 15, 2024",
                                text: "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
                                avatar: "https://images.unsplash.com/photo-1669720229052-89cda125fc3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                            }].map((testimonial, index) => (
                                <div key={index} className="flex flex-col sm:w-full md:w-1/2 relative -m-4">
                                    <div className="p-4 md:w-full w-full">
                                        <div className="h-full bg-gray-100 transition-all hover:bg-black p-8 rounded">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                className="block w-5 h-5 text-gray-400 mb-4"
                                                viewBox="0 0 975.036 975.036"
                                            >
                                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                            </svg>
                                            <p className="leading-relaxed mb-6">
                                                {testimonial.text}
                                            </p>
                                            <div className="flex items-center py-2">
                                                <div className="shrink-0">
                                                    <img className="size-[46px] rounded-full" src={testimonial.avatar} alt={`${testimonial.name} Avatar`}/>
                                                </div>
                                                <div className="ms-2.5 sm:ms-4">
                                                    <h4 className="font-semibold text-dark dark:text-white">
                                                        {testimonial.name}
                                                    </h4>
                                                    <p className="text-xs text-gray-500 dark:text-neutral-500">
                                                        {testimonial.date}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
