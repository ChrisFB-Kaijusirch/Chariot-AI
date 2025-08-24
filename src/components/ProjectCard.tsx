  interface ProjectCardProps {
  title: string;
  description: string;
  status: string;
  features: string[];
  icon: string;
  link?: string;
}

function ProjectCard({ title, description, status, features, icon, link }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 border border-[#F2F2F2]">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-[#0072CE] to-[#004A8B] rounded-lg flex items-center justify-center text-white text-xl font-bold mr-4">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#004A8B]">{title}</h3>
          <span className="inline-block bg-[#FFC107]/20 text-[#FFC107] text-xs px-2 py-1 rounded-full font-medium border border-[#FFC107]/30">
            {status}
          </span>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="space-y-2">
        <h4 className="font-semibold text-[#004A8B]">Key Features:</h4>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <svg className="w-4 h-4 text-[#4CAF50] mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-6">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-block bg-gradient-to-r from-[#0072CE] to-[#004A8B] text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center"
          >
            Visit Site
          </a>
        ) : (
          <button className="w-full bg-gradient-to-r from-[#0072CE] to-[#004A8B] text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            Learn More
          </button>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;