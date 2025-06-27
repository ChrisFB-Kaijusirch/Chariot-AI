import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Taxi Operations Hub",
    description: "Comprehensive platform for managing taxi fleet operations, driver scheduling, and customer bookings with real-time tracking.",
    status: "In Development",
    features: ["Fleet Management", "Real-time Tracking", "Driver Scheduling", "Customer Portal"]
  },
  {
    title: "Job Seeker Pro",
    description: "Advanced job search platform connecting talented professionals with opportunities through intelligent matching algorithms.",
    status: "In Development", 
    features: ["Smart Matching", "Profile Builder", "Application Tracking", "Interview Scheduler"]
  },
  {
    title: "Simple Roster Lite",
    description: "Streamlined employee scheduling solution designed for small to medium businesses with intuitive roster management.",
    status: "In Development",
    features: ["Drag & Drop Scheduling", "Shift Management", "Employee Portal", "Time Tracking"]
  }
];

function Index() {
  return (
    <div>
      <Hero />
      
      {/* Projects Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Current Projects
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              We're actively developing innovative solutions that address real business challenges. 
              Each project is crafted with attention to detail and user experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#0072CE] to-[#004A8B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg sm:text-xl text-[#8ED9FF] mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Let's discuss how our web applications can streamline your operations and drive growth.
          </p>
          <a 
            href="mailto:info@holdingsctc.com"
            className="inline-block bg-white text-[#0072CE] px-6 sm:px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}

export default Index;