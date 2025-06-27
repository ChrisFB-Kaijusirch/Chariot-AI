import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-br from-[#0072CE] to-[#004A8B] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/holdings-ctc-logo.svg" alt="Holdings CTC" className="h-10 w-10" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">Holdings CTC</div>
              <div className="text-sm text-blue-100">Premium Web Apps That Drive Results</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-blue-200 transition-colors">
              Home
            </Link>
            <Link to="/projects" className="text-white hover:text-blue-200 transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="text-white hover:text-blue-200 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-white hover:text-blue-200 transition-colors py-2">
                Home
              </Link>
              <Link to="/projects" className="text-white hover:text-blue-200 transition-colors py-2">
                Projects
              </Link>
              <Link to="/contact" className="text-white hover:text-blue-200 transition-colors py-2">
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;