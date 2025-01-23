import React from 'react';
import logo from './logo.svg';
import {motion} from "framer-motion";
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <div className="bg-gray-100 text-black font-regular">
      {/* HEADER */}
      <header  id="header" className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
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
              <a href="#home" className="text-black hover:text-green-300 transition">
                Home
              </a>
              <a href="#about" className="text-black hover:text-green-300 transition">
                About
              </a>
              <a href="#services" className="text-black hover:text-green-300 transition">
                Experience
              </a>
              <a href="#work" className="text-black hover:text-green-300 transition">
                Projects
              </a>
            </div>
          </div>
        </nav>

        {/* Desktop Nav */}
        <nav 
          className="hidden md:flex items-center justify-between h-[3.5rem] px-8" 
          id="large_nav"
        >
          <div className="flex space-x-8">
            <a href="#home" className="text-black hover:text-gray-400 transition">
              Home
            </a>
            <a href="#about" className="text-black hover:text-gray-400 transition">
              About
            </a>
            <a href="#services" className="text-black hover:text-gray-400 transition">
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
          {/* HOME SECTION */}
          <section className="min-h-[90vh] flex items-center justify-center py-10" id="home">
            <div className="relative bg-white rounded-full mx-auto w-100 h-100"></div>
            <div className="absolute container object-cover w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 px-5 md:px-10 mt-20">
              {/* Text */}
              <div className="md:text-left flex flex-col ml-20">
                <span className="block text-6xl text-black mb-2 font-semibold">
                  data engineer
                </span>
                <h1 className="text-5xl md:text-6xl text-black mt-5 font-semibold">
                  & developer.
                </h1>
                <p className="mt-7 leading-8 text-black font-medium">
                  Hi, I'm Chloe Park. A dedicated full-stack developer and data 
                  scientist who prioritizes the user experience. 
                </p>
                <div>
                  <h4 className="absolute mt-16 ml-7 text-lg md:text-base text-black font-bold">
                    SEE MY WORKS <i className="bx bx-right-arrow-alt ml-1"></i>
                  </h4>
                  <div className="bg-gray-200 rounded-full w-14 h-14 mt-12"></div>
                </div>
              </div> 
              {/* Image */}
              <div className="mx-auto w-56 h-56 rounded-full overflow-hidden md:w-60 md:h-60 border-8 border-gray-100">
                <img
                  src="assets/img/hey.jpg"
                  alt="casual shot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* ABOUT SECTION */}
          <section className="py-16" id="about">
            <div className="container mx-auto px-5 md:px-10">
            <div className="flex justify-center">
                <span className="absolute text-center text-lg text-gray-400 font-bold mt-2">
                  ABOUT 
                </span>
                <div className="bg-white rounded-full w-9 h-9 mr-16 mt-1"></div>
              </div>
              <h2 className="text-center text-2xl md:text-3xl text-black mt-5 mb-8 font-semibold">
                My Story
              </h2>

              <div className="flex w-1/2 mx-auto justify-center items-center">

                {/* About Text & Skills */}
                <div>
                  <p className="mb-6 leading-10 text-center font-medium">
                    I came into Rice proudly repping my D.C. roots, but I've quickly fallen in love with everything 
                    Houston has to offer. As a <b className="text-lg">computer science </b> major and <b className="text-lg"> data science </b> minor, I am constantly geeking out over 
                    software engineering and AI. There’s something <i>magical</i> about problem-solving through code, 
                    and I find so much joy in it. But I also have a soft spot for design (I mean, who doesn’t enjoy 
                    making things look <i>organized</i> AND <i>function</i> well?)
                    <br />
                    <br />
                    When I’m not coding or exploring new tech, I’m probably out with the people I love, 
                    discovering new spots to eat around Houston. If you’re a fellow f o o d i e, mentor, or just curious about all things CS, 
                    let’s chat! 
                  </p>
                  <p className="flex mb-6 leading-10 font-semibold justify-center"> csp8@rice.edu <h1 className="text-xl ml-2 mt-1">◡̈</h1></p>

                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                    {[
                      'HTML/CSS',
                      'Python',
                      'Next.js',
                      'MySQL',
                      'React',
                      'Java/OOP',
                      'Node.js',
                      'JavaScript',
                      'C#',
                      'Unity',
                    ].map((skill) => (
                      <div
                        key={skill}
                        className="bg-gray-200 text-center py-2 rounded-lg hover:bg-gray-100 hover:border-black hover:border-2 hover:text-gray-900 transition"
                      >
                        <span className="text-sm font-semibold">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* SERVICES (EXPERIENCES) SECTION */}
          <section className="py-16 bg-gray-100" id="services">
            <div className="container mx-auto px-5 md:px-10">
            <div className="flex justify-center">
                <span className="absolute text-center text-lg text-gray-400 font-bold mt-2">
                  LEARNING 
                </span>
                <div className="bg-white rounded-full w-9 h-9 mr-24 mt-1"></div>
              </div>
              <h2 className="text-center text-2xl md:text-3xl text-black mt-5 mb-8 font-semibold">
                Experiences
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-white p-6 rounded-xl relative">
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-semibold text-center mb-4">
                      Nao Now <br />
                      SWE Intern
                    </h3>
                    <span className="text-green-400 flex items-center gap-1 cursor-pointer">
                      See more <i className="bx bx-right-arrow-alt"></i>
                    </span>
                  </div>

                  {/* Modal (hidden by default; you'll show/hide via JS) */}
                  <div className="hidden absolute inset-0 bg-black bg-opacity-70 items-center justify-center">
                    <div className="bg-gray-800 p-6 rounded-xl relative max-w-xl mx-auto">
                      <i className="bx bx-x text-2xl text-green-400 absolute top-4 right-4 cursor-pointer"></i>
                      <img
                        src="assets/img/NaoNow Logo.png"
                        className="mx-auto mb-4 max-w-xs"
                        alt="NaoNow Logo"
                      />
                      <div className="text-center mb-4">
                        <h1 className="text-lg">
                          Software Engineer Intern{' '}
                          <a
                            href="https://www.naonow.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-green-400"
                          >
                            @NaoNow
                          </a>
                        </h1>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <i className="bx bx-check text-green-400 text-xl"></i>
                          <p>
                            Develop, in a cross-functional team using Agile
                            methodology, the full-stack of Nao Now’s new
                            website, an English-learning, edutainment platform,
                            with <b>over 100</b> mentors and <b>2000</b>{' '}
                            international users.
                          </p>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="bx bx-check text-green-400 text-xl"></i>
                          <p>
                            Construct multilingual landing pages through
                            HTML/CSS and JavaScript with improved website speed,
                            especially on mobile, thereby enhancing user
                            engagement.
                          </p>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="bx bx-check text-green-400 text-xl"></i>
                          <p>
                            Leveraged knowledge in: Full-Stack{' '}
                            <b>Software Development, JavaScript</b> Programming,{' '}
                            <b>HTML/CSS, Node.js, Figma</b>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-gray-900 p-6 rounded-xl relative">
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-semibold text-center mb-4">
                      Rice ML <br />
                      Researcher
                    </h3>
                    <span className="text-green-400 flex items-center gap-1 cursor-pointer">
                      See more <i className="bx bx-right-arrow-alt"></i>
                    </span>
                  </div>

                  {/* Modal */}
                  <div className="hidden absolute inset-0 bg-black bg-opacity-70 items-center justify-center">
                    <div className="bg-gray-800 p-6 rounded-xl relative max-w-xl mx-auto">
                      <i className="bx bx-x text-2xl text-green-400 absolute top-4 right-4 cursor-pointer"></i>
                      <img
                        src="assets/img/Rice Logo.png"
                        className="mx-auto mb-4 max-w-xs"
                        alt="Rice Logo"
                      />
                      <div className="text-center mb-4">
                        <h1 className="text-lg">
                          Machine Learning Researcher{' '}
                          <a
                            href="https://profiles.rice.edu/faculty/momona-yamagami"
                            target="_blank"
                            rel="noreferrer"
                            className="text-green-400"
                          >
                            @Rice University
                          </a>
                        </h1>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <i className="bx bx-check text-green-400 text-xl"></i>
                          <p>
                            Conduct a PCA and T-SNE analysis to examine the
                            personalized upper-body gestures of <b>26</b>{' '}
                            participants with restricted movement.
                          </p>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="bx bx-check text-green-400 text-xl"></i>
                          <p>
                            Perform subspace clustering to categorize a new
                            user's gesture and determine which algorithm
                            provides optimal data visualization.
                          </p>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="bx bx-check text-green-400 text-xl"></i>
                          <p>
                            Longer term goal involves devising a cluster-based
                            personalized federated learning algorithm in a
                            real-time user study.
                          </p>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="bx bx-check text-green-400 text-xl"></i>
                          <p>
                            Leveraged knowledge in: <b>Python</b> programming,{' '}
                            <b>Pandas, NumPy, SciPy, Matplotlib</b>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-gray-900 p-6 rounded-xl relative">
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-semibold text-center mb-4">
                      ENGAGE HBS
                      <br /> SA Intern
                    </h3>
                    <span className="text-green-400 flex items-center gap-1 cursor-pointer">
                      See more <i className="bx bx-right-arrow-alt"></i>
                    </span>
                  </div>

                  {/* Modal */}
                  <div className="hidden absolute inset-0 bg-black bg-opacity-70 items-center justify-center">
                    <div className="bg-gray-800 p-6 rounded-xl relative max-w-xl mx-auto">
                      <i className="bx bx-x text-2xl text-green-400 absolute top-4 right-4 cursor-pointer"></i>
                      <img
                        src="assets/img/Engage Logo.png"
                        className="mx-auto mb-4 max-w-xs"
                        alt="Engage Logo"
                      />
                      <div className="text-center mb-4">
                        <h1 className="text-lg">
                          Systems Analyst Intern{' '}
                          <a
                            href="http://www.engagehbs.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-green-400"
                          >
                            @ENGAGE HBS
                          </a>
                        </h1>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <i className="bx bx-check text-green-400 text-xl"></i>
                          <p>
                            Queried data from SQL server to produce new ad-hoc
                            schemas that effectively organize client data for
                            their <b>46+</b> clients.
                          </p>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="bx bx-check text-green-400 text-xl"></i>
                          <p>
                            Conducted manual unit tests to ensure the quality
                            and security of the SQL stored procedures.
                          </p>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="bx bx-check text-green-400 text-xl"></i>
                          <p>
                            Reconfigured ENGAGE Healthcare’s data-storing
                            software using Python while identifying system
                            vulnerabilities.
                          </p>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="bx bx-check text-green-400 text-xl"></i>
                          <p>
                            Leveraged knowledge in: <b>Python</b> programming,{' '}
                            <b>SQL</b>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* WORK (PROJECTS) SECTION */}
          <section className="py-16" id="work">
            <div className="container mx-auto px-5 md:px-10">
              <div className="flex justify-center">
                <span className="absolute text-center text-lg text-gray-400 font-bold mt-2">
                  PORTFOLIO 
                </span>
                <div className="bg-white rounded-full w-9 h-9 mr-28 mt-1"></div>
              </div>
              <h2 className="text-center text-2xl md:text-3xl text-black font-semibold mt-5 mb-8">
                Recent Projects
              </h2>

              {/* Filter Buttons (not fully functional unless you add JS) */}
              <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
                <span className="bg-gray-200 text-gray-900 px-3 py-1 rounded-full cursor-pointer font-semibold">
                  All
                </span>
                <span className="border border-gray-400 text-sm px-3 py-1 rounded-full cursor-pointer font-semibold">
                  Web
                </span>
                <span className="border border-gray-400 text-sm px-3 py-1 rounded-full cursor-pointer font-semibold">
                  Unity
                </span>
              </div>

              {/* Projects Grid */}
              <div className="grid md:grid-cols-2 gap-10">
                {/* Project 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                  <div className="bg-white p-4 rounded-xl flex flex-col items-center">
                    <img
                      src="assets/img/HNM.png"
                      alt="HNM"
                      className="rounded-lg mb-3"
                    />
                    <a
                      href="https://houston-ballet-official.vercel.app/welcome"
                      target="_blank"
                      rel="noreferrer"
                      className="text-green-400 text-sm flex items-center gap-1 mb-2"
                    >
                      Demo <i className="bx bx-right-arrow-alt"></i>
                    </a>
                    <a
                      href="https://github.com/rice-apps/houston-ballet"
                      target="_blank"
                      rel="noreferrer"
                      className="text-green-400 text-sm flex items-center gap-1"
                    >
                      Git <i className="bx bx-right-arrow-alt"></i>
                    </a>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-1">
                      Houston Ballet 
                    </h3>
                    <h4 className="text-md text-gray-300 font-medium mb-2">
                      Tech: React.js, Node.js, TypeScript, Twilio, Tailwind CSS,
                      Figma
                    </h4>
                    <p className="leading-relaxed">
                      A RiceApps web application designed to enhance the
                      Nutcracker Market experience for its <b>118,000+</b>{' '}
                      annual visitors and <b>300+</b> vendors. Increased
                      customer satisfaction ratings by <b>20%</b> and reduced
                      vendor search time by <b>75%</b>.
                    </p>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                  <div className="bg-white p-4 rounded-xl flex flex-col items-center">
                    <img
                      src="assets/img/NASASuitsCover.jpg"
                      alt="NASA Suits"
                      className="rounded-lg mb-3"
                    />
                    <a
                      href="https://github.com/NASA-SUITS-Daedalus"
                      target="_blank"
                      rel="noreferrer"
                      className="text-green-400 text-sm flex items-center gap-1"
                    >
                      Git <i className="bx bx-right-arrow-alt"></i>
                    </a>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-1">
                      NASA SUITS 
                    </h3>
                    <h4 className="text-md text-gray-300 font-medium mb-2">
                      Tech: C#, Unity, Docker, Figma
                    </h4>
                    <p className="leading-relaxed">
                      An augmented reality console using Unity and Microsoft’s
                      HoloLens Emulator to assist NASA’s Artemis crew during
                      extravehicular activity as part of a select group of{' '}
                      <b>17</b> universities.
                    </p>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                  <div className="bg-white p-4 rounded-xl flex flex-col items-center">
                    <img
                      src="assets/img/YutnoriWorkCover.png"
                      alt="Yutnori"
                      className="rounded-lg mb-3"
                    />
                    <a
                      href="https://simmer.io/@chloesp23/yutnori"
                      target="_blank"
                      rel="noreferrer"
                      className="text-green-400 text-sm flex items-center gap-1 mb-2"
                    >
                      Demo <i className="bx bx-right-arrow-alt"></i>
                    </a>
                    <a
                      href="https://github.com/chloep23/Yutnori"
                      target="_blank"
                      rel="noreferrer"
                      className="text-green-400 text-sm flex items-center gap-1"
                    >
                      Git <i className="bx bx-right-arrow-alt"></i>
                    </a>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-1">
                      Yutnori 
                    </h3>
                    <h4 className="text-md text-gray-300 font-medium mb-2">
                      Tech: C#, Unity, Procreate
                    </h4>
                    <p className="leading-relaxed">
                      A Unity 2D game with self-created Procreate graphics that
                      provides an accessible lens into Korean culture for the{' '}
                      <b>600</b> students at National Cathedral School with an
                      Asian body of less than <b>10%</b>. Achieved a <b>60%</b>{' '}
                      increase in students’ perceived cultural awareness.
                    </p>
                  </div>
                </div>

                {/* Project 4 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                  <div className="bg-white p-4 rounded-xl flex flex-col items-center">
                    <img
                      src="assets/img/DalgonaWorkCover.png"
                      alt="Dalgona"
                      className="rounded-lg mb-3"
                    />
                    <a
                      href="https://simmer.io/@chloesp23/dalgona"
                      target="_blank"
                      rel="noreferrer"
                      className="text-green-400 text-sm flex items-center gap-1 mb-2"
                    >
                      Demo <i className="bx bx-right-arrow-alt"></i>
                    </a>
                    <a
                      href="https://github.com/chloep23/Dalgona"
                      target="_blank"
                      rel="noreferrer"
                      className="text-green-400 text-sm flex items-center gap-1"
                    >
                      Git <i className="bx bx-right-arrow-alt"></i>
                    </a>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-1">
                      Dalgona  
                    </h3>
                    <h4 className="text-md text-gray-300 font-medium mb-2">
                      Tech: C#, Unity, Procreate
                    </h4>
                    <p className="leading-relaxed">
                      A fresh Unity 2D game incorporating original Procreate
                      graphics, designed to showcase Korean media to the
                      National Cathedral School students, specifically inspired
                      by Squid Games. Achieved a <b>60%</b> increase in
                      students’ perceived cultural awareness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="container mx-auto px-5 md:px-10 pb-8">
            <hr className="border-gray-700 mb-6" />
            <ul className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <h1 className="text-gray-400 text-lg font-medium">
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
      </div>
    </div>
  );
}

export default App;
