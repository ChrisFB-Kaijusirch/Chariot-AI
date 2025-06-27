import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
            Innovative Web Applications
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            At Holdings CTC, we design and develop cutting-edge web applications that solve real-world 
            problems. From taxi operations to job seeking platforms, we build solutions that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link 
              to="/projects" 
              className="bg-gradient-to-r from-[#0072CE] to-[#004A8B] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              View Our Projects
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-[#0072CE] text-[#0072CE] px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-[#0072CE] hover:text-white transition-all duration-300 text-center"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;