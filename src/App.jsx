import { useState, useEffect } from 'react';

// Project data
const projects = [
  {
    id: 'wos',
    title: 'WOS ID 2024 WORLDTOUR',
    category: 'Branding, Artist ID',
    description: 'WOS is a renowned Argentine artist known for his versatility across genres such as rap, rock, and pop. Rising to fame through freestyle battles, he has established himself as one of the most influential figures in contemporary music in Latin America. He is represented by Doguito Records, an independent label supporting his artistic journey.',
    about: 'In this design project I oversaw and created over 150 adaptations for various digital and physical media for the WORLDTOUR 2024. Responsibilities included organizing and selecting color palettes, making adaptation decisions, and managing design elements. This included 8 different designs for the National Tour and 30 different designs for the International Tour, each with 4+ format adaptations, in addition to the announcement designs for the tours.',
    systemNote: 'The system integrates typography that easily transforms for each format, along with illustrations adapted by country, allowing new locations to be generated quickly and efficiently—all while maintaining a consistent visual system.',
    images: ['wos-main', 'wos-billboard', 'wos-phone', 'wos-posters'],
    color: '#000',
    size: 'large'
  },
  {
    id: 'spotify',
    title: 'SPOTIFY ARGENTINA',
    category: 'Animation Design',
    description: 'Developed 2D animations for various Spotify projects featured in public spaces across Buenos Aires. Each piece was created in line with Spotify\'s core values and visual identity. Projects included La Cruda by Migue Granados, the Éxitos Argentina playlist, among others.',
    images: ['spotify'],
    color: '#1DB954',
    size: 'medium'
  },
  {
    id: 'tina',
    title: 'AGUSTINA CHALUPOWICZ x TRI',
    category: 'Artist ID',
    description: 'Agustina is a distinguished plastic artist known for her ability to unite various materials in her works. She explores the interplay of shapes and the abstraction of materiality, examining the relationships that emerge between diverse materials such as acrylic, cement, plaster, plastic, metal, and others.',
    about: '',
    images: ['tina'],
    color: '#FFD700',
    size: 'medium'
  },
  {
    id: 'kosice',
    title: 'KOSICE',
    category: 'Branding, Foundation',
    description: 'Brand identity for Fundación Kosice.',
    images: ['kosice'],
    color: '#6B5BFF',
    size: 'medium'
  },
  {
    id: 'calm',
    title: 'calm.',
    category: 'Branding',
    description: 'Calm is an Argentine brand focused on products that promote better sleep and relaxation. As a graphic designer, I created a variety of visual assets for social media and the physical store, always ensuring brand consistency and visual harmony.',
    systemNote: 'Designs for RRSS, Street advertisemnt',
    images: ['calm'],
    color: '#FFB800',
    size: 'medium'
  },
  {
    id: 'margot',
    title: 'MARGOT',
    category: 'Branding',
    description: 'Margot is an Argentine design brand that specializes in creating timeless handbags and accessories. All of its products are thoughtfully crafted to ensure they are original, classic and functional. Each item is handmade in workshops across Argentina, where artisans use traditional techniques and noble materials to guarantee maximum durability.',
    about: 'The client sought a timeless logo to reflect their products\' enduring nature, designed to transcend the disposable trends of fast fashion. For this Capsule Logo, the objective was to create a design that felt fresh, harmonized seamlessly with the existing branding, and stood out as a signature element for the spring-summer season.',
    systemNote: 'Margot\'s essence lies in balancing contrasts: blending softness with rigidity, the amorphous with perfect symmetry, and the ethereal quality of air with the solidity of concrete.',
    images: ['margot'],
    color: '#E63946',
    size: 'medium'
  },
  {
    id: 'yuki',
    title: 'YUKI at FINA Revista',
    category: 'Branding, Editorial Design',
    description: 'FINA is an Argentine magazine showcasing cutting-edge art, design, and contemporary culture. With striking visuals and a focus on emerging talent, it highlights innovative creations, artist interviews, and cultural analysis, making it a key reference in the local and international creative scene.',
    about: 'The crossover between YUKI, an Argentine creative agency, and FINA, an Argentine art and culture magazine, represents a unique collaboration blending innovative design and contemporary cultural expression. Together, they combine YUKI\'s expertise in branding, visual storytelling, and creative strategy with FINA\'s deep connection to cutting-edge art, design, and emerging talent.',
    systemNote: 'This partnership elevates both brands, creating projects that push artistic boundaries while showcasing the best of Argentina\'s creative scene.',
    images: ['yuki'],
    color: '#000',
    size: 'medium'
  },
  {
    id: 'oddmami',
    title: 'ODD MAMI ID CONCERT',
    category: 'Artist ID',
    description: 'Odd Mami is an artist who constantly navigates between the alternative and pop scenes, reinventing herself and building an intimate connection with her audience through sounds that resonate with memory and collective emotions. She is represented by Bohemian Groove Corporation.',
    about: 'In this ID design for her show at Niceto, the visuals complement Odd Mami\'s dreamlike world—one that remains deeply rooted in a dark reality. They blend elements of fantasy and sensitivity, delicately steering toward a softly haunting, shadowy atmosphere.',
    images: ['oddmami'],
    color: '#1a1a1a',
    size: 'medium'
  },
  {
    id: 'bosque',
    title: 'Bosque Gin',
    category: 'Packaging Design, Branding',
    description: 'Bosque Gin is an Argentine craft gin brand inspired by the native forests of Patagonia. It combines carefully selected botanicals with pure mountain water to create a premium spirit that reflects the natural richness and complexity of the region. Each bottle is a tribute to the wild landscapes of the south, blending tradition, craftsmanship, and a deep respect for nature.',
    about: 'Expediciones is a special edition by Bosque Gin that celebrates the spirit of exploration and adventure in the wild landscapes of Patagonia. The concept pays tribute to those who venture off the beaten path, connecting with nature in its most raw and inspiring form.',
    systemNote: 'I designed the packaging for this edition, focusing on the label and overall visual identity. My goal was to reflect the essence of the Expediciones concept while staying true to Bosque Gin\'s core branding.',
    images: ['bosque'],
    color: '#F5F5DC',
    size: 'medium'
  },
  {
    id: 'upcoming',
    title: 'UPCOMING PROJECT',
    category: '///',
    description: 'Coming soon.',
    images: [],
    color: '#000',
    size: 'small'
  }
];

// Placeholder images using project colors
const getProjectImage = (project, index = 0) => {
  const colors = {
    'wos': 'linear-gradient(135deg, #00D4FF 0%, #FF00FF 50%, #FFE500 100%)',
    'spotify': 'linear-gradient(135deg, #1DB954 0%, #191414 100%)',
    'tina': 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 50%, #4ECDC4 100%)',
    'kosice': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'calm': 'linear-gradient(135deg, #FFB800 0%, #FF8C00 100%)',
    'margot': 'linear-gradient(135deg, #E63946 0%, #F4A261 100%)',
    'yuki': 'linear-gradient(135deg, #FFE500 0%, #FF6B00 100%)',
    'oddmami': 'linear-gradient(135deg, #2D2D2D 0%, #1a1a1a 100%)',
    'expediciones': 'linear-gradient(135deg, #F5F5DC 0%, #DEB887 100%)',
    'upcoming': '#000'
  };
  return colors[project.id] || '#333';
};

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentView, setCurrentView] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentCVPage, setCurrentCVPage] = useState(1);
  const [kosicePage, setKosicePage] = useState(1);
  const totalCVPages = 2; // CV has 2 pages
  const totalKosicePages = 58;

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      // Home -> Projects (Scroll Down)
      if (currentView === 'home' && e.deltaY > 0) {
        handleGoToProjects();
      }
      // Projects -> Home (Scroll Up at top)
      else if (currentView === 'projects' && e.deltaY < 0 && window.scrollY === 0) {
        handleBackToHome();
      }
    };
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentView]);

  const bgColor = darkMode ? '#000' : '#fff';
  const textColor = darkMode ? '#fff' : '#000';

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentView('project');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedProject(null);
  };

  const handleGoToProjects = () => {
    setCurrentView('projects');
    setSelectedProject(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const RenderFooter = () => (
    <footer style={{
      width: '100%',
      padding: '40px 40px 20px 40px', // Adjusted padding for bottom alignment visual
      borderTop: `1px solid ${darkMode ? '#333' : '#ddd'}`,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end', // Align bottom
      backgroundColor: bgColor,
      color: textColor,
      position: 'relative',
      zIndex: 10
    }}>
      <img
        src="/tri-monograma_1.png"
        alt="TRI"
        style={{
          height: '100px', // Larger size
          width: 'auto',
          display: 'block',
          filter: darkMode ? 'none' : 'invert(1)',
          marginBottom: '-10px' // Optical adjustment for line-height/padding
        }}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
        <a
          href="mailto:tri.solsoto@gmail.com"
          style={{
            color: textColor,
            textDecoration: 'underline',
            fontSize: '13px',
            textUnderlineOffset: '4px'
          }}
        >
          tri.solsoto@gmail.com
        </a>

        <div style={{ display: 'flex', gap: '0' }}>
          <div className="arrow-btn">←</div>
          <div className="arrow-btn">→</div>
        </div>

        <div
          className="toggle-btn"
          style={{ backgroundColor: textColor }}
          onClick={() => setDarkMode(!darkMode)}
        />
      </div>

      <div style={{ textAlign: 'right', fontSize: '12px', opacity: 0.8 }}>
        <div>Graphic Design, Art Direction</div>
        <div>Buenos Aires, 2025</div>
      </div>
    </footer>
  );

  return (
    <div style={{
      backgroundColor: bgColor,
      color: textColor,
      minHeight: '100vh',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      transition: 'background-color 0.5s ease, color 0.5s ease',
      width: '100%',
      position: 'relative'
    }}>
      {/* Centered content container */}
      <div style={{
        maxWidth: '1440px',
        margin: '0 auto',
        position: 'relative',
        backgroundColor: bgColor,
        minHeight: '100vh',
        transition: 'background-color 0.5s ease'
      }}>

        {/* Styles */}
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          html {
            scroll-behavior: smooth;
          }
          
          .logo-text {
            font-family: 'Bebas Neue', sans-serif;
            font-weight: 400;
            letter-spacing: -0.02em;
          }
          
          .nav-link {
            text-decoration: underline;
            text-underline-offset: 4px;
            cursor: pointer;
            transition: opacity 0.3s ease;
          }
          
          .nav-link:hover {
            opacity: 0.6;
          }
          
          .project-card {
            cursor: pointer;
            overflow: hidden;
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease;
          }
          
          .project-card:hover {
            transform: scale(0.98);
          }
          
          .project-card:hover .project-overlay {
            opacity: 1;
          }
          
          .project-overlay {
            position: absolute;
            inset: 0;
            background: rgba(0,0,0,0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          
          .fade-in {
            opacity: 0;
            animation: fadeIn 0.8s ease forwards;
          }

          .animate-drop-in {
            opacity: 0;
            transform: translateY(-10vh);
            animation: dropIn 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          }

          .animate-rise-up {
            opacity: 0;
            transform: translateY(30px);
            animation: riseUp 0.8s ease forwards;
          }
          
          .fade-in-delay-1 { animation-delay: 0.1s; }
          .fade-in-delay-2 { animation-delay: 0.2s; }
          .fade-in-delay-3 { animation-delay: 0.3s; }
          .fade-in-delay-4 { animation-delay: 0.4s; }
          
          @keyframes fadeIn {
            to { opacity: 1; }
          }

          @keyframes dropIn {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes riseUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .hero-logo {
            font-family: 'Bebas Neue', sans-serif;
            font-weight: 400;
            font-size: clamp(200px, 45vw, 600px);
            line-height: 0.85;
            letter-spacing: -0.02em;
            display: flex;
            justify-content: space-between;
            width: 100%;
          }
          
          .back-to-top {
            text-decoration: underline;
            text-underline-offset: 4px;
            cursor: pointer;
            transition: opacity 0.3s;
          }
          
          .back-to-top:hover {
            opacity: 0.6;
          }
          
          .toggle-btn {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            cursor: pointer;
            transition: transform 0.3s ease, background-color 0.3s ease;
          }
          
          .toggle-btn:hover {
            transform: scale(1.2);
          }
          
          .arrow-btn {
            width: 40px;
            height: 40px;
            border: 1px solid currentColor;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: background-color 0.3s, color 0.3s;
          }
          
          .arrow-btn:hover {
            background-color: ${textColor};
            color: ${bgColor};
          }
        `}</style>

        {/* Navigation */}
        <nav style={{
          position: 'fixed',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1440px',
          padding: '20px 40px',
          zIndex: 100,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'transparent', // Transparent on home
          mixBlendMode: 'difference', // Ensure visibility over everything
          color: '#fff'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span
              className="logo-text"
              style={{ fontSize: '18px', cursor: 'pointer' }}
              onClick={handleBackToHome}
            >
              TRI
            </span>
            <div
              className="toggle-btn"
              style={{ backgroundColor: '#fff' }}
              onClick={() => setDarkMode(!darkMode)}
            />
          </div>

          <div style={{
            display: 'flex',
            gap: '60px',
            fontSize: '13px',
            fontWeight: 400,
            letterSpacing: '0.02em'
          }}>
            <span className="nav-link" onClick={handleGoToProjects}>PROJECTS</span>
            <span className="nav-link" onClick={() => setCurrentView('personal')}>PERSONAL</span>
            <span className="nav-link">CONTACT</span>
          </div>

          <div
            className="back-to-top"
            style={{
              opacity: currentView !== 'home' ? 1 : 0,
              fontSize: '13px',
              pointerEvents: currentView !== 'home' ? 'auto' : 'none'
            }}
            onClick={handleBackToHome}
          >
            ○
          </div>
        </nav>

        {currentView === 'home' ? (
          /* Hero Section - ONLY Monogram */
          <section className="fade-in" style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Constrained container that wraps the image exactly */}
            <div style={{
              position: 'relative',
              maxHeight: '85vh',
              maxWidth: '100%',
              width: 'fit-content', // Shrink to image width
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <img
                src="/tri-monograma 1.png"
                alt="TRI"
                className={isLoaded ? 'animate-drop-in' : ''}
                style={{
                  maxHeight: '80vh',
                  maxWidth: '100%',
                  width: 'auto',
                  height: 'auto',
                  display: 'block',
                  filter: darkMode ? 'none' : 'invert(1)',
                  opacity: isLoaded ? 1 : 0
                }}
              />

              {/* Text ABSOLUTE to the Image Container -> Perfect Alignment */}
              <div
                className={isLoaded ? 'fade-in fade-in-delay-3' : ''}
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  transform: 'translateY(100%)', // Move below the image
                  marginTop: '-5px', // Pull up to level with monogram base
                  fontSize: '13px',
                  fontWeight: 400,
                  lineHeight: 1.4,
                  opacity: 0,
                  // Removed mixBlendMode to ensure correct color in light mode
                  color: textColor,
                  whiteSpace: 'nowrap'
                }}
              >
                <div>Graphic Design, Art Direction</div>
                <div>Buenos Aires, 2025</div>
              </div>
            </div>
          </section>

        ) : currentView === 'projects' ? (
          <>
            {/* Projects Grid View */}
            <section id="projects" className="fade-in" style={{ padding: '120px 0 100px 0' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0px',
                backgroundColor: darkMode ? '#222' : '#ddd'
              }}>
                {/* WOS */}
                <div
                  className="project-card"
                  style={{
                    aspectRatio: '1.6',
                    background: getProjectImage(projects[0]),
                    position: 'relative'
                  }}
                  onClick={() => handleProjectClick(projects[0])}
                >
                  <img
                    src="/Group_6.png"
                    alt="WOS"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => e.target.style.display = 'none'}
                  />
                  <div className="project-overlay">
                    <span className="logo-text" style={{ fontSize: '24px', color: '#fff' }}>
                      {projects[0].title}
                    </span>
                  </div>
                </div>

                {/* Spotify */}
                <div
                  className="project-card"
                  style={{
                    aspectRatio: '1.6',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    backgroundColor: '#1DB954'
                  }}
                  onClick={() => handleProjectClick(projects[1])}
                >
                  <img
                    src="/spotify/cover-thumbnail.png"
                    alt="Spotify Argentina"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Tina */}
                <div
                  className="project-card"
                  style={{
                    aspectRatio: '1.6',
                    position: 'relative'
                  }}
                  onClick={() => handleProjectClick(projects[2])}
                >
                  <img
                    src="/Captura_de_pantalla_2024-12-31_a_la_s__16_00_49_1.png"
                    alt="TINA"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = getProjectImage(projects[2]);
                    }}
                  />
                  <div className="project-overlay">
                    <span style={{ color: '#fff', fontSize: '18px' }}>TINA</span>
                  </div>
                </div>

                {/* Kosice */}
                <div
                  className="project-card fade-in fade-in-delay-4"
                  style={{
                    aspectRatio: '1.6',
                    background: getProjectImage(projects[3]),
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onClick={() => handleProjectClick(projects[3])}
                >
                  <img
                    src="/kosice/kosice.png"
                    alt="KOSICE"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = getProjectImage(projects[3]);
                    }}
                  />
                  <div className="project-overlay">
                    <span style={{ color: '#fff', fontSize: '24px' }}>KOSICE</span>
                  </div>
                </div>

                {/* Row 2: Calm + Margot */}
                <div
                  className="project-card fade-in"
                  style={{
                    background: getProjectImage(projects[4]),
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    aspectRatio: '1.6'
                  }}
                  onClick={() => handleProjectClick(projects[4])}
                >
                  <img
                    src="/calm/calm.png"
                    alt="calm."
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} // 'contain' might be better for a logo, but 'cover' fills the tile. User said "la imagen", assuming full tile.
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = getProjectImage(projects[4]);
                    }}
                  />
                  {/* Overlay omitted if image is logo/text itself, but might want hover effect. Keeping clean image as per request "esa imagen la quiero en el menu". */}
                  <div className="project-overlay">
                    <span style={{ fontSize: '32px', fontWeight: 500, color: '#fff' }}>calm.</span>
                  </div>
                </div>

                <div
                  className="project-card"
                  style={{
                    position: 'relative',
                    aspectRatio: '1.6'
                  }}
                  onClick={() => handleProjectClick(projects[5])}
                >
                  <img
                    src="/Component_1.png"
                    alt="MARGOT"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = getProjectImage(projects[5]);
                    }}
                  />
                  <div className="project-overlay">
                    <span className="logo-text" style={{ fontSize: '32px', color: '#fff' }}>MARGOT</span>
                  </div>
                </div>

                {/* Row 3: Yuki + Odd Mami */}
                <div
                  className="project-card"
                  style={{
                    position: 'relative',
                    aspectRatio: '1.6'
                  }}
                  onClick={() => handleProjectClick(projects[6])}
                >
                  <img
                    src="/Frame_1.png"
                    alt="YUKI"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = getProjectImage(projects[6]);
                    }}
                  />
                  <div className="project-overlay">
                    <span style={{ color: '#fff', fontSize: '24px' }}>yuki</span>
                  </div>
                </div>

                <div
                  className="project-card"
                  style={{
                    position: 'relative',
                    aspectRatio: '1.6',
                    backgroundColor: '#1a1a1a'
                  }}
                  onClick={() => handleProjectClick(projects[7])}
                >
                  <img
                    src="/portada-odd-mami.png"
                    alt="Odd Mami"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="project-overlay">
                    <span style={{
                      color: '#fff',
                      fontSize: '24px',
                      fontStyle: 'italic',
                      fontFamily: 'serif'
                    }}>Odd Mami</span>
                  </div>
                </div>

                {/* Row 4: Expediciones + Upcoming */}
                <div
                  className="project-card"
                  style={{
                    background: '#F5F5DC',
                    position: 'relative',
                    aspectRatio: '1.6',
                  }}
                  onClick={() => handleProjectClick(projects[8])}
                >
                  <img
                    src="/bosque/d3a7edf1713e1c1344837e4a7a30247bf5c4ddca.jpg"
                    alt="Bosque"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = getProjectImage(projects[8]);
                    }}
                  />
                  <div className="project-overlay">
                    <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff' }}>BOSQUE</span>
                  </div>
                </div>

                <div
                  className="project-card"
                  style={{
                    background: '#000',
                    position: 'relative',
                    aspectRatio: '1.6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div style={{ textAlign: 'center', color: '#fff' }}>
                    <div style={{ fontSize: '14px', marginBottom: '10px', opacity: 0.6 }}>///</div>
                    <div style={{ fontSize: '18px', fontWeight: 500 }}>UPCOMING PROJECT</div>
                  </div>
                </div>
              </div>

              {/* Back to Top */}
              <div style={{
                textAlign: 'center',
                padding: '60px 0'
              }}>
                <span
                  className="back-to-top"
                  style={{ fontSize: '13px' }}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  BACK TO TOP
                </span>
              </div>
            </section>

            {/* Footer */}
            <RenderFooter />
          </>
        ) : currentView === 'personal' ? (
          /* Personal View */
          <section className="fade-in" style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px',
            position: 'relative',
            backgroundColor: '#000',
            color: '#fff'
          }}>
            <div style={{
              maxWidth: '1200px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <h1 style={{
                fontSize: 'clamp(28px, 4.5vw, 64px)',
                fontWeight: 400,
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.1,
                textAlign: 'left',
                letterSpacing: '-0.03em',
                marginBottom: '80px',
                maxWidth: '95%'
              }}>
                I believe in the power of multidisciplinary collaboration to craft bold, tailored visual solutions that truly reflect each concept, brand, and client. <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '0.4em', verticalAlign: 'middle', marginLeft: '5px' }}>TRI</span>
              </h1>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                width: '100%',
                fontSize: '18px',
                fontWeight: 400
              }}>
                <div style={{ flex: 1 }}></div>
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <span
                    onClick={() => setCurrentView('cv')}
                    style={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: '4px', cursor: 'pointer' }}
                  >
                    CV
                  </span>
                </div>
                <div style={{ flex: 1, textAlign: 'right' }}>
                  <a
                    href="https://www.linkedin.com/in/mariasolsotochasvin/"
                    target="_blank"
                    style={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: '4px' }}
                  >
                    Linkedin
                  </a>
                </div>
              </div>
            </div>

            <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
              <RenderFooter />
            </div>
          </section>
        ) : currentView === 'cv' ? (
          /* CV View */
          <section className="fade-in" style={{
            paddingTop: '80px',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '100px 20px 60px',
            backgroundColor: bgColor,
            transition: 'background-color 0.5s ease'
          }}>
            {/* PDF Page as Image */}
            <div style={{
              width: '100%',
              maxWidth: '900px',
              backgroundColor: '#fff',
              boxShadow: '0 4px 30px rgba(0,0,0,0.2)',
              marginBottom: '40px',
              overflow: 'hidden'
            }}>
              <img
                src={`/cv-pages/page-${currentCVPage}.png`}
                alt={`CV Page ${currentCVPage}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>

            {/* Navigation Controls */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '30px'
            }}>
              <button
                onClick={() => setCurrentCVPage(Math.max(1, currentCVPage - 1))}
                disabled={currentCVPage === 1}
                className="arrow-btn"
                style={{
                  padding: '12px 24px',
                  backgroundColor: currentCVPage === 1 ? 'transparent' : textColor,
                  color: currentCVPage === 1 ? textColor : bgColor,
                  border: `1px solid ${textColor}`,
                  cursor: currentCVPage === 1 ? 'not-allowed' : 'pointer',
                  fontSize: '13px',
                  fontWeight: 500,
                  opacity: currentCVPage === 1 ? 0.3 : 1,
                  transition: 'all 0.3s'
                }}
              >
                ← PREVIOUS PAGE
              </button>

              <span style={{
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.05em'
              }}>
                {currentCVPage} / {totalCVPages}
              </span>

              <button
                onClick={() => setCurrentCVPage(Math.min(totalCVPages, currentCVPage + 1))}
                disabled={currentCVPage === totalCVPages}
                className="arrow-btn"
                style={{
                  padding: '12px 24px',
                  backgroundColor: currentCVPage === totalCVPages ? 'transparent' : textColor,
                  color: currentCVPage === totalCVPages ? textColor : bgColor,
                  border: `1px solid ${textColor}`,
                  cursor: currentCVPage === totalCVPages ? 'not-allowed' : 'pointer',
                  fontSize: '13px',
                  fontWeight: 500,
                  opacity: currentCVPage === totalCVPages ? 0.3 : 1,
                  transition: 'all 0.3s'
                }}
              >
                NEXT PAGE →
              </button>
            </div>

            {/* Download Button */}
            <a
              href="/Maria-Sol-Soto-Chasvin_CV_EN.pdf"
              download="Maria_Sol_Soto_Chasvin_CV.pdf"
              style={{
                padding: '14px 40px',
                backgroundColor: textColor,
                color: bgColor,
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.1em',
                transition: 'opacity 0.3s',
                border: `1px solid ${textColor}`
              }}
              onMouseOver={(e) => e.target.style.opacity = '0.8'}
              onMouseOut={(e) => e.target.style.opacity = '1'}
            >
              ↓ DOWNLOAD FULL CV
            </a>
            <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
              <RenderFooter />
            </div>
          </section>
        ) : (
          /* Project Detail View */
          <section style={{ paddingTop: '80px' }}>
            {selectedProject && (
              <>
                {/* Project Images */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: selectedProject.id === 'wos' ? '1fr' : '1fr',
                  gap: '2px'
                }}>
                  {selectedProject.id === 'wos' ? (
                    <>
                      <img
                        src="/Group_6.png"
                        alt={selectedProject.title}
                        style={{ width: '100%', height: 'auto' }}
                      />
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '2px'
                      }}>
                        <img
                          src="/celular_1.png"
                          alt="WOS Phone"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <img
                          src="/VP1_1.png"
                          alt="WOS Billboard"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                      <img
                        src="/placa_1.png"
                        alt="WOS Posters"
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </>
                  ) : selectedProject.id === 'tina' ? (
                    <div style={{ width: '100%', height: 'auto', backgroundColor: '#000' }}>
                      <img src="/tina/0f1406e6b8ea529f581b812b08ee9f2a3ef066d7.gif" alt="Tina Hero" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                  ) : selectedProject.id === 'spotify' ? (
                    <div style={{ display: 'grid', gap: '2px', backgroundColor: '#000' }}>
                      {/* Row 1 */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
                        <img src="/spotify/gif-1.gif" alt="Content" style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
                        <img src="/spotify/gif-3.gif" alt="Content" style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
                      </div>

                      {/* Row 2 */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2px' }}>
                        <img src="/spotify/gif-2.gif" alt="Content" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <img src="/spotify/gif-5.gif" alt="Content" style={{ width: '100%', height: '100%', objectFit: 'contain', backgroundColor: '#000' }} />
                      </div>

                      {/* Row 3 */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '2px' }}>
                        <img src="/spotify/gif-6.gif" alt="Content" style={{ width: '100%', height: '100%', objectFit: 'contain', backgroundColor: '#000' }} />
                        <img src="/spotify/gif-4.gif" alt="Content" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <img src="/spotify/gif-1.gif" alt="Content" style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
                      </div>
                    </div>
                  ) : (selectedProject.id === 'kosice' || selectedProject.id === 'calm' || selectedProject.id === 'oddmami' || selectedProject.id === 'bosque') ? null :
                    selectedProject.id === 'margot' ? (
                      <div style={{ width: '100%', height: 'auto', backgroundColor: '#fff' }}>
                        <img src="/margot/79aba033434e8daab6c44b0b4b95e4c3029d4035.png" alt="Margot Header" style={{ width: '100%', height: 'auto', display: 'block' }} />
                      </div>
                    ) : selectedProject.id === 'yuki' ? (
                      <div style={{ width: '100%', height: 'auto', backgroundColor: '#e8e800' }}>
                        <img src="/yuki/f0a03ec6dd0e7dae151932c76af58cf42840e881.jpg" alt="Yuki Header" style={{ width: '100%', height: 'auto', display: 'block' }} />
                      </div>
                    ) : (
                      <div style={{
                        height: '60vh',
                        background: getProjectImage(selectedProject),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <span className="logo-text" style={{ fontSize: '64px' }}>
                          {selectedProject.title}
                        </span>
                      </div>
                    )}
                </div>
                {/* Project Info */}
                <div style={{
                  padding: '60px 40px',
                  display: 'grid',
                  gridTemplateColumns: '200px 1fr 1fr',
                  gap: '60px',
                  maxWidth: '1400px'
                }}>
                  <div>
                    <div style={{
                      color: selectedProject.id === 'wos' ? '#E63946' : textColor,
                      fontSize: '13px',
                      fontWeight: 500,
                      marginBottom: '10px'
                    }}>
                      {selectedProject.title}
                    </div>
                  </div>

                  <div>
                    <div style={{
                      fontSize: '28px',
                      fontWeight: 300,
                      lineHeight: 1.4,
                      marginBottom: '30px'
                    }}>
                      {selectedProject.category}
                    </div>

                    {selectedProject.about && (
                      <div style={{ marginTop: '40px' }}>
                        <div style={{
                          fontSize: '13px',
                          fontWeight: 500,
                          marginBottom: '15px'
                        }}>
                          about
                        </div>
                        <p style={{
                          fontSize: '14px',
                          lineHeight: 1.7,
                          opacity: 0.85
                        }}>
                          {selectedProject.about}
                        </p>
                      </div>
                    )}
                  </div>

                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '15px'
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: selectedProject.id === 'wos' ? '#00D4FF' : textColor,
                        marginTop: '6px'
                      }} />
                      <p style={{
                        fontSize: '14px',
                        lineHeight: 1.7,
                        opacity: 0.85
                      }}>
                        {selectedProject.description}
                      </p>
                    </div>

                    {selectedProject.systemNote && (
                      <div style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '15px',
                        marginTop: '30px'
                      }}>
                        <div style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: selectedProject.id === 'wos' ? '#00D4FF' : textColor,
                          marginTop: '6px'
                        }} />
                        <p style={{
                          fontSize: '14px',
                          lineHeight: 1.7,
                          opacity: 0.85
                        }}>
                          {selectedProject.systemNote}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {selectedProject.id === 'tina' && (
                  <div style={{ backgroundColor: '#000', color: '#fff' }}>
                    {/* Exhibition Image */}
                    <div style={{ position: 'relative' }}>
                      <img src="/tina/a2f21bae576847a35e86f89655c68e106172b053.jpg" style={{ width: '100%', height: 'auto', display: 'block' }} />
                      <div style={{ textAlign: 'right', fontSize: '10px', padding: '10px 40px', color: '#ccc', fontFamily: 'Arial, sans-serif' }}>Exhibited at Festival Buena Vibra</div>
                    </div>

                    {/* About Text */}
                    <div style={{ padding: '60px 40px', maxWidth: '1400px', display: 'grid', gridTemplateColumns: '200px 1fr' }}>
                      <div style={{ fontSize: '13px', fontWeight: 'bold' }}>about</div>
                      <div style={{ maxWidth: '600px', lineHeight: 1.5, fontSize: '14px', opacity: 0.9 }}>
                        A design project where I transformed the artist's works into their 2D visual universe. Through the photographic integration of their creations, the careful treatment of the images, and the faithful transmission of their artistic concept, I translated the essence of their work into graphic design, preserving their exploration of materiality, abstraction, and contrasts.
                      </div>
                    </div>

                    {/* Phase 2 Text */}
                    <div style={{ padding: '40px 40px 80px 40px', display: 'flex', justifyContent: 'flex-end' }}>
                      <p style={{ maxWidth: '400px', fontSize: '13px', lineHeight: 1.5, opacity: 0.9, textAlign: 'left' }}>
                        The second phase of digitizing the pieces focused on creating large fabric artworks, where the original creations were transformed into digital artistic pieces. This process further explored textures and materiality, pushing the boundaries of the artist's concept.
                      </p>
                    </div>

                    {/* 2x2 Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
                      <img src="/tina/58682259c058a77505461d8749f17242f39cd0f2.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <img src="/tina/a4ea9e169ae6a278a1916db486b2d2424bd1dc17.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <img src="/tina/e55c9e459322ae3aeee9e4e89952aae3da65f59a.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <img src="/tina/272e2055b7b2842215016fff13b9eae868cc7987.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    {/* Strip Image */}
                    <img src="/tina/1abd2eb40e7503e85440aa41e375b3d1e175c2e2.jpg" style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </div>
                )}

                {selectedProject.id === 'spotify' && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', paddingBottom: '0' }}>
                    <img src="/spotify/billboard-1.png" style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block' }} />
                    <img src="/spotify/billboard-2.png" style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block' }} />
                  </div>
                )}
                {selectedProject.id === 'kosice' && (
                  <div style={{ backgroundColor: '#f5f5f5', padding: '60px 20px', color: '#000' }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                        <h3 style={{ fontSize: '24px', fontWeight: 'bold' }}>Brand Identity Manual</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                          <button
                            onClick={() => setKosicePage(Math.max(1, kosicePage - 1))}
                            disabled={kosicePage === 1}
                            style={{ border: 'none', background: 'none', cursor: kosicePage === 1 ? 'default' : 'pointer', opacity: kosicePage === 1 ? 0.3 : 1, fontSize: '20px' }}
                          >
                            ←
                          </button>
                          <span style={{ fontSize: '14px', fontFamily: 'monospace' }}>{kosicePage} / {totalKosicePages}</span>
                          <button
                            onClick={() => setKosicePage(Math.min(totalKosicePages, kosicePage + 1))}
                            disabled={kosicePage === totalKosicePages}
                            style={{ border: 'none', background: 'none', cursor: kosicePage === totalKosicePages ? 'default' : 'pointer', opacity: kosicePage === totalKosicePages ? 0.3 : 1, fontSize: '20px' }}
                          >
                            →
                          </button>
                        </div>
                      </div>

                      <div style={{
                        width: '100%',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                        backgroundColor: '#fff',
                        position: 'relative',
                        minHeight: '400px'
                      }}>
                        <img
                          src={`/kosice/pages/page-${kosicePage}.png`}
                          alt={`Page ${kosicePage}`}
                          style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                      </div>

                      <div style={{ textAlign: 'center', marginTop: '40px' }}>
                        <a href="/kosice/manual.pdf" target="_blank" download style={{ textDecoration: 'underline', fontSize: '14px', color: '#666' }}>
                          Download Full PDF
                        </a>
                      </div>
                    </div>
                  </div>
                )}
                {selectedProject.id === 'calm' && (
                  <div style={{ backgroundColor: '#000', paddingBottom: '0' }}>
                    {/* Row 1: 3 Cols */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
                      <img src="/calm/6d8f047298bc6a6b629725c6c0daca4bc436d478.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <img src="/calm/751db91f24aea72ad8487b9a8d07d2bb5f286639.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <img src="/calm/b1c1cd19a49ddf83f0f35c2a6e8ca06d0a04a1a4.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    {/* Row 2: 4 Cols */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px', marginTop: '2px' }}>
                      <img src="/calm/0fc77bbeacf36cf23590e1b42c7dcb11cca637f3.gif" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <img src="/calm/59573f57b189e5b8ab24ab1815da56d308c99df6.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <img src="/calm/5d381e9d1d4acf3bcb4fc4a745ecf6d495a35b8b.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <img src="/calm/f642d6443e8814ba65d7d9d343884814ab87ae01.gif" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    {/* Row 3: 2 Cols */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', marginTop: '2px' }}>
                      <img src="/calm/6c046720a56cfa1c2f01bc4e8e0c59688fc19ad2.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <img src="/calm/81c11aa80ac0f28972146ccab8961ee3eae2ee22.gif" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  </div>
                )}

                {selectedProject.id === 'margot' && (
                  <div style={{ backgroundColor: '#000', color: '#fff' }}>
                    {/* Logo Strip */}
                    <div style={{ width: '100%', overflow: 'hidden', padding: '0' }}>
                      {/* Assuming text based on screenshot for scalability and clarity */}
                      <div style={{ fontSize: '15vw', lineHeight: 0.8, fontWeight: '300', textAlign: 'center', letterSpacing: '-0.05em', margin: '40px 0', fontFamily: 'sans-serif' }}>MARGOT</div>
                    </div>

                    {/* Grid 1: 2 Cols */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
                      <img src="/margot/a05e4930afa77d3702bd3d5497c78054652dff7d.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <img src="/margot/6e146dc5a297ff47fc74f3a09a3001c1e7d487c5.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    {/* Grid 2: 3 Cols */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0' }}>
                      <img src="/margot/17554dace82ed21c09d69875e7155ba31333391a.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <img src="/margot/a552e7ce4ef9e8d73649ceaf3b013cb77931d4fa.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <img src="/margot/8f8d5ba7c194343e17ae7b8dca13a71520a2e7bb.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    {/* Footer Image */}
                    <img src="/margot/5cf233d307c8d82b54f3c749118474ed2153aad3.png" style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </div>
                )}

                {selectedProject.id === 'yuki' && (
                  <div style={{ backgroundColor: '#e8e800' }}>
                    <img src="/yuki/e9cd2fe6e221aa371223af4270d03b8ab02a80a3.gif" style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </div>
                )}

                {selectedProject.id === 'oddmami' && (
                  <div style={{ backgroundColor: '#000', color: '#fff' }}>
                    {/* Header Collage */}
                    <img src="/oddmami/5cac4b2a4593039674312562131c36c88124e1f6.png" style={{ width: '100%', height: 'auto', display: 'block' }} />

                    {/* Grid 1: 4/1 strip */}
                    <div style={{ width: '100%', marginTop: '5px' }}>
                      {/* Assuming this is one wide image provided as the strip */}
                      <img src="/oddmami/f1433f30813bd2129de7242dc2f0c0e7fd900435.png" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>

                    {/* Grid 2: 2 Cols */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px', marginTop: '5px' }}>
                      <img src="/oddmami/c9a9eabb002d560a2d0cda87105d6494fb8a8f5f.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <img src="/oddmami/16b6579ab09ff002fb6913e3fc129f6b78bf0309.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  </div>
                )}

                {selectedProject.id === 'bosque' && (
                  <div style={{ backgroundColor: '#fff', color: '#000' }}>
                    {/* Header Map */}
                    <img src="/bosque/d3a7edf1713e1c1344837e4a7a30247bf5c4ddca.jpg" style={{ width: '100%', height: 'auto', display: 'block' }} />

                    {/* Grid 1: 2 Cols (3 Cans | Bottle) */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
                      <img src="/bosque/96776266c208c3d0175841f3151ce9bf0d9fabd9.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <img src="/bosque/7a792ce5aaa15034f6c04be8975911f98dee2e8d.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    {/* Grid 2: 2 Cols (Bottle/Rock | Collage) */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
                      <img src="/bosque/0975d761126cdd93152739a71f04eefbf76f6b50.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <img src="/bosque/2234487e9a23d98fd1a6838718e4aa87a8348943.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  </div>
                )}

                <RenderFooter />
              </>
            )}
          </section>
        )}
      </div>
    </div >
  );
}
