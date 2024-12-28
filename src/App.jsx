
import { Mail, Github, MessageSquare, ArrowRight, Code, Monitor, Server, Cpu, Coffee, FileUser, FileDown, Menu, X } from 'lucide-react';
import './App.css'
import { useState } from 'react';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

  return (
    <div className="w-full min-h-screen bg-gray-900 text-gray-100 overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <span className="text-2xl font-bold text-emerald-500">AG</span>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6">
              <a href="#home" className="hover:text-emerald-500 transition-colors">Home</a>
              <a href="#about" className="hover:text-emerald-500 transition-colors">About</a>
              <a href="#projects" className="hover:text-emerald-500 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-emerald-500 transition-colors">Skills</a>
              <a href="#hobbies" className="hover:text-emerald-500 transition-colors">Hobbies</a>
              <a href="#contact" className="hover:text-emerald-500 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2 border-t border-gray-800 mt-4">
              <a href="#home" className="block px-4 py-2 hover:bg-gray-800 rounded-lg transition-colors">Home</a>
              <a href="#about" className="block px-4 py-2 hover:bg-gray-800 rounded-lg transition-colors">About</a>
              <a href="#projects" className="block px-4 py-2 hover:bg-gray-800 rounded-lg transition-colors">Projects</a>
              <a href="#skills" className="block px-4 py-2 hover:bg-gray-800 rounded-lg transition-colors">Skills</a>
              <a href="#hobbies" className="block px-4 py-2 hover:bg-gray-800 rounded-lg transition-colors">Hobbies</a>
              <a href="#contact" className="block px-4 py-2 hover:bg-gray-800 rounded-lg transition-colors">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-24 min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Hi, I'm Anukiran Ghosh
              <span className="block text-emerald-500 mt-2">a web dev with a creative mind</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Turning Coffee into Code and Ideas into Innovation
              <span className="block text-sm mt-2 text-gray-500">(Warning: May occasionally drop dad jokes in meetings)</span>
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/akghosh111" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
                <Github size={20} /> GitHub
              </a>
              <a href="" className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                <FileDown size={20} /> Resume
              </a>
            </div>
          </div>
      </div>
        
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">About Me</h2>
          <div className="max-w-3xl">
            <p className="text-gray-300 mb-6">
              I'm a web developer with an entrepreneurial spirit, passionate about building innovative digital solutions that make a difference. My journey in tech started with a simple curiosity about how things work on the web, and it's evolved into a full-fledged mission to create impactful applications.
            </p>
            <p className="text-gray-300 mb-6">
              Currently, I'm diving deep into modern web technologies, mastering React and Tailwind CSS while building a solid foundation in full-stack development. I believe in creating practical solutions that solve real-world problems, all while maintaining clean code that even my future self would thank me for.
            </p>
            <p className="text-gray-300">
              As someone deeply interested in startups and entrepreneurship, I'm always looking for opportunities to blend technical expertise with business innovation. When I'm not coding, you'll find me brainstorming new startup ideas or watching movies/shows - probably with a slightly concerning amount of coffee nearby.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Upcoming Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Chai Pi Lado",
                description: "A BuyMeaCoffee alternative especially designed for Indian creators & their fans with 0 platform fee (work in progress).",
                icon: <Coffee className="text-emerald-500" size={24} />
              },
              {
                title: "Single Sheet",
                description: "If a single sheet of paper can decide your future, its your resume and the best thing about that is, you can optimize it.",
                icon: <FileUser className="text-emerald-500" size={24} />
              },
              {
                title: "File Burger",
                description: "A P2P file sharing platform that lets you create a unique link and share files with anyone online without uploading it anywhere.",
                icon: <Server className="text-emerald-500" size={24} />
              }
            ].map((project, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
                <div className="mb-4">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                <button className="mt-4 flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors">
                  Coming Soon <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "React", icon: <Code size={32} />},
              { name: "Tailwind CSS", icon: <Monitor size={32} />},
              { name: "Node.js", icon: <Server size={32} />},
              { name: "API Development", icon: <Cpu size={32} />}
            ].map((skill, index) => (
              <div key={index} className="p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-700 text-center">
                <div className="flex justify-center mb-4 text-emerald-500">{skill.icon}</div>
                <h3 className="font-semibold mb-2">{skill.name}</h3>
                <p className="text-sm text-gray-400">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-20 bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold mb-12">Hobbies & Interests</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-gray-700 hover:bg-gray-800/70 transition-all">
        <h3 className="text-xl font-semibold mb-4 text-emerald-500">Startup Enthusiast</h3>
        <p className="text-gray-300">
          Always exploring new business ideas and following the startup ecosystem. Also, I can explain my MVP in an elevator pitch faster than the elevator can reach the second floor.
        </p>
      </div>

      <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-gray-700 hover:bg-gray-800/70 transition-all">
        <h3 className="text-xl font-semibold mb-4 text-emerald-500">Problem Solving</h3>
        <p className="text-gray-300">
          Love tackling complex problems and turning them into elegant solutions. Sometimes I debug in my sleep (not kidding, it actually works!).
        </p>
      </div>

      <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-gray-700 hover:bg-gray-800/70 transition-all">
        <h3 className="text-xl font-semibold mb-4 text-emerald-500">Movie Buff</h3>
        <p className="text-gray-300">
          I love watching movies & shows, it's my favorite pastime. I enjoy exploring a wide variety of genres from Crime/Thriller to Romance, always looking for compelling stories and unique perspectives.
        </p>
      </div>

      <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-gray-700 hover:bg-gray-800/70 transition-all">
        <h3 className="text-xl font-semibold mb-4 text-emerald-500">YouTuber</h3>
        <p className="text-gray-300">
          I have a YouTube channel which I created out of boredom for fun & scaled it to 7k subscribers. I often share my tech & cybersecurity learnings there, making complex topics accessible to everyone.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
          <div className="max-w-xl mx-auto text-center">
            <p className="text-gray-300 mb-6">
              Have a project in mind or just want to connect? Drop me a line at:
            </p>
            <a 
              href="mailto:admin@anukiranghosh.com" 
              className="text-xl text-emerald-500 hover:text-emerald-400 transition-colors flex items-center justify-center gap-2"
            >
              <Mail size={24} />
              admin@anukiranghosh.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">© 2024 Anukiran Ghosh</span>
            <div className="flex gap-4">
              <a href="mailto:admin@anukiranghosh.com" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://github.com" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://discord.com" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
