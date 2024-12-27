export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        {/* Logo Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="bg-[#FFC64E] w-8 h-8 rounded"></div>
            <span className="text-white font-bold text-lg">
              Adhitya Maulana Wijaya
            </span>
          </div>
          <p className="text-gray-400">
            I take pride in writing clean, maintainable code and staying
            adaptable in an ever-changing tech environment. Collaborating on
            innovative projects is my passion, and I’m always eager to learn and
            grow.
          </p>
        </div>
        {/* Links Section */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-white font-bold mb-3">Highlight Projects</h3>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="hover:text-white">
                  Restoku App
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white">
                  Notes Taking App
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white">
                  Travel Kuy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-3">Social Media</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.instagram.com/bluescreen.boy/"
                  target="_blank"
                  className="hover:text-white"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/adhitya-maulana-wijaya-b11534292/"
                  className="hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AdhityaMaulana11"
                  target="_blank"
                  className="hover:text-white"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-10">
        &copy; 2022 Adhitya Maulana Wijaya. All Rights Reserved.
      </div>
    </footer>
  );
}
