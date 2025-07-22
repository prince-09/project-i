export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm">
            © 2024 IPL T20 Dashboard. This is an unofficial application.
          </p>
          <p className="text-xs mt-2 text-gray-400">
            Data sourced from iplt20.com. Not affiliated with BCCI or IPL.
          </p>
          <div className="mt-4 flex justify-center space-x-4 text-xs">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 