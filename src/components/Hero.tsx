import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle?: string;
  showCTA?: boolean;
  backgroundVariant?: 'default' | 'minimal';
}

const Hero = ({
  title,
  subtitle,
  showCTA = true,
  backgroundVariant = 'default',
}: HeroProps) => {
  return (
    <section
      className={`relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden ${
        backgroundVariant === 'default'
          ? 'bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800'
          : 'bg-slate-50'
      }`}
    >
      {/* Background Elements */}
      {backgroundVariant === 'default' && (
        <>
          {/* Gradient orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-navy-500/30 rounded-full blur-3xl" />

          {/* Molecular pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="w-full h-full"
              viewBox="0 0 800 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Molecular structure hints */}
              <circle cx="100" cy="100" r="8" fill="currentColor" className="text-teal-400" />
              <circle cx="200" cy="150" r="6" fill="currentColor" className="text-teal-400" />
              <circle cx="150" cy="200" r="10" fill="currentColor" className="text-teal-400" />
              <line x1="100" y1="100" x2="200" y2="150" stroke="currentColor" strokeWidth="1" className="text-teal-400" />
              <line x1="200" y1="150" x2="150" y2="200" stroke="currentColor" strokeWidth="1" className="text-teal-400" />

              <circle cx="600" cy="80" r="10" fill="currentColor" className="text-teal-400" />
              <circle cx="700" cy="120" r="6" fill="currentColor" className="text-teal-400" />
              <circle cx="650" cy="180" r="8" fill="currentColor" className="text-teal-400" />
              <line x1="600" y1="80" x2="700" y2="120" stroke="currentColor" strokeWidth="1" className="text-teal-400" />
              <line x1="700" y1="120" x2="650" y2="180" stroke="currentColor" strokeWidth="1" className="text-teal-400" />

              <circle cx="400" cy="400" r="12" fill="currentColor" className="text-teal-400" />
              <circle cx="500" cy="450" r="8" fill="currentColor" className="text-teal-400" />
              <circle cx="450" cy="520" r="6" fill="currentColor" className="text-teal-400" />
              <circle cx="350" cy="480" r="10" fill="currentColor" className="text-teal-400" />
              <line x1="400" y1="400" x2="500" y2="450" stroke="currentColor" strokeWidth="1" className="text-teal-400" />
              <line x1="500" y1="450" x2="450" y2="520" stroke="currentColor" strokeWidth="1" className="text-teal-400" />
              <line x1="400" y1="400" x2="350" y2="480" stroke="currentColor" strokeWidth="1" className="text-teal-400" />
            </svg>
          </div>
        </>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1
            className={`font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-in ${
              backgroundVariant === 'default' ? 'text-white' : 'text-navy-900'
            }`}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className={`text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto animate-slide-up ${
                backgroundVariant === 'default'
                  ? 'text-slate-300'
                  : 'text-slate-600'
              }`}
              style={{ animationDelay: '0.1s' }}
            >
              {subtitle}
            </p>
          )}

          {showCTA && (
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              <Link
                to="/blog"
                className={`px-8 py-4 rounded-xl font-medium transition-all ${
                  backgroundVariant === 'default'
                    ? 'bg-white text-navy-900 hover:bg-slate-100 shadow-lg hover:shadow-xl'
                    : 'bg-navy-900 text-white hover:bg-navy-800'
                }`}
              >
                Explore Research
              </Link>
              <a
                href="https://peptidefoundry.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-medium hover:from-teal-600 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl"
              >
                Shop Premium Peptides
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Bottom wave */}
      {backgroundVariant === 'default' && (
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#f8fafc"
            />
          </svg>
        </div>
      )}
    </section>
  );
};

export default Hero;
