import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Terminal, Menu, X, ArrowUp, ChevronRight } from 'lucide-react';
import nikunjPfp from './assets/nikunj_pfp.jpg';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentCommand, setCurrentCommand] = useState('');
  
  const commands = [
    'git status',
    'npm run dev',
    'python main.py',
    'sudo rm -rf /',
    'g++ hello_world.cpp',
    'conda activate ENV'


  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      setShowScrollTop(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomCommand = commands[Math.floor(Math.random() * commands.length)];
      setCurrentCommand(randomCommand);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const skillCategories = {
    Languages: ["Python", "C++", "JavaScript", "TypeScript", "MATLAB"],
    Frameworks: ["FastAPI","React.js", "Node.js", "Express.js", "Flask"],
    Databases: ["PostgreSQL", "Microsoft SQL","MongoDB", "MySQL", "FireBase"],
    Tools: ["Docker", "Git", "Linux", "AWS",'S3','Azure'],
    Libraries: ['NumPy', 'SciPy', 'Scikit-Image', 'Pandas', 'OpenCV', 'Socket.IO', 'WebRTC', 'SQLalchemy'],
    ML: ["Pytorch","Scikit-Learn" ,"CUDA", "ONNX", "Super-Gradients","Lightning"]
  };

  const projects = [
    {
      title: "HimalayanHut",
      description: "Movie watchlist application allowing users to store, rate, and recommend movies. Features personalized recommendations using regression machine learning models. Users can discover trending movies and create custom watchlists based on preferences and behavior patterns.",
      tech: ["React", "React Bootstrap", "Tailwind CSS", "FastAPI", "PostgreSQL", "scikit-learn", "Python", "MinIO"],
      github: "https://github.com/nikunjpradhan31/HimalayanHut", // Replace with actual URL if different
      status: "Almost Deployed"
    },
    {
      title: "Devanagari Vision",
      description: "A computer vision pipeline that detects, classifies, and translates Nepali Devanagari script from images into English. Utilizes YOLOv9 for object detection, a custom OCR model in PyTorch exported with ONNX, and a translation layer for converting recognized text using NLP techniques. Trained on a custom-labeled subset of the COCO dataset adapted for Devanagari characters.",
      tech: ["Python", "PyTorch", "ONNX", "YOLOv9", "COCO Dataset", "NLP"],
      github: "https://github.com/nikunjpradhan31/DevanagariVision", // Replace with actual URL if different
      status: "In Progress"
    },
    {
      title: "Triaxial Shear Test Analyzer",
      description: "MATLAB-based application for analyzing triaxial shear test data from image or video input. Uses blob analysis and computer vision to track compression deformation. Includes manual annotation tools in App Designer to refine model predictions. Applies watershed segmentation, edge detection, and k-nearest neighbor search to estimate and reconstruct missing data points. Outputs a 3D model of the shear test for research and visualization.",
      tech: ["MATLAB", "App Designer", "MATLAB Deep Learning Toolbox", "Computer Vision"],
      status: "Complete"
    },
    {
      title: "RhinoChat",
      description: "Real-time chat application with WebRTC, Socket.IO, and MongoDB. Features secure authentication, group chats, and file sharing with GridFS.",
      tech: ["JavaScript", "React", "MongoDB", "Socket.IO", "WebRTC"],
      github: "https://github.com/nikunjpradhan31/Rhino",
      status: "Complete"
    },
    {
      title: "Matrix Calculator",
      description: "Advanced matrix operations including Gauss-Jordan elimination using NumPy and SciPy for linear algebra computations.",
      tech: ["Python", "NumPy", "SciPy", "C++"],
      github: "https://github.com/nikunjpradhan31/LinearAlgebraCalculator",
      status: "Complete"
    },
    
    
    
  ];

  const experiences = [
    {
      title: "Software Developer",
      company: "Missouri S&T",
      period: "2023 - 2024",
      achievements: [
        "Engineered MATLAB 3D simulation system for triaxial shear tests",
        "Improved blob analysis accuracy by 62% using deep learning optimization",
        "Implemented computer vision with watershed method for object detection",
        "Developed 3D model triangulation using ray tracing algorithms"
      ]
    },
    {
      title: "Math & Reading Instructor",
      company: "Kumon Learning Center",
      period: "2022 - 2023",
      achievements: [
        "Instructed 100+ students in mathematics and English",
        "Developed personalized learning strategies for ages 10-17",
        "Tracked and recorded student progress to understand and evaluate growth throughout the program",
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-300 font-mono">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-purple-500/30' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="flex items-center space-x-2">
              <span className="text-lg sm:text-xl font-bold text-purple-500">~/nikunj-pradhan</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {['about', 'projects', 'experience', 'skills', 'contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item)} 
                  className="text-gray-400 hover:text-purple-500 transition-colors text-sm lg:text-base"
                >
                  .{item}()
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-purple-500 z-50 relative"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-purple-500/30">
              <div className="px-4 py-6 space-y-4">
                {['about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(item)} 
                    className="block w-full text-left text-gray-400 hover:text-purple-500 transition-colors py-2 text-lg"
                  >
                    .{item}()
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="order-2 lg:order-1">
              {/* Terminal Window */}
              <div className="bg-gray-900 rounded-lg border border-purple-500/30 shadow-2xl mb-6 sm:mb-8">
                <div className="bg-gray-800 px-3 sm:px-4 py-2 flex items-center space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300 text-xs sm:text-sm ml-2 sm:ml-4">terminal</span>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="text-purple-500 mb-2 text-sm sm:text-base">
                    <span className="text-red-500">nikunj@portfolio</span>
                    <span className="text-white">:</span>
                    <span className="text-yellow-500">~</span>
                    <span className="text-white">$ whoami</span>
                  </div>
                  <div className="text-gray-300 mb-4 text-sm sm:text-base">
                    Data Science Co-Op @ Hunter Engineering Company |  Computer Science Student @ Missouri S&T
                  </div>
                  <div className="text-purple-500 text-sm sm:text-base break-all">
                    <span className="text-red-500">nikunj@portfolio</span>
                    <span className="text-white">:</span>
                    <span className="text-yellow-500">~</span>
                    <span className="text-white">$ {currentCommand}</span>
                    <span className="animate-pulse">_</span>
                  </div>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
                <span className="text-white">Hello, I'm </span>
                <span className="text-purple-500">Nikunj </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed">
              I'm a Junior in Computer Science at Missouri S&T and I am currently working as a Data Science Co-op at Hunter Engineering Company. My goal is to become an experienced Data Scientist or Systems Engineer.
              </p>

              <div className="flex space-x-4 sm:space-x-6">
                <a href="https://github.com/nikunjpradhan31" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-500 hover:text-purple-500 transition-colors">
                  <Github className="w-7 h-7 sm:w-8 sm:h-8" />
                </a>
                <a href="https://www.linkedin.com/in/nikunj-pradhan/" target="_blank" rel="noopener noreferrer"
                   className="text-gray-500 hover:text-purple-500 transition-colors">
                  <Linkedin className="w-7 h-7 sm:w-8 sm:h-8" />
                </a>
                <a href="mailto:nikunj.pradhan31@gmail.com"
                   className="text-gray-500 hover:text-purple-500 transition-colors">
                  <Mail className="w-7 h-7 sm:w-8 sm:h-8" />
                </a>
              </div>
            </div>

            {/* Right side - Photo placeholder */}
            {/* <div className="flex justify-center order-1 lg:order-2">
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gray-900 border-2 border-purple-500/30 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-purple-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl sm:text-4xl text-purple-500">👤</span>
                  </div>
                  <p className="text-gray-500 text-sm">Nikunj Pradhan</p>
                </div>
              </div>
            </div> */}
<img src={nikunjPfp} alt="Nikunj Pradhan" class="rounded-full object-cover scale-[0.8]" />
</div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">
              <span className="text-red-500">class</span> Projects {'{'}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-900 rounded-lg border border-red-500/20 p-6 sm:p-8 hover:border-red-500/40 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <span className="text-red-500 text-xs sm:text-sm">Status: {project.status}</span>
                  </div>
                  <Code className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 flex-shrink-0" />
                </div>
                
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-red-500/10 border border-red-500/30 text-red-500 text-xs px-2 sm:px-3 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                {project && project.github ? (<><div className="flex justify-between items-center">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors text-sm sm:text-base"
                  >
                    <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    view source
                  </a>
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                </div></>) : (<></>)}
                
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 sm:mt-16">
            <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">{'}'}</span>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">
              <span className="text-yellow-500">function</span> getExperience() {'{'}
            </h2>
          </div>
          
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-900 rounded-lg border border-yellow-500/20 p-6 sm:p-8 hover:border-yellow-500/40 transition-all">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 sm:mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-yellow-500 text-base sm:text-lg">{exp.company}</p>
                  </div>
                  <div className="mt-2 lg:mt-0 lg:text-right">
                    <p className="text-red-500 font-mono text-sm sm:text-base">{exp.period}</p>
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start space-x-3">
                      <ChevronRight className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm sm:text-base">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 sm:mt-16">
            <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">{'}'}</span>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">
              <span className="text-purple-500">const</span> skills = {'{'}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {Object.entries(skillCategories).map(([category, skills]) => (
              <div key={category} className="bg-gray-900 rounded-lg border border-purple-500/20 p-4 sm:p-6 hover:border-purple-500/40 transition-all">
                <h3 className="text-purple-500 font-bold mb-4 sm:mb-6 text-base sm:text-lg">{category}:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {skills.map((skill, index) => (
                    <div key={index} className="text-gray-300 text-xs sm:text-sm bg-gray-800 px-2 sm:px-3 py-2 rounded border border-gray-700">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 sm:mt-16">
            <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">{'}'}</span>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 sm:mb-8">
            <span className="text-purple-500">async</span> connect() {'{'}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-8 sm:mb-12">
            Let's build something amazing together. Always open to new opportunities and collaborations.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <a href="mailto:nikunj.pradhan31@gmail.com" 
               className="bg-gray-900 rounded-lg border border-purple-500/20 p-4 sm:p-6 hover:border-purple-500/50 transition-all">
              <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-white font-bold mb-2 text-sm sm:text-base">Email</h3>
              <p className="text-gray-400 text-xs sm:text-sm break-all">nikunj.pradhan31@gmail.com</p>
            </a>
            
            <a href="https://github.com/nikunjpradhan31" target="_blank" rel="noopener noreferrer"
               className="bg-gray-900 rounded-lg border border-purple-500/20 p-4 sm:p-6 hover:border-purple-500/50 transition-all">
              <Github className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-white font-bold mb-2 text-sm sm:text-base">GitHub</h3>
              <p className="text-gray-400 text-xs sm:text-sm">@nikunjpradhan31</p>
            </a>
            
            <a href="https://www.linkedin.com/in/nikunj-pradhan/" target="_blank" rel="noopener noreferrer"
               className="bg-gray-900 rounded-lg border border-purple-500/20 p-4 sm:p-6 hover:border-purple-500/50 transition-all sm:col-span-2 lg:col-span-1">
              <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-white font-bold mb-2 text-sm sm:text-base">LinkedIn</h3>
              <p className="text-gray-400 text-xs sm:text-sm">nikunj-pradhan</p>
            </a>
          </div>
          
          <div className="text-center">
            <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">{'}'}</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-purple-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
            <span className="text-gray-400 text-sm sm:text-base">© 2024 Nikunj Pradhan</span>
          </div>
          <p className="text-gray-500 text-xs sm:text-sm">
            Built with React, Tailwind CSS, and lots of momo 🥟
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-purple-500 text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-purple-400 transition-colors z-40"
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}
    </div>
  );
};

export default App;