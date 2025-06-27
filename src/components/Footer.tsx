function Footer() {
  return (
    <footer className="bg-[#004A8B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/holdings-ctc-logo.svg" 
                alt="Holdings CTC" 
                className="h-10 w-10"
              />
              <div>
                <div className="text-xl font-bold text-white">Holdings CTC</div>
                <div className="text-sm text-blue-200">Premium Web Apps</div>
              </div>
            </div>
            <p className="text-[#8ED9FF] text-sm sm:text-base">
              Innovative web applications designed and developed with precision and care.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-[#8ED9FF] hover:text-white transition-colors text-sm sm:text-base">Home</a></li>
              <li><a href="/projects" className="text-[#8ED9FF] hover:text-white transition-colors text-sm sm:text-base">Projects</a></li>
              <li><a href="/about" className="text-[#8ED9FF] hover:text-white transition-colors text-sm sm:text-base">About</a></li>
              <li><a href="/contact" className="text-[#8ED9FF] hover:text-white transition-colors text-sm sm:text-base">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-[#8ED9FF] text-sm sm:text-base">
              <a href="mailto:info@holdingsctc.com" className="hover:text-white transition-colors break-all">
                info@holdingsctc.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-[#0072CE] mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-[#8ED9FF]">
          <p className="text-xs sm:text-sm">&copy; 2024 Holdings CTC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;