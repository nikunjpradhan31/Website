import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Terminal, Menu, X, ArrowUp, ChevronRight, Download, Sun, Moon} from 'lucide-react';
import nikunjPfp from './assets/nikunj_pradhan_pfp_2026.jpeg';
import dataScience from './assets/Nikunj_Pradhan_Data_Resume_5_30_26.pdf';
import SWE from './assets/Nikunj_Pradhan_SWE_Resume_5_30_26.pdf';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentCommand, setCurrentCommand] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = {
    bg: isDarkMode ? 'bg-black' : 'bg-white',
    text: isDarkMode ? 'text-gray-300' : 'text-gray-700',
    textSecondary: isDarkMode ? 'text-gray-400' : 'text-gray-600',
    textMuted: isDarkMode ? 'text-gray-500' : 'text-gray-500',
    accent: isDarkMode ? 'purple' : 'emerald',
    cardBg: isDarkMode ? 'bg-gray-900' : 'bg-gray-100',
    cardBorder: isDarkMode ? 'border-purple-500/20' : 'border-emerald-500/20',
    cardHoverBorder: isDarkMode ? 'hover:border-purple-500/40' : 'hover:border-emerald-500/40',
    accentText: isDarkMode ? 'text-purple-500' : 'text-emerald-500',
    hoverAccent: isDarkMode ? 'hover:text-purple-500' : 'hover:text-emerald-500',
    navBg: isDarkMode ? 'bg-black/95' : 'bg-white/95',
    navBorder: isDarkMode ? 'border-purple-500/30' : 'border-emerald-500/30',
    sectionBg: isDarkMode ? 'bg-gray-900/30' : 'bg-gray-50',
    footerBorder: isDarkMode ? 'border-purple-500/20' : 'border-emerald-500/20',
    buttonBg: isDarkMode ? 'bg-purple-500' : 'bg-emerald-500',
    buttonHover: isDarkMode ? 'hover:bg-purple-400' : 'hover:bg-emerald-400',
  };
  
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
  Languages: [
    "Python",
    "JavaScript",
    "SQL",
    "C++",
    "Java"
  ],
  Frameworks: [
    "FastAPI",
    "React.js",
    "Express.js",
    "Spring Boot",
  ],
  Databases: [
    "PostgreSQL",
    "Microsoft SQL",
    "pgvector",
    "MongoDB",
    "MinIO",
    "Redis"
  ],

  Deployment: [
    "Docker",
    "Kubernetes",
    "NGINX",
    "AWS",
    "CI/CD",],

  Libraries: [
    "NumPy",
    "SciPy",
    "Pandas",
    "Matplotlib",
    "OpenCV",
    "Playwright",
    "BeautifulSoup",
  ],
  ML: [
    "PyTorch",
    "Scikit-learn",
    "Recommendation Systems",
    "RAG",
    "MLOps",
    "LLMOps",
  ]
};

  const projects = [
{
  title: "Himalayan Hut",
  description: "Full-stack movie watchlist and recommendation app with personalized recommendations, secure 2FA login, and self-hosted deployment using Docker, NGINX, and Kubernetes.",
  tech: ["React", "FastAPI", "PostgreSQL", "MinIO", "Scikit-learn", "Python", "Docker","Kubernetes"],
  github: "https://github.com/nikunjpradhan31/TheHimalayanHut",
  live: "https://himalapp.nikunjpradhan.com",
  status: "Deployed"
},
  {
    "title": "Nepali Devanagari OCR",
    "description": "Built a Nepali OCR pipeline with CRNN architecture using ResNet and LSTM/Bi-LSTM models; compared CTC and Attention mechanisms, benchmarked against PaddleOCR and EasyOCR, collected and augmented 800+ text images, and deployed via FastAPI for real-time and batch inference with CER/WER evaluation.",
    "tech": ["Python", "Pytorch", "OpenCV", "FastAPI", "CRNN", "Seq2Seq"],
    "github": "https://github.com/nikunjpradhan31/NepaliDevanagariVision",
    "live": null,
    "status": "Deployed"
  },

    {
    "title": "Hybrid GNN-Mamba Model for Toxicity Prediction",
    "description": "Designed a parallel GIN + Mamba hybrid architecture for multi-task molecular toxicity prediction on Tox21. Innovated a graph-to-sequence mapping strategy achieving 75% ROC-AUC and 36% PR-AUC under scaffold split",
    "tech": ["Pytorch Geometric", "Mamba-SMM", "RDkit", "Tox21" ],
    "github": "https://github.com/nikunjpradhan31/Tox21-Modeling",
    "live": null,
    "status": "Completed"
  },

    {
    "title": "Blackjack Computer Vision Edge Analyzer",
    "description": "Architected a high-throughput decision engine integrating a CV pipeline and Apache Kafka to stream real-time data into a NumPy-vectorized Monte Carlo engine, simulating 100,000 concurrent states to calculate optimal Expected Value (EV).",
    "tech": ["FastAPI", "Numpy", "Apache Kafka"],
    "github": "https://github.com/nikunjpradhan31/FullHouseDevs",
    "live": null,
    "status": "Completed"
  },

  {
    "title": "20 NewsGroup Text Classification",
    "description": " Developed and evaluated three text classification models (Custom Naive Bayes, Linear SVM, and Multinomial Logistic Regression) on the 20 Newsgroups dataset, achieving up to 95.3% accuracy.",
    "tech": ["Python", "Jupyter", "Numpy", "Pandas", "Scikit-Learn" ],
    "github": "https://github.com/nikunjpradhan31/NewsGroupClassificationStudy",
    "live": null,
    "status": "Completed"
  },


  {
  "title": "Homelab",
  "description": "Personal server setup running Ubuntu 22.04, hosting Open WebUI contains a personal AI server channel, featuring Caddy reverse proxy, PostgreSQL databases, NAS storage, and hosting multiple websites including this portfolio and HimalayanHut.",
  "tech": ["Ubuntu 22.04", "Caddy", "PostgreSQL", "NAS Storage", "Docker", "NGINX", "Reverse Proxy", "Web Hosting"],
  "github": null,
  "live": null,
  "status": "Active"
},

    {
  title: "Rhino Chat",
  description:"Real-time chat app supporting secure one-on-one and group messaging, file sharing, persistent chat history, and a responsive mobile-first interface.",
  tech: ["React", "JavaScript", "Express.js", "MongoDB", "Socket.IO", "GridFS"],
  github: "https://github.com/nikunjpradhan31/Rhino",
  status: "Complete"
},

  {
    title: "Triaxial Shear Test Analyzer",
    description: "MATLAB/C++ app for analyzing triaxial shear tests using CV techniques, blob analysis, and k-NN to track deformation and reconstruct missing data, generating 3D models for research and visualization.",
    tech: ["C++","MATLAB", "App Designer", "MATLAB Deep Learning Toolbox", "Computer Vision", "Point Cloud", "OpenCV"],
    status: "Complete"
  },


    
    
    
  ];

const experiences = [
  {
    title: "Data Science Intern",
    company: "Quest Analytics",
    period: "May 2026 – Present",
    achievements: [
]

  },
  {
    title: "Data Science Co-Op",
    company: "Hunter Engineering Company",
    period: "January 2025 – August 2025",
    achievements: [
  "Improved image-based alphanumeric and regional classification accuracy from 56% to 84% through deep learning architecture refinement and hyperparameter optimization on noisy, imbalanced datasets.",
  "Engineered real-time production model dashboards, data pipelines, dataset analytical platform, and AI-assisted annotation endpoints.",
  "Built a CNN-based regression model predicting 4-point image coordinates, improving geometric correction accuracy by 23% and streamlining preprocessing.",
  "Automated cross-cloud benchmarking pipelines across AWS and Azure, enabling direct performance comparisons of vendor AI/ML models to drive strategic evaluation and decision-making.",
  "Created and maintained custom ETL pipelines using FastAPI and Python to clean, validate, and process metadata and image data from 600+ worksites ingesting over 2M images",
]

  },
  {
    title: "Software Engineer",
    company: "Tally Receipts",
    period: "June 2025 – December 2025",
    achievements: 
    [
  "Redesigned and migrated backend from MongoDB to AWS DynamoDB, redesigning schemas for efficient querying, scalability, and data lifecycle management.",
  "Integrated secure card linking API for application linking, designed business logic for safe card tracking in the database, and implemented webhooks to collect user purchase receipts.",
  "Built an LLM-powered receipt categorization service for receipt summarization and classification, integrating with calendar workflows to reduce manual entry effort for users.",
  "Implemented S3 file upload flows with pre-signed URLs and collaborated with the React Native frontend to maintain API compatibility post-migration",

]
  },
    {
    title: "Computer Vision Researcher",
    company: "Missouri University of Science and Technology",
    period: "August 2023 – December 2024",
    achievements: [

      "Optimized algorithms, increasing blob analysis accuracy 62% through hyperparameter tuning, and algorithmic refinement using C++ OpenCV and MATLAB.",
"Designed a C++/MATLAB application simulating 3D triaxial shear tests with deep learning and parallel computing for soil compression modeling with Point Cloud Library.",
"Utilized advanced computer vision techniques, including watershed segmentation and 3D model triangulation via ray tracing, and used a KNN-based algorithm for point classification.",
]

  },
];

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Missouri University of Science and Technology",
    period: "Expected 2026 - GPA 4.0/4.0",
    details: "Specializing in Data Science and Machine Learning Deployment."
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Missouri University of Science and Technology",
    period: "2023 – 2026 -  GPA 4.0/4.0",
    details: "Specializing in System Design Architecture, Data Science, and Software Engineering."
  }
];




  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} font-mono`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? `${theme.navBg} backdrop-blur-md border-b ${theme.navBorder}` : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="flex items-center space-x-2">
              <span className={`text-lg sm:text-xl font-bold ${theme.accentText}`}>~/nikunj-pradhan</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <div className="flex items-center space-x-6 lg:space-x-8">
                {['about', 'experience', 'education', 'projects', 'skills', 'contact', ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`text-gray-400 ${theme.hoverAccent} transition-colors text-sm lg:text-base`}
                  >
                    .{item}()
                  </button>
                ))}
              </div>
              <button onClick={() => setIsDarkMode(!isDarkMode)} className={`text-gray-400 ${theme.hoverAccent} transition-colors`}>
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden ${theme.accentText} z-50 relative`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className={`md:hidden absolute top-full left-0 right-0 ${theme.navBg} backdrop-blur-md border-b ${theme.navBorder}`}>
              <div className="px-4 py-6 space-y-4">
                {['about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`block w-full text-left text-gray-400 ${theme.hoverAccent} transition-colors py-2 text-lg`}
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
              <div className={`${theme.cardBg} rounded-lg border ${theme.cardBorder} shadow-2xl mb-6 sm:mb-8`}>
                <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} px-3 sm:px-4 py-2 flex items-center space-x-2`}>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300 text-xs sm:text-sm ml-2 sm:ml-4">terminal</span>
                </div>
                <div className="p-4 sm:p-6">
                  <div className={`${theme.accentText} mb-2 text-sm sm:text-base`}>
                    <span className="text-red-500">nikunj@portfolio</span>
                    <span className={isDarkMode ? 'text-white' : 'text-black'}>:</span>
                    <span className="text-yellow-500">~</span>
                    <span className={isDarkMode ? 'text-white' : 'text-black'}>$ whoami</span>
                  </div>
                  <div className={`${theme.text} mb-4 text-sm sm:text-base`}>
                    Software Engineer | Data Scientist | DevOps Engineer |  Undergraduate & Graduate Computer Science Student @ Missouri S&T
                  </div>
                  <div className={`${theme.accentText} text-sm sm:text-base break-all`}>
                    <span className="text-red-500">nikunj@portfolio</span>
                    <span className={isDarkMode ? 'text-white' : 'text-black'}>:</span>
                    <span className="text-yellow-500">~</span>
                    <span className={isDarkMode ? 'text-white' : 'text-black'}>$ {currentCommand}</span>
                    <span className="animate-pulse">_</span>
                  </div>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
                <span className={isDarkMode ? 'text-white' : 'text-black'}>Hello, I'm </span>
                <span className={`${theme.accentText}`}>Nikunj </span>
              </h1>
              <p className={`text-lg sm:text-xl ${theme.textSecondary} mb-6 sm:mb-8 leading-relaxed`}>
              I'm a Senior in Computer Science at Missouri S&T and I am currently working as a Data Science Intern at Quest Analytics. My goal is to become an experienced Data Scientist and Software Engineer.
              </p>

              <div className="flex space-x-4 sm:space-x-6">
                <a href="https://github.com/nikunjpradhan31" target="_blank" rel="noopener noreferrer"
                   className={`text-gray-500 ${theme.hoverAccent} transition-colors`}>
                  <Github className="w-7 h-7 sm:w-8 sm:h-8" />
                </a>
                <a href="https://www.linkedin.com/in/nikunj-pradhan/" target="_blank" rel="noopener noreferrer"
                   className={`text-gray-500 ${theme.hoverAccent} transition-colors`}>
                  <Linkedin className="w-7 h-7 sm:w-8 sm:h-8" />
                </a>
                <a href="mailto:nikunj.pradhan31@gmail.com"
                   className={`text-gray-500 ${theme.hoverAccent} transition-colors`}>
                  <Mail className="w-7 h-7 sm:w-8 sm:h-8" />
                </a>
                   <a href={SWE} target="_blank" rel="noopener noreferrer"
       className={`flex items-center text-gray-500 ${theme.hoverAccent} transition-colors space-x-2`}>
      <span>SWE Resume</span>
      <Download className="w-5 h-5 sm:w-5 sm:h-5" />
    </a>
    <a href={dataScience} target="_blank" rel="noopener noreferrer"
       className={`flex items-center text-gray-500 ${theme.hoverAccent} transition-colors space-x-2`}>
      <span>Data Science Resume</span>
      <Download className="w-5 h-5 sm:w-5 sm:h-5" />
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


      {/* Experience Section */}
      <section id="experience" className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ${theme.sectionBg}`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} mb-4`}>
              <span className="text-yellow-500">function</span> getExperience() {'{'}
            </h2>
          </div>
          
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`${theme.cardBg} rounded-lg border border-yellow-500/20 p-6 sm:p-8 hover:border-yellow-500/40 transition-all`}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 sm:mb-6">
                  <div>
                    <h3 className={`text-xl sm:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} mb-2`}>{exp.title}</h3>
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
                      <span className="mb-4 sm:mb-6 text-sm sm:text-base">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
           <div className="text-center mt-12 sm:mt-16">
             <span className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>{'}'}</span>
           </div>
         </div>
       </section>

       {/* Education Section */}
       <section id="education" className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ${theme.sectionBg}`}>
         <div className="max-w-4xl mx-auto">
           <div className="text-center mb-12 sm:mb-16">
             <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} mb-4`}>
               <span className="text-blue-500">function</span> loadEducation() {'{'}
             </h2>
           </div>
           
           <div className="space-y-8">
             {education.map((edu, index) => (
               <div key={index} className={`${theme.cardBg} rounded-lg border border-blue-500/20 p-6 sm:p-8 hover:border-blue-500/40 transition-all`}>
                 <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                   <div className="flex items-center space-x-3">
                     <div className={`p-2 rounded-lg bg-blue-500/10`}>
                       <Terminal className="w-5 h-5 text-blue-500" />
                     </div>
                     <div>
                       <h3 className={`text-xl sm:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} mb-2`}> {edu.degree} </h3>
                       <p className="text-blue-500 text-base sm:text-lg">{edu.school}</p>
                     </div>
                   </div>
                   <div className="mt-2 lg:mt-0 lg:text-right">
                     <p className="text-gray-500 font-mono text-sm sm:text-base">{edu.period}</p>
                   </div>
                 </div>
                 <p className={`${theme.textSecondary} text-sm sm:text-base italic`}>{edu.details}</p>
               </div>
             ))}
           </div>
           
           <div className="text-center mt-12 sm:mt-16">
             <span className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>{'}'}</span>
           </div>
         </div>
       </section>

       {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} mb-4`}>
              <span className="text-red-500">class</span> Projects {'{'}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`${theme.cardBg} rounded-lg border border-red-500/20 p-6 sm:p-8 hover:border-red-500/40 transition-all`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className={`text-xl sm:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} mb-2`}>{project.title}</h3>
                    <span className="text-red-500 text-xs sm:text-sm">Status: {project.status}</span>
                  </div>
                  <Code className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 flex-shrink-0" />
                </div>

                <p className={`${theme.text} mb-4 sm:mb-6 text-sm sm:text-base`}>{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-red-500/10 border border-red-500/30 text-red-500 text-xs px-2 sm:px-3 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                {project && (project.github || project.live) ? (
                  <>
                    <div className="flex justify-between items-center">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors text-sm sm:text-base"
                        >
                          <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                          view source
                        </a>
                      ) : (
                        <span />
                      )}

                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-gray-500 hover:text-gray-400 transition-colors text-sm sm:text-base"
                        >
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                        </a>
                      ) : (
                        <></>
                      )}
                    </div>
                  </>
                ) : null}
                
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 sm:mt-16">
            <span className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>{'}'}</span>
          </div>
        </div>
      </section>


       {/* Skills Section */}
       <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
         <div className="max-w-4xl mx-auto">
           <div className="text-center mb-12 sm:mb-16">
             <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} mb-4`}>
               <span className={`${theme.accentText}`}>const</span> skills = {'{'}
             </h2>
           </div>
           
           <div className={`${theme.cardBg} rounded-2xl border ${theme.cardBorder} p-6 sm:p-10 shadow-xl`}>
             <div className="space-y-8">
               {Object.entries(skillCategories).map(([category, skills]) => (
                 <div key={category} className="flex flex-col sm:flex-row sm:items-center gap-4">
                   <div className={`w-32 shrink-0 font-bold ${theme.accentText} text-sm sm:text-base tracking-wider uppercase`}>
                     {category}
                   </div>
                   <div className="flex flex-wrap gap-2">
                     {skills.map((skill, index) => (
                       <span key={index} className={`text-xs sm:text-sm px-3 py-1 rounded-md border transition-all duration-200 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-400 hover:text-white hover:border-purple-500/50' : 'bg-gray-100 border-gray-300 text-gray-600 hover:text-black hover:border-emerald-500/50'}`}>
                         {skill}
                       </span>
                     ))}
                   </div>
                 </div>
               ))}
             </div>
           </div>
           
           <div className="text-center mt-12 sm:mt-16">
             <span className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>{'}'}</span>
           </div>
         </div>
       </section>



      {/* Contact Section */}
      <section id="contact" className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ${theme.sectionBg}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} mb-6 sm:mb-8`}>
            <span className={`${theme.accentText}`}>async</span> connect() {'{'}
          </h2>
          <p className={`${theme.text} text-base sm:text-lg mb-8 sm:mb-12`}>
            Let's build something amazing together. Always open to new opportunities and collaborations.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <a href="mailto:nikunj.pradhan31@gmail.com"
                className={`${theme.cardBg} rounded-lg ${theme.cardBorder} p-4 sm:p-6 hover:${theme.accent}-500/50 transition-all`}>
              <Mail className={`w-6 h-6 sm:w-8 sm:h-8 ${theme.accentText} mx-auto mb-3 sm:mb-4`} />
              <h3 className={`${isDarkMode ? 'text-white' : 'text-black'} font-bold mb-2 text-sm sm:text-base`}>Email</h3>
              <p className={`${theme.textSecondary} text-xs sm:text-sm break-all`}>nikunj.pradhan31@gmail.com</p>
            </a>

            <a href="https://github.com/nikunjpradhan31" target="_blank" rel="noopener noreferrer"
                className={`${theme.cardBg} rounded-lg ${theme.cardBorder} p-4 sm:p-6 hover:${theme.accent}-500/50 transition-all`}>
              <Github className={`w-6 h-6 sm:w-8 sm:h-8 ${theme.accentText} mx-auto mb-3 sm:mb-4`} />
              <h3 className={`${isDarkMode ? 'text-white' : 'text-black'} font-bold mb-2 text-sm sm:text-base`}>GitHub</h3>
              <p className={`${theme.textSecondary} text-xs sm:text-sm`}>@nikunjpradhan31</p>
            </a>

            <a href="https://www.linkedin.com/in/nikunj-pradhan/" target="_blank" rel="noopener noreferrer"
                className={`${theme.cardBg} rounded-lg ${theme.cardBorder} p-4 sm:p-6 hover:${theme.accent}-500/50 transition-all sm:col-span-2 lg:col-span-1`}>
              <Linkedin className={`w-6 h-6 sm:w-8 sm:h-8 ${theme.accentText} mx-auto mb-3 sm:mb-4`} />
              <h3 className={`${isDarkMode ? 'text-white' : 'text-black'} font-bold mb-2 text-sm sm:text-base`}>LinkedIn</h3>
              <p className={`${theme.textSecondary} text-xs sm:text-sm`}>nikunj-pradhan</p>
            </a>
          </div>
          
          <div className="text-center">
            <span className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>{'}'}</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t ${theme.footerBorder}`}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <Terminal className={`w-4 h-4 sm:w-5 sm:h-5 ${theme.accentText}`} />
            <span className={`${theme.textSecondary} text-sm sm:text-base`}>© 2026 Nikunj Pradhan</span>
          </div>
          <p className={`${theme.textMuted} text-xs sm:text-sm`}>
            Built with React, Tailwind CSS, and lots of momo 🥟
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 ${theme.buttonBg} text-white p-2 sm:p-3 rounded-full shadow-lg ${theme.buttonHover} transition-colors z-40`}
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}
    </div>
  );
};

export default App;