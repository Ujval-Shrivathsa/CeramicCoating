import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const benefits = [
  {
    icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/icon_umbrella.svg",
    title: "Instant healing properties",
    description: "Paint Protection Films (PPFs), especially those marketed as instant healing or self-healing, have the ability to repair minor scratches and imperfections without external heat application",
  },
  {
    icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/icon_umbrella.svg",
    title: "Extreme high gloss finish",
    description: "An extreme high gloss car finish refers to a paint job that achieves a mirror-like, exceptionally deep shine, often resembling a polished, wet look",
  },
  {
    icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/icon_umbrella.svg",
    title: "Hydrophobic top coat",
    description: "Hydrophobic coatings provide a 'water-repellent' seal on a vehicle. They're great for 'repelling' water and dirt, which can make it easier when it comes to cleaning your car.",
  },
  {
    icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/icon_umbrella.svg",
    title: "Advanced chemical resistance",
    description: "Advanced chemical resistance in cars is primarily achieved through specialized coatings, particularly graphene and ceramic coatings, which form a protective layer on the paint, enhancing its durability and resistance to various chemical agents.",
  },
  {
    icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/icon_umbrella.svg",
    title: "High temperature resistance",
    description: "High-temperature resistance in cars is crucial for ensuring the durability and performance of various components, particularly those exposed to engine heat or exhaust fumes.",
  },
  {
    icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/icon_umbrella.svg",
    title: "Seamless finishing",
    description: "A seamless finishing car refers to the overall refinement and quality of a car's exterior and interior surfaces, including the paint, trim, and materials used in the car's construction.",
  },
];

function CeramicCoating() {
  const images = [
    "https://img.freepik.com/premium-photo/car-body-polishing-process-detailing-workshop_153608-1185.jpg?ga=GA1.1.1515336155.1743059816&semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-photo/beautiful-car-polishing-service_23-2149212247.jpg?ga=GA1.1.1515336155.1743059816&semt=ais_hybrid&w=740",
    "https://img.freepik.com/premium-photo/car-polish-wax-worker-hands-holding-polisher-polish-car-detailing-valeting-concept-taillight-red-car_152904-4650.jpg?ga=GA1.1.1515336155.1743059816&semt=ais_hybrid&w=740",
  ];

  const scrollRef1 = useRef(null);
  const { scrollYProgress: progress1 } = useScroll({
    target: scrollRef1,
    offset: ["start end", "end start"],
  });
  const xRightToLeft = useTransform(progress1, [0, 1], ["40%", "0%"]);

  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 640;

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div
        className="w-full h-screen flex items-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url('https://res.cloudinary.com/dycm7vkuq/image/upload/v1748088567/freepik_edit_qe8pjs.jpg')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div className="text-left ml-[6%] mb-10 px-4 md:px-0">
          <h1 className="text-4xl anek md:text-5xl lg:text-6xl font-bold mb-4 text-cyan-300 tracking-tight">
            Ceramic Coating
          </h1>
          <p className="text-gray-400 anek mt-4 md:mt-[5%] w-full md:w-[90%] lg:w-[90%] text-sm md:text-base lg:text-[17px] leading-relaxed max-w-xs md:max-w-md lg:max-w-lg">
            Ceramic coating is a liquid polymer applied to cars that bonds with paint, providing glossy, long-lasting protection against dirt and damage.
          </p>
          <button className="w-32 anek md:w-35 font-semibold rounded-xl mt-6 md:mt-[4%] cursor-pointer text-black h-11 bg-white px-4">
            Book Now
          </button>
        </div>
      </div>
      {/* Image Gallery Section */}
      <div className="w-full py-8 md:py-12 lg:h-[60vh]">
        <div
          ref={scrollRef1}
          className="w-full lg:-mt-20 bg-black py-6 md:py-12 px-4 sm:px-6 md:px-10 lg:px-4 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-6 items-center justify-center">
            {images.map((img, index) => (
              <motion.div
                key={index}
                style={{ x: isDesktop ? xRightToLeft : 0, transition: "transform 0.6s ease-out" }}
                className="rounded-xl overflow-hidden shadow-lg w-full max-w-sm md:max-w-md lg:max-w-[400px] md:w-1/3"
              >
                <img
                  src={img}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-48 md:h-56 lg:h-[250px] object-cover rounded-xl"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* What Is Section */}
      <div className="w-full px-4 md:px-0 py-8 md:py-0 lg:h-[60vh] lg:flex lg:pl-[6%]">
        <div className="md:pl-[4%] lg:pl-0 mb-8 md:mb-16">
          <div className="border-l-4 md:border-l-5 border-cyan-300 pl-4 md:pl-7 mb-6 md:mb-8">
            <h2 className="text-xl md:text-3xl font-light lg:text-2xl text-white mb-2">What Is</h2>
            <div className="text-2xl anek -mt-4 lg:text-3xl md:text-4xl font-bold text-white -mt-1 lg:-mt-2">
              Ceramic Coating?
            </div>
            <div className="space-y-4 mt-4 md:mt-6 text-gray-300 text-sm leading-relaxed max-w-full md:max-w-xl lg:max-w-180">
              <p className="md:text-justify anek text-left lg:leading-normal md:leading-normal leading-[21px] lg:text-justify">
                Ceramic coating is a liquid polymer applied to a vehicle's exterior that chemically bonds with the factory paint, forming a protective layer. This invisible shield offers long-lasting protection against UV ray oxidation, chemical stains, bird droppings, and minor scratches. It's highly hydrophobic, meaning water, dirt, and contaminants bead up and slide off easily, making cleaning much easier.
              </p>
              <p className="md:text-justify anek text-left lg:leading-normal md:leading-normal leading-[21px] lg:text-justify">
                Unlike wax, which wears off quickly, ceramic coatings can last for years with proper care. They also enhance the vehicle's gloss and depth, giving the paint a richer, more vibrant look. While not bulletproof, ceramic coatings significantly reduce the risk of surface damage and preserve the car's appearance. It's a popular choice among car owners who want extended protection and low-maintenance shine.
              </p>
            </div>
          </div>
        </div>
        
        {/* Side Image */}
        <div className="flex justify-center md:justify-start lg:block px-4 md:px-0">
          <img 
            src="https://img.freepik.com/free-photo/close-up-car-care-process_23-2149193626.jpg?ga=GA1.1.1515336155.1743059816&semt=ais_hybrid&w=740" 
            className="w-full max-w-sm md:max-w-md lg:w-[80%] h-64 md:h-80 lg:h-[100%] object-cover object-center mt-4 md:mt-8 lg:mt-[10%] md:ml-[4%] lg:ml-[18%] md:ml-[18%] mt:mt-0 rounded-2xl" 
            alt="Car care process" 
          />
        </div>
      </div>

      {/* Two Column Benefits */}
      <div className="w-full px-4 md:px-0 py-8 md:py-0 lg:h-[20vh] lg:-mt-8 md:pl-[4%] lg:pl-[6%]">
        <div className="flex flex-col md:mt-[8%] lg:mt-[0%] md:flex-row lg:flex-row gap-6 md:gap-8 lg:gap-25 bg-black">
          <div className="flex-1">
            <h3 className="text-base anek md:text-lg font-semibold mb-2 md:mb-3 text-cyan-300">
              Invisible and Durable Protection:
            </h3>
            <p className="text-gray-400 anek md:w-70 md:text-justify text-sm lg:text-sm lg:-mt-2 leading-relaxed lg:w-65">
              Ceramic coating forms a clear, long-lasting layer that protects your vehicle's paint from UV rays, contaminants, and minor scratches.
            </p>
          </div>
          <div className="flex-1 lg:ml-[-50%]">
            <h3 className="text-base anek md:text-lg font-semibold mb-2 md:mb-3 text-cyan-300">
              Preserves Value and Appearance:
            </h3>
            <p className="text-gray-400 anek md:w-70 md:text-justify text-sm lg:text-sm lg:-mt-2 leading-relaxed lg:w-75">
              Ceramic coating maintains your vehicle's glossy finish, prevents paint damage and fading, helping retain its showroom look and resale value.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="w-full px-4 md:px-0 py-8 md:py-12 lg:py-16 lg:h-[80vh] md:pl-[4%] lg:pl-[6%]">
        <div className="mt-8 md:mt-12 lg:mt-20">
          <div className="mb-6 lg:mb-6">
            <h2 className="text-lg md:text-xl font-normal text-gray-400 mb-2 anek">Benefits of</h2>
            <div className="text-3xl anek md:text-4xl font-bold text-white -mt-1 lg:-mt-3">
              Ceramic Coating
            </div>
          </div>

          {/* Benefits Icons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex gap-4 md:gap-6 lg:gap-25 pt-2 lg:pt-3">
            {benefits.slice(0, 5).map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center lg:flex-1 lg:min-w-33 lg:max-w-25">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-26 flex mb-2 lg:mb-2 p-2">
                  <img 
                    src={benefit.icon} 
                    alt={benefit.title}
                    className="w-full h-full object-contain text-blue-400"
                  />
                </div>
                <div className="text-xs md:text-sm lg:text-[16px] font-semibold text-white lg:-mt-2 leading-tight text-center">
                  {benefit.title}
                </div>
              </div>
            ))}
          </div>          
        </div>
      </div>
    </div>
  );
}

export default CeramicCoating;