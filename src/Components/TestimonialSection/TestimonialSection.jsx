import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Client Name",
    profession: "Profession",
    image: "https://i.pinimg.com/736x/ee/60/85/ee60853a44569c1d477591d8952ba35d.jpg",
    feedback:
      "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
  },
  {
    name: "Client Name",
    profession: "Profession",
    image: "https://i.pinimg.com/736x/6f/dc/96/6fdc96169741c8a2780007d6fc13f160.jpg",
    feedback:
      "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
  },
  {
    name: "Client Name",
    profession: "Profession",
    image: "https://i.pinimg.com/736x/b5/9c/30/b59c3077ad37ae5ddad395e1a6389553.jpg",
    feedback:
      "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
  },
  {
    name: "Client Name",
    profession: "Profession",
    image: "https://i.pinimg.com/736x/ba/03/c0/ba03c04929d19a98b0f44525507603b9.jpg",
    feedback:
      "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
  },
];

const TestimonialSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div ref={ref} className="container py-10">
      <div className="text-center max-w-xl mx-auto mb-10">
        <h5 className="text-black font-bold uppercase">Testimonial</h5>
        <h1 className="text-2xl font-semibold">What Our Clients Say About Our Digital Services</h1>
      </div>
      <div className="relative overflow-hidden w-full max-w-2xl mx-auto">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            className="bg-gray-100 rounded-lg shadow-md p-6 flex flex-col items-center"
            initial={{ opacity: 0, x: direction * 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 100 }}
            transition={{ duration: 0.2 }}
          >
            <img
              className="w-16 h-16 rounded-full mb-4 object-cover"
              src={testimonials[index].image}
              alt={testimonials[index].name}
            />
            <h4 className="text-black font-semibold">{testimonials[index].name}</h4>
            <p className="text-sm text-gray-600 uppercase">{testimonials[index].profession}</p>
            <p className="text-gray-700 text-center mt-4">{testimonials[index].feedback}</p>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-between mt-4">
          <button
            onClick={prevTestimonial}
            className="p-2 bg-black text-white rounded-full"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 bg-black text-white rounded-full"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
      <div className=" shadow w-full mt-14 flex flex-col items-center">
  <h5 className="text-black font-bold uppercase text-center">
    Tools that Accelerate the Working Efficiency
  </h5>
  <h1 className="text-2xl font-semibold text-center">
    We use these tools for seamless Accounting
  </h1>

  <img src="/Tools.png" className="w-[800px] h-[600px] object-contain mt-4" />
</div>

    </div>
  );
};

export default TestimonialSection;
