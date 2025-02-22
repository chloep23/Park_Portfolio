import React, {useState, useEffect, useRef} from 'react';
import logo from './logo.svg';
import {motion, AnimatePresence, useInView} from "framer-motion";
import 'tailwindcss/tailwind.css';
import timelineElements from "./timelineElements";
import projectElements from "./projectElements";
import "react-vertical-timeline-component/style.min.css"

function App() {
  const [textIndex, setText] = useState(0);
  const texts = [" machine learning researcher ", " full-stack developer ", " data engineer/scientist "];
  const skills = [
    {
      title: "Full-Stack",
      techs: ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'HTML/CSS', 'Tailwind CSS', 'Framer Motion', 'MySQL'],
      color: 'bg-green outline-green',
    },
    {
      title: "Machine Learning",
      techs: ['NumPy', 'SciPy', 'Pandas', 'Matplotlib', 'Scikit-learn'],
      color: 'bg-salmon outline-salmon',
    },
    {
      title: "Programming",
      techs: ['Python', 'Java/OOP', 'C#', 'Unity', 'Git', 'JavaScript', 'TypeScript', 'Swift'],
      color: 'bg-brown outline-brown',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const currentItem = timelineElements[currentIndex]; 
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  // Detect when each section is in view
  const isAboutInView = useInView(aboutRef, { once: true, rootMargin: "-100px" });
  const isSkillsInView = useInView(skillsRef, { once: true, rootMargin: "-100px" });
  const isExperienceInView = useInView(experienceRef, { once: true, rootMargin: "-100px" });
  const isProjectsInView = useInView(projectsRef, { once: true, rootMargin: "-100px" });


  return (
    <div className="bg-beige text-black font-regular">
      {/* HEADER */}
      <header  id="header" className="fixed top-0 left-0 w-full bg-beige shadow-md z-50">
        {/* Mobile Nav */}
        <nav className="flex items-center justify-between h-[3.5rem] px-4 md:hidden" id="drop_nav">
          <div className="flex items-center space-x-2">
            {/* Toggle Button (Open) */}
            <button 
              className="text-2xl text-black" 
              id="drop"
            >
              <i className="bx bx-menu"></i>
            </button>
            {/* Toggle Button (Close) - hidden by default */}
            <button 
              className="hidden text-2xl text-black" 
              id="exit"
            >
              <i className="bx bx-x"></i>
            </button>
            {/* Dropdown Menu - hidden by default, absolutely positioned */}
            <div 
              className=" absolute top-[3.5rem] left-0 w-full bg-white shadow-md flex flex-col py-4 px-6 space-y-2" 
              id="nav_content"
            >
              <a href="#home" className="font-Marcellus text-black hover:text-green-300 transition">
                Home
              </a>
              <a href="#about" className="font-Marcellus text-black hover:text-green-300 transition">
                About
              </a>
              <a href="#experiences" className="font-Marcellus text-black hover:text-green-300 transition">
                Experience
              </a>
              <a href="#work" className="font-Marcellus text-black hover:text-green-300 transition">
                Projects
              </a>
            </div>
          </div>
        </nav>

        {/* Desktop Nav */}
        <nav 
          className="hidden md:flex items-center justify-between h-[3.5rem] px-10" 
          id="large_nav"
        >
          <a href="#home" className="text-center text-lg text-black font-Marcellus">
                Chloe Park
          </a>
          <div className="flex space-x-8 font-Marcellus text-lg">
            <a href="#home" className="text-black hover:text-gray-400 transition">
              Home
            </a>
            <a href="#about" className="text-black hover:text-gray-400 transition">
              About
            </a>
            <a href="#experiences" className="text-black hover:text-gray-400 transition">
              Experience
            </a>
            <a href="#work" className="text-black hover:text-gray-400 transition">
              Projects
            </a>
          </div>
        </nav>
      </header>

      {/*------------ MAIN CONTENT ----------*/}
      <div className="pt-[3.5rem]">
        <div className="">
          {/* INTRO SECTION */}
          <section className="min-h-[90vh] flex items-center justify-center py-10" id="home">
            <motion.div 
              id="mainCircle"
              initial={{
                scale:0.4,
                x: "-100vh"
              }}
              animate={{
                x: [null, 0], 
                scale: [0.4, 5], 
                rotate: [0, 360], 
              }}
              transition={{
                x: { duration: 2, ease: "easeOut" }, 
                scale: { delay: 2, duration: 2, ease: "easeInOut" }, 
                rotate: { delay: 2, duration: 2, ease: "easeInOut" }, 
              }}
              className="relative bg-salmon rounded-full mx-auto w-28 h-28">
                <motion.div
                  initial={{
                    scale: 0, 
                    x: 0, 
                  }}
                  animate={{
                    x: 35, 
                    scale: 1, 
                  }}
                  transition={{
                    type: "spring", 
                    stiffness: 100,
                    damping: 10, 
                    duration: 4, 
                    scale:{delay: 2, duration: 2},
                    delay: 2,
                  }}
                  className="absolute bg-cream rounded-full w-12 h-12"
                  style={{
                    left: "50%", 
                    top: "26%", 
                  }}
                >
                <motion.img
                  src="assets/img/casual.jpg" 
                  alt="Circle Content"
                  initial={{
                    opacity: 0,
                    borderWidth: 0, 
                  }}
                  animate={{
                    opacity: 1, 
                    borderWidth: 2, 
                  }}
                  transition={{ 
                    delay: 4,
                    borderWidth:{delay: 2},
                    duration: 1.5, 
                    ease: "easeInOut",
                  }}
                  className="rounded-full w-full h-full object-cover border-beige"
                />
              </motion.div>
            </motion.div>

            {/* HOME SECTION */}
            <div className="absolute container object-cover w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 px-5 md:px-10 mt-20">
              {/* Text */}
              <motion.div 
                initial={{ y: "-100px", opacity: 0 }} 
                animate={{ y: -20, opacity: 1 }}
                transition={{ delay: 4, duration: 1, ease: "easeOut", }}
                className="md:text-left flex flex-col ml-20">
                <span className="block text-6xl justify-stretch text-black mb-2 font-Marcellus">
                  Hey I'm 
                </span>
                <h1 className="text-3xl flex justify-stretch md:text-6xl text-black mt-4 font-Marcellus">
                  Chloe Park  
                </h1>
                <p className="mt-8 mb-2 text-black text-xl flex font-Marcellus">
                  A dedicated
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={textIndex}
                      initial={{ y: -20, opacity: 1, key:0}}
                      animate={{ y: -3, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      transition={{ duration: 1, ease: "easeOut"}}
                      className="text-2xl px-2 font-Marcellus"
                    >
                    <b>{texts[textIndex]}</b>
                    </motion.div>
                  </AnimatePresence>
                  who
                </p>
                <p className="mb-2 leading-8 text-black text-xl font-Marcellus"> prioritizes the user experience. </p>
                <motion.div
                  initial={{ y: "-100px", opacity: 0 }} 
                  animate={{ y: -20, opacity: 1 }}
                  transition={{delay:4.5, duration: 1}}>
                  <h4 className="absolute mt-16 ml-6 text-lg md:text-lg text-black font-Marcellus">
                    <a href="#work" className="text-black transition">SEE MY WORKS</a><i className="bx bx-right-arrow-alt ml-1"></i>
                  </h4>
                  <div className="bg-green rounded-full w-14 h-14 mt-12"></div>
                </motion.div>
              </motion.div> 
            </div>
          </section>

          {/* ABOUT SECTION */}
          <motion.div
            ref={aboutRef}
            initial={{ opacity: 0, y: 200 }}
            animate={isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="py-16" id="about">
            <div className="container mx-auto w-11/12">
              <div className="flex justify-center items-center ml-3">
                <span className="absolute text-center text-lg text-brown font-Marcellus mt-2">
                  <b>A B O U T</b> 
                </span>
                <div className="bg-salmon rounded-full w-9 h-9 mr-20 mt-1"></div>
              </div>
              <h2 className="text-center text-2xl md:text-3xl text-black mt-5 mb-8 font-Marcellus">
                My Story
              </h2>
              <div className="flex w-3/5 mx-auto justify-center items-center">
                <p className="leading-10 text-center font-Marcellus text-lg">
                  I came into Rice proudly repping my D.C. roots, but I've quickly fallen in love with everything 
                  Houston has to offer. As a <b className="text-xl text-purple">computer science </b> major and <b className="text-lg text-purple"> data science </b> minor, I am constantly geeking out over 
                  software engineering and AI. There’s something <i>magical</i> about problem-solving through code, 
                  and I find so much joy in it. But I also have a soft spot for design (I mean, who doesn’t enjoy 
                  making things look <i>beautiful</i> AND <i>functional</i>?)
                  <br />
                  <br />
                  When I’m not coding or exploring new tech, I’m probably out with the people I love, 
                  discovering new spots to eat around Houston. If you’re a fellow f o o d i e, mentor, or just curious about all things CS, 
                  let’s chat! 
                </p>
              </div>
            </div>
          </motion.div>

          {/* SKILLS SECTION */}
          <motion.div 
            ref={skillsRef}
            initial={{ opacity: 0, y: 200 }}
            animate={isSkillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1.5 }}
            className="py-16" id="services">
            <div className="container mx-auto px-5 md:px-10 justify-center">
              <div className="flex justify-center ml-3">
                <span className="absolute text-center text-lg text-brown font-Marcellus mt-2">
                  <b>E X P E R T I S E</b> 
                </span>
                <div className="bg-salmon rounded-full w-9 h-9 mr-32 mt-1"></div>
              </div>
              <h2 className="text-center text-2xl md:text-3xl text-black mt-5 mb-8 font-Marcellus">
                Technical Skills
              </h2>
              <div className="grid grid-cols-3 gap-5 w-8/12 justify-center mx-auto font-Marcellus">
                {skills.map((skill, index) => (
                  <div key = {index} 
                       className="flex flex-col w-11/12 bg-cream rounded-lg shadow-lg shadow-gray py-5 mx-auto">
                   <h2 className="text-xl font-Marcellus mb-3 mx-auto"><b>{skill.title}</b></h2>  
                   <div className="flex flex-col gap-3">
                      {skill.techs.map((tech, i) => (
                      <button
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm text-black font-medium bg-opacity-40 mx-auto justify-center hover:outline hover:bg-cream ${skill.color}`}
                      >
                      {tech}
                      </button>   
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* EXPERIENCES SECTION */}
          <motion.div 
            ref={experienceRef}
            initial={{ opacity: 0, y: 200 }}
            animate={isExperienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1.5 } }
            className="py-16" id="experiences">
            <div className="container mx-auto px-5 md:px-10">
              <div className="flex justify-center ml-3">
                  <span className="absolute text-center text-lg text-brown font-Marcellus mt-2">
                    <b>L E A R N I N G</b> 
                  </span>
                  <div className="bg-salmon rounded-full w-9 h-9 mr-32 mt-1"></div>
              </div>
              <h2 className="text-center text-2xl md:text-3xl text-black mt-5 mb-8 font-Marcellus">
                Experiences
              </h2>

              <div className="w-9/12 h-96 grid grid-cols-4 justify-center items-center m-auto" >
                {/* Sidebar */}
                <div className="md:flex flex-col col-span-1 border-l-4 border-cream">
                  {timelineElements.map((item, index) => (
                    <p
                      key={index}
                      className={`cursor-pointer text-lg p-4 w-4/5 rounded-r-lg font-Marcellus transition-all ${
                        index === currentIndex ? "text-cream bg-green" : "text-gray-600"
                      }`}
                      onClick={() => setCurrentIndex(index)}
                    >
                      {item.company}
                    </p>
                  ))}
                </div>
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col col-span-3 p-6 justify-center bg-cream rounded-lg shadow-lg shadow-gray"
                >
                  <h2 className="text-2xl font-Marcellus"><b>{currentItem.title}</b></h2>
                  <a 
                    href={currentItem.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 cursor-pointer text-green text-xl font-Marcellus"><b>{currentItem.company}</b></a>
                  <p className="mt-2 text-gray-500 text-base font-Marcellus">{currentItem.date}</p>
                  <p className="mt-4 text-gray-600 font-Marcellus" dangerouslySetInnerHTML={{ __html: currentItem.bullet1 }}></p>
                  <p className="mt-2 text-gray-600 font-Marcellus" dangerouslySetInnerHTML={{ __html: currentItem.bullet2 }}></p>
                  <p className="mt-2 text-gray-600 font-Marcellus" dangerouslySetInnerHTML={{ __html: currentItem.bullet3 }}></p>
                  <h className="mt-2 text-gray-600 font-Marcellus" dangerouslySetInnerHTML={{ __html: currentItem.bullet4 }}></h>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* WORK (PROJECTS) SECTION */}
          <motion.div 
            ref={projectsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isProjectsInView ? { opacity: 1, y: 0 }: {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="py-16" id="work">
            <div className="container mx-auto px-5 md:px-10">
              <div className="flex justify-center ml-3">
                  <span className="absolute text-center text-lg text-brown font-Marcellus mt-2">
                    <b>P O R T F O L I O</b> 
                  </span>
                  <div className="bg-salmon rounded-full w-9 h-9 mr-32 mt-1"></div>
              </div>
              <h2 className="text-center text-2xl md:text-3xl text-black mt-5 mb-8 font-Marcellus">
                Recent Projects
              </h2>

              {/* Filter Buttons (not fully functional unless you add JS) */}
              <div className="flex flex-wrap justify-center items-center gap-4 mb-6 font-Marcellus">
                <span className="bg-gray-200 text-gray-900 px-3 py-1 rounded-full cursor-pointer">
                  All
                </span>
                <span className="border border-gray-400 text-sm px-3 py-1 rounded-full cursor-pointer">
                  Web
                </span>
                <span className="border border-gray-400 text-sm px-3 py-1 rounded-full cursor-pointer">
                  Unity
                </span>
              </div>

              {/* Projects Grid */}
              <div className="grid md:grid-cols-3 gap-10 w-3/4 mx-auto justify-center">
                  {projectElements.map((item, index) => (
                    <div key={index} className="rounded-xl flex flex-col bg-cream shadow-lg shadow-gray h-96 p-4 font-Marcellus">
                       <img
                            src={item.image}
                            alt="Proj_Img"
                            loading="lazy" 
                            className={`rounded-t-lg h-36 w-full bg-beige transition-all duration-2000 ease-in-out ${
                              loaded ? "opacity-100 blur-0" : "opacity-0 blur-lg"
                            }`}
                            onLoad={() => setLoaded(true)}
                          />
                      <h4 className="text-sm text-gray-400 mt-4"> {item.date} </h4>
                      <h3 className="text-xl text-black mb-4 mt-2">
                        <b>{item.title}</b>
                      </h3>
                      <p className="leading-snug text-base text-gray-500">{item.description} </p>
                     </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* FOOTER */}
          <footer className="container mx-auto px-5 md:px-10 pb-8">
            <hr className="border-gray-700 mb-6" />
            <ul className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <h1 className="text-gray-400 text-lg font-Marcellus">
                chloesp23@gmail.com
              </h1>
              <div className="flex space-x-4 text-2xl">
                <a
                  href="https://github.com/chloep23"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-400 hover:text-green-300 transition"
                >
                  <i className="bx bxl-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/chloe-park-750294240"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-400 hover:text-green-300 transition"
                >
                  <i className="bx bxl-linkedin-square"></i>
                </a>
              </div>
            </ul>
          </footer>
        </div>
      </di