import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "BotBuddy",
    description: "No-code chat bot builder with a visual interface. Design, deploy, and manage chat bots effortlessly—no programming skills required!",
    status: "In Development",
    features: [
      "Visual chat flow builder",
      "Multi-platform deployment",
      "Easy integration",
      "Analytics dashboard"
    ],
    icon: "🤖",
    link: "https://chrisfb-kaijusirch.github.io/BotBuddy/"
  },
  {
    title: "Taxi Operations Hub",
    description: "Comprehensive platform for managing taxi fleet operations, driver scheduling, and customer bookings with real-time tracking.",
    status: "In Development",
    features: ["Fleet Management", "Real-time Tracking", "Driver Scheduling", "Customer Portal"],
    icon: "🚕",
    link: ""
  },
  {
    title: "Job Seeker Pro",
    description: "Advanced job search platform connecting talented professionals with opportunities through intelligent matching algorithms.",
    status: "In Development", 
    features: ["Smart Matching", "Profile Builder", "Application Tracking", "Interview Scheduler"],
    icon: "💼",
    link: ""
  },
  {
    title: "Simple Roster Lite",
    description: "Streamlined employee scheduling solution designed for small to medium businesses with intuitive roster management.",
    status: "In Development",
    features: ["Drag & Drop Scheduling", "Shift Management", "Employee Portal", "Time Tracking"],
    icon: "📅",
    link: ""
  }
];

function Projects() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0072CE] to-[#004A8B] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover the innovative web applications we're currently developing to transform business operations
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Interested in Our Solutions?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get in touch to learn more about how our web applications can benefit your business
          </p>
          <a 
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#0072CE] to-[#004A8B] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}

export default Projects;