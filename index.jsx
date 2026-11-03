import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';

import bannerImage from './assets/images/other/Banner.jpg';
import elcoLogoImage from './assets/images/other/elco_logo.png';
import elcoMapImage from './assets/images/other/elco_map.jpg';
import adelgadoImage from './assets/images/presenters/adelgado.png';
import christianImage from './assets/images/presenters/christian.jpg';
import leImage from './assets/images/presenters/le.jpg';
import matosImage from './assets/images/presenters/matos.jpg';
import milanImage from './assets/images/presenters/milan.png';
import nicoImage from './assets/images/presenters/nico.jpg';
import niuImage from './assets/images/presenters/niu.jpg';
import palmerImage from './assets/images/presenters/palmer.png';
import rajeshImage from './assets/images/presenters/rajesh.jpg';
import rperkinsImage from './assets/images/presenters/rperkins.png';
import vsenoImage from './assets/images/presenters/vseno.png';
import yeressianImage from './assets/images/presenters/yeressian.jpg';

// --- PLACEHOLDER DATA ---
// I've added a 'description' field for items that should be clickable.

const agendaItems = [
  { time: '8:30 AM - 9:30 AM', location: 'Gymnasium Lobby', title: 'Check-In and Badge Distribution' },
  { time: '9:30 AM - 9:40 AM', location: 'Gymnasium', title: 'Welcome Remarks', speaker: 'Katie Sundara, Acting Dean of Business, Design & Applied Technology @ El Camino College\nRichard Perkins, Computer Information Systems Professor @ El Camino College' },
  { time: '9:40 AM - 10:00 AM', location: 'Gymnasium', title: 'Keynote 1', speaker: 'Vicky Seno, Computer Information Systems Professor @ El Camino College' },
  { time: '10:00 AM - 10:20 AM', location: 'Gymnasium', title: 'Keynote 2', speaker: 'Milan McGraw, Head of AI/ML Generative AI Services @ Amazon Web Services' },
  { time: '10:20 AM - 10:50 AM', location: 'Gymnasium', title: 'Industry Q&A Panel' },
  { time: '10:50 AM - 11:50 AM', location: 'Gymnasium Lobby', title: 'Networking Lunch and Booth Fair', description: 'Grab a lunch box & check out the many booths from companies and campus clubs' },
  { time: '12:00 PM - 12:50 PM', location: 'MBA Building', title: 'Workshop A', description: 'So many workshops to choose from!' },
  { time: '1:00 PM - 1:50 PM', location: 'MBA Building', title: 'Workshop B', description: 'You can only go to two! Choose wisely!' },
  { time: '2:00 PM - 2:30 PM', location: 'MBA Building', title: 'Closing Remarks & Prizes' }
];

const workshopItems = [
  { type: 'A, B', title: 'Real Estate and Technology', location: 'Room #102', instructor: 'John Yeressian, Professor' },
  { type: 'A, B', title: 'Are you IT at ECC?', location: 'Room #104', instructor: 'Patrick Palmer, Professor' },
  { type: 'A', title: 'RAG bot: Protecting Your Data in the Age of AI', location: 'Room #106', instructor: 'Rajesh Boppana, Solutions Architect' },
  { type: 'B', title: 'Agentic AI: The Robin to Your Batman', location: 'Room #106', instructor: 'Rajesh Boppana, Solutions Architect' },
  { type: 'A, B', title: 'Application Writing and Interview Preparation Workshop', location: 'Room #107', instructor: 'Nico Pietrantonio, Human Resources Technician' },
  { type: 'A, B', title: 'Tech Your Résumé to the Next Level', location: 'Room #110', instructor: 'Adrian Delgado, Job Specialist' },
  { type: 'A, B', title: 'Data Science 101', location: 'Room #202', instructor: 'Kun “Emma” Niu, Professor' },
  { type: 'A, B', title: 'Intro to Computer Science', location: 'Room #204', instructor: 'Victor Matos, Professor' },
  { type: 'A, B', title: 'Building Apps and Media with Generative AI', location: 'Room #206', instructor: 'Hac Le, Professor' },
  { type: 'A, B', title: 'Everyday Cybersecurity: What Everyone Should Know', location: 'Room #208', instructor: 'Richard Perkins, Professor' },
  { type: 'A, B', title: 'Aerial Drone Safety and Basics', location: 'MBA Lawn, Outside', instructor: 'Christian Olivas' },

];

const allSpeakers = [
  { name: 'Rajesh Boppana', title: 'Principal Solutions Architect at Microchip', img: rajeshImage, description: `I am passionate about leveraging cutting-edge technologies to drive innovation and empower others through knowledge sharing. With over 20 years of experience in the IT industry, I specialize in Generative AI, Machine Learning, and Solution Architecture, focusing on designing and implementing enterprise-scale AI solutions. 

Currently, I serve as a Solutions Architect at Microchip, where I lead initiatives to integrate AI into semiconductor design, particularly at the chip level. My previous roles include driving innovation at JPMorgan and State Farm, with a strong emphasis on GenAI and Agentic AI solutions. I hold an Executive Education credential from MIT, and I’m an honored graduate in Master of Computer Science.` },
  
  { name: 'Adrian Delgado', title: 'Job Developer at El Camino College', img: adelgadoImage, description: 'Adrian Delgado is a Job Developer here at El Camino College. Receiving his BA from CSU Northridge and his MA from Antioch University, Adrian has a passion for helping students find their careers. Adrian has dedicated his efforts into reviewing student resumes, discovering career options, finding employment, and developing students to be ready for the workplace.' },
  { name: 'Hac Le', title: 'Computer Information Systems Professor at El Camino College', img: leImage, description: `Hac Le has a background in art, design, and technology. He has over 10+ years of experience as an IT Professional and over 20+ years of experience as a creative designer. He had been an adjunct instructor for El Camino College for 3 years and is currently in his 2nd year as a fulltime CIS instructor. Previously, he was the Senior IT Manager for the Natural History Museum of Los Angeles County (Natural History Museum, La Brea Tar Pits Museum, Willam Hart Museum) where he oversaw the Information Technology Department which is responsible for the Museum’s security programs and systems, operating and applications software systems, telecommunications systems, computer infrastructure, local and wide-area networks, and desktop support for staff. Before transitioning to a career in IT, Hac founded and ran his own design firm for 14+ years where they served a broad range of clientele from the Chicago Tribune to rock legend Joey Ramone, designing and building brand identities, interactive presentations, marketing materials, publications, animations to large-scale web applications.

Hac graduated from LMU with a Bachelor of Art's Degree in Studio Arts and also earned his Master of Science Degree in Information Technology at Cal State University, Fullerton. He is a life-long earner and also received an Advanced Web & Interaction Design certificate from UCLA and he holds the following certifications: ITIL 4 Strategic Leader, ITIL 4 Leader: Digital & IT Strategy, ITIL 4 Strategist Direct, Plan and Improve, ITIL 4 Foundations, CompTIA Security+, and AWS Cloud Practitioner. He hopes to bring his experience and knowledge into the classroom to inspire the next generation of IT professionals.` },
  
  { name: 'Victor Matos', title: 'Computer Science Professor at El Camino College', img: matosImage, description: `Dr. Victor Matos is a computer scientist specializing in database systems, programming languages, mobile application development, and excellence in computer science education.

He earned a Ph.D. in Computer Science from Case Western Reserve University, an M.S. in Computer Science, and a B.Sc. in Computing Engineering from Universidad Simón Bolívar. He currently serves as Professor of Computer Sciences in the Division of Mathematical Sciences at El Camino College. Previously, he spent over three decades at Cleveland State University as Professor of Business Information Systems and Engineering, where he now holds Emeritus status.

His career also includes service as a Fulbright Scholar at the Universidad de Costa Rica, CIO at Utopia Technologies LLC, independent consultant, senior systems analyst for the Venezuelan Army, and academic roles at multiple institutions. For a list of publications, search “Victor Matos” on Google Scholar.` },

  { name: 'Kun Niu', title: 'Mathematics Professor at El Camino College', img: niuImage, description: `Kun Niu is a Math and Data Science instructor at El Camino College who is passionate about making data science fun, accessible. and beginner-friendly. She teaches Statistics and Python based Data Science and is dedicated to helping students discover real pathways into tech and AI careers.

She is actively involved in the NSF-funded SEEDS Data Science initiative at El Camino College, which expands data science education and career opportunities for students. Through this project, she helps organize the annual Spring Data Science Conference and hosts industry networking events that connect students with professionals in data, AI, and technology.` },

  { name: 'Christian Olivas', title: 'Student Ambassador', img: christianImage, description: 'An alumnus from San Jose State University, Christian has returned to his roots in Torrance with El Camino College to further pursue education. Working along with the Business Division, Christian has led many workshops for ScaleUP, including drone and AWS Deepracer presentation. He spends his free time rock climbing and traveling.' },
  { name: 'Patrick Palmer', title: 'Computer Information Systems Professor at El Camino College', img: palmerImage, description: `Patrick Palmer is an adjunct instructor in the CIS program at El Camino College, leveraging over 20 years of industry experience gained at the database company Teradata Inc. After his extensive industry career, he returned to ECC to earn his AS in Computer Information Systems and acquire key certifications, including AWS Cloud Practitioner and CompTIA A+. 

Patrick currently balances his teaching role with part-time IT work for a real estate company in Gardena, ensuring his knowledge stays current. In his personal time, he blends music and history, performing with his antique English Concertinas at Renaissance Fairs and singing with the El Camino College Chorale.` },

  { name: 'Richard Perkins', title: 'Computer Information Systems Professor at El Camino College', img: rperkinsImage, description: `Richard Perkins is an experienced Computer Information Systems (CIS) instructor at El Camino College with a wealth of knowledge and a passion for teaching. He started as a student-athlete at El Camino College in 2004, playing football and competing in track and field. 9 years later, he started teaching at CIS at El Camino College in 2013.

As he marks his tenth year at the community college, Richard Perkins continues to inspire, educate, and nurture the next generation of tech-savvy individuals. His passion for teaching, expertise in Cybersecurity, and unwavering dedication to his students make him a valued asset to the institution and a role model for all.` },

  { name: 'Nico Pietrantonio', title: 'Human Resources Technician at City of Torrance', img: nicoImage, description: `Guided by a commitment to community service and a passion for cultivating future public sector leaders, Nico Pietrantonio brings a blend of innovation, empathy, and dedication to his role as a Human Resources professional with the City of Torrance. Over the past three years, Nico has served in the Human Resources department and Civil Service division, supporting the City’s efforts to attract, develop, and retain talented individuals committed to public service.

As part of the City’s Learning and Development Team, Nico plays an active role in conducting New Employee Orientations, leading workshops and trainings with Torrance’s Career Technical Education partners at local high schools and colleges, and advances initiatives that build a community-focused, school-to-career pipeline in public service. His work aims to inspire young people to explore meaningful careers in government and equip them with the tools to thrive as public servants.

Nico holds a Bachelor of Management Information Systems from California State University, Long Beach, and a Master of Public Administration from Southern Utah University. He continues to use his education and experience to strengthen employee engagement, promote learning, and foster the next generation of civic leaders.` },

  { name: 'Dr. John Yeressian', title: 'Business Professor at El Camino College', img: yeressianImage, description: `John Yeressian has been immersed in the real estate industry for over 25 years and has held a California broker’s license since 2008. A tenured professor and published author, he has written extensively on real estate topics and contributed to the academic and professional development of the field.

Throughout his career, John has witnessed the evolution of real estate from a traditionally low-tech industry to one increasingly driven by innovation. He has embraced advancements such as drones, 3D cameras, virtual tours, and most recently, artificial intelligence. His commitment to modernization is evident in his development of exam prep apps and his continuous efforts to integrate technology into real estate education and practice. 

John holds degrees in finance, business administration (MBA), and law. Despite his diverse academic background, his true passion remains rooted in the real estate industry.` },

];

const keySpeakers = [
  { name: 'Milan McGraw', title: 'Head of AI/ML Generative AI Services at AWS', img: milanImage, description: `Milan McGraw is a senior executive at the forefront of Artificial Intelligence (AI), Machine Learning (ML), and Generative AI, currently leading AI/ML Generative AI Services for Financial Services and mid-tier Enterprises at Amazon Web Services (AWS). In this role, Milan helps the world’s leading financial institutions harness the transformative power of AI to drive innovation, operational efficiency, and competitive advantage at scale.

With a deep foundation in both technical and business domains, Milan brings over a decade of cross-industry leadership spanning deep learning, data science, and applied AI strategy. Prior to AWS, he held pivotal roles as a Deep Learning Engineer and Head of Data Science, delivering high-impact AI solutions across retail, CPG, and financial sectors. His areas of expertise include generative AI, LLMOps/MLOps, and responsible AI governance—critical capabilities for organizations navigating the complexities of modern AI adoption.

Milan holds a Master’s in Analytics and Data Science from the University of Chicago, a Master’s in AI Engineering from Northwestern University, and an MBA from Morris Graduate School of Management.

A former U.S. Marine Platoon Commander, Milan’s leadership is grounded in discipline, mission-focus, and a relentless commitment to innovation. He is widely recognized for his ability to bridge the gap between executive strategy and technical execution—empowering enterprises to unlock real business value from AI.` },
  { name: 'Vicky Seno', title: 'CS Professor at Santa Monica College', img: vsenoImage, description: `Vicky Seno is a respected Computer Science Professor at Santa Monica College in Los Angeles, specializing in Amazon Web Services (AWS), Data Science, and Machine Learning. Since joining SMC in 2018, Vicky has led courses on Cloud Computing Services, Containers, Kubernetes, Serverless, Networking, Security, Data Science, and Machine Learning. She also collaborates with a network of 19 local colleges, training faculty to expand AWS education across the Los Angeles area. Additionally, she co-organizes the AWS Student Conferences at SMC, featuring AWS Solution Architects, workshops, and Capture-the-Flag.

As an AWS Hero and recipient of the Aligned Technology Group Outstanding Contribution to the AWS Ecosystem Award (2021) from the Digital Revolution Awards, Vicky’s contributions to AWS education and advocacy are widely recognized. Her dedication to expanding AWS knowledge extends to actively promoting diversity in tech through speaking engagements and training sessions aimed at increasing female representation. Her YouTube channel, with over 38,000 subscribers, offers 100+ beginner tech tutorials, and she has presented at Amazon Summits on Containers, Kubernetes, and Amazon EKS. Vicky has also developed training content for LinkedIn.

With over 20 years in IT prior to teaching, Vicky brings deep expertise in Linux Servers, High Performance Computing Clusters, Virtualization, and AWS, enriching her students’ learning experience with industry insights.` },
]
const keynoteSpeakers = keySpeakers;
const workshopLeads = allSpeakers;


// --- STYLED COMPONENTS & ICONS ---

const GlobalStyles = () => (
  <style>{`
    :root { /* Dark theme variables */
      --bg-color: #0a0a1a;
      --primary-color: #00bfff;
      --secondary-color: #ff00ff;
      --text-color: #e0e0e0;
      --card-bg: #1a1a2e;
      --border-color: #3a3a5e;
      --logo-color: #fff;
      --header-text-color: #e0e0e0;
      --header-shadow: 0 0 10px var(--primary-color), 0 0 20px var(--secondary-color), 0 0 30px #fff;
      --title-shadow: 0 0 5px var(--primary-color), 0 0 10px var(--secondary-color);
      --modal-overlay-bg: rgba(10, 10, 26, 0.9);
      --banner-overlay-bg: rgba(10, 10, 26, 0.7);
      --card-hover-shadow-primary: 0 10px 20px rgba(0, 191, 255, 0.2);
      --card-hover-shadow-secondary: 0 10px 20px rgba(255, 0, 255, 0.2);
      --modal-shadow: 0 0 30px rgba(0, 191, 255, 0.3);
      --theme-gradient: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
      --keynote-bg: linear-gradient(135deg, rgba(0, 191, 255, 0.1), rgba(255, 0, 255, 0.1));
      --note-color: var(--secondary-color);
      --footer-text-color: rgba(224, 224, 224, 0.7);
    }
    body[data-theme='light'] {
      --bg-color: #ffffff;
      --primary-color: #0077FF;
      --secondary-color: #FF1493; /* Pink to pop against white/gray */
      --text-color: #1a1a1a;
      --card-bg: #dee2e6;
      --border-color: #e9ecef;
      --logo-color: var(--text-color);
      --header-text-color: #333;
      --header-shadow: 0 0 12px rgba(75, 0, 130, 0.7);
      --title-shadow: 0 0 4px var(--primary-color);
      --modal-overlay-bg: rgba(255, 255, 255, 0.85);
      --banner-overlay-bg: rgba(255, 255, 255, 0.75);
      --card-hover-shadow-primary: 0 10px 20px rgba(0, 119, 255, 0.15);
      --card-hover-shadow-secondary: 0 10px 20px rgba(255, 20, 147, 0.15);
      --modal-shadow: 0 0 30px rgba(0, 119, 255, 0.2);
      --theme-gradient: linear-gradient(90deg, #007BFF, #FF1493);
      --keynote-bg: linear-gradient(135deg, rgba(0, 119, 255, 0.07), rgba(255, 20, 147, 0.07));
      --note-color: #b30000;
      --footer-text-color: rgba(26, 26, 26, 0.7);
    }
    html {
      scroll-behavior: smooth;
      overflow-x: hidden;
    }
    body {
      margin: 0;
      font-family: 'Poppins', sans-serif;
      background-color: var(--bg-color);
      color: var(--text-color);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      transition: background-color 0.3s ease, color 0.3s ease;
    }
    * {
      box-sizing: border-box;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    h1, h2, h3 {
      font-family: 'Share Tech Mono', monospace;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--primary-color);
      text-shadow: var(--title-shadow);
    }
    .agenda-item-clickable:hover {
        transform: translateY(-5px);
        box-shadow: var(--card-hover-shadow-primary);
    }
    .speaker-card:hover {
        transform: scale(1.03);
        box-shadow: var(--card-hover-shadow-secondary);
    }
    
    #keynote-speakers {
      background: var(--keynote-bg);
    }

    .agenda-item-animate, .speaker-card-animate, .workshop-item-animate {
      opacity: 0;
      transform: translateY(20px);
    }
    .agenda-item-animate.is-visible, .speaker-card-animate.is-visible, .workshop-item-animate.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
    .content-section:not(:last-of-type)::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 50%;
      transform: translateX(-50%);
      width: 90%;
      max-width: 800px;
      height: 2px;
      background-image: linear-gradient(to right, 
        transparent, 
        var(--primary-color), 
        var(--secondary-color),
        transparent
      );
      opacity: 0.5;
      filter: blur(1px);
    }
    .agenda-location-link {
      cursor: pointer;
      text-decoration: underline;
      text-decoration-style: dotted;
      transition: color 0.2s ease;
    }
    .agenda-location-link:hover {
      color: var(--primary-color) !important;
      text-decoration-style: solid;
    }
    .workshop-leads-grid {
      display: grid;
      grid-template-columns: repeat(2, max-content);
      gap: 2rem;
      max-width: 750px;
      margin: 0 auto;
      justify-content: center;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px) scale(0.98); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
    
    @media (max-width: 768px) {
      .container {
        padding: 0 1.5rem;
      }

      header {
        padding: 2rem 1rem !important;
      }
      
      header .container > div {
        padding: 1rem !important;
      }
      
      h1[style*="font-family: 'Share Tech Mono'"] { font-size: 2rem !important; }
      
      section {
        padding: 3rem 0 !important;
      }
      
      h2[style*="text-align: center"] {
        font-size: 2rem !important;
      }
      
      .agenda-headline {
        white-space: normal !important;
      }
      
      /* Agenda Section */
      .agenda-title-container {
        flex-direction: column !important;
        gap: 2rem !important;
        margin-bottom: 3rem !important;
        min-height: auto !important;
      }
      
      .agenda-register-button {
        transform: rotate(0) !important;
      }
      
      .agenda-register-button:hover {
        transform: scale(1.05) !important;
      }
      
      #agenda ul > li {
        flex-direction: column !important;
        gap: 0.5rem !important;
      }
      
      #agenda li > div[style*="flex: 0 0 150px"] {
        flex-basis: auto !important;
      }
      
      /* Speaker Sections */
      .speaker-card {
        width: 100% !important;
        max-width: 350px;
      }
      
      #keynote-speakers .speaker-card {
        padding: 2rem 1.5rem !important;
      }
      
      img[style*="width: 200px"] { /* Keynote speaker image */
        width: 150px !important;
        height: 150px !important;
      }

      .workshop-leads-grid {
        grid-template-columns: 1fr;
      }
      
      /* Floating Buttons */
      .back-to-top-button, .theme-toggle-button, .weather-widget-button {
        width: 48px !important;
        height: 48px !important;
        left: 1rem !important;
      }
      
      .back-to-top-button {
        right: 1rem !important;
        left: auto !important;
        bottom: 5rem !important;
      }
      
      .theme-toggle-button {
        bottom: 1rem !important;
        right: 1rem !important;
        left: auto !important;
      }

      .visibility-toggle-button {
        bottom: 1rem !important;
        left: 1rem !important;
        width: 48px !important;
        height: 48px !important;
      }

      .weather-widget-button {
        top: 1rem !important;
        left: 1rem !important;
        bottom: auto !important;
      }

      /* Timer Button */
      .timer-button {
        top: 1rem !important;
        right: 1rem !important;
        width: 40px !important;
        height: 40px !important;
      }
      
      /* Modal */
      .modal-content {
        width: 95% !important;
        max-height: 85vh;
        overflow-y: auto;
      }

      /* Footer */
      .footer-content-wrapper {
        flex-direction: column !important;
        align-items: center !important;
        gap: 1.5rem !important;
      }
      .footer-content-wrapper > div { /* Targets the footer text container */
        text-align: center !important;
      }

      /* Chat Window Mobile */
      .chat-window {
        width: auto !important;
        left: 1rem !important;
        right: 1rem !important;
        bottom: 9rem !important;
        height: 45vh !important;
        max-width: none !important;
      }
      
      .chat-input {
        font-size: 16px !important; /* Prevent auto-zoom on iOS inputs */
      }
      
      .chat-toggle-button {
        bottom: 5rem !important;
        left: 1rem !important;
        width: 48px !important;
        height: 48px !important;
      }
    }
  `}</style>
);

const styles = {
  header: {
    position: 'relative',
    textAlign: 'center',
    padding: '1.5rem 2rem',
    background: `url(${bannerImage}) no-repeat center center`,
    backgroundSize: 'cover',
    transition: 'background 0.3s ease',
    borderBottom: '1px solid var(--border-color)',
  },
  headerTextWrapper: {
    display: 'inline-block',
    padding: '1rem 2rem',
    backgroundColor: 'var(--banner-overlay-bg)',
    borderRadius: '12px',
    border: '1px solid var(--border-color)',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  },
  logo: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: 'clamp(2rem, 8vw, 4rem)',
    margin: '0',
    color: 'var(--logo-color)',
    textShadow: 'var(--header-shadow)',
    textTransform: 'none',
  },
  subtitle: {
    fontSize: 'clamp(0.8rem, 3vw, 1.2rem)',
    margin: '0.25rem 0 0 0',
    color: 'var(--header-text-color)',
    fontWeight: 400,
    letterSpacing: '1px'
  },
  theme: {
    fontSize: 'clamp(1.1rem, 4vw, 1.6rem)',
    margin: '0.5rem 0',
    fontWeight: 700,
    fontFamily: "'Share Tech Mono', monospace",
    background: 'var(--theme-gradient)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  headerNote: {
    textAlign: 'center',
    color: 'var(--note-color)',
    fontStyle: 'italic',
    marginTop: '1.5rem',
    fontSize: 'clamp(0.8rem, 2.5vw, 1rem)',
  },
  section: {
    padding: '4rem 0',
    position: 'relative',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  sectionTitleSeparator: {
    height: '4px',
    width: '100px',
    background: 'var(--theme-gradient)',
    margin: '0 auto 3rem auto',
    borderRadius: '2px',
  },
  agendaList: {
    listStyle: 'none',
    padding: 0,
    maxWidth: '800px',
    margin: '0 auto',
  },
  agendaItem: {
    display: 'flex',
    gap: '1.5rem',
    padding: '1.5rem',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    marginBottom: '1rem',
    background: 'var(--card-bg)',
    transition: 'transform 0.3s, box-shadow 0.3s, opacity 0.6s',
  },
  agendaTimeWrapper: {
    flex: '0 0 150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  agendaTime: {
    color: 'var(--primary-color)',
    fontWeight: '700',
    fontFamily: "'Share Tech Mono', monospace",
    marginBottom: '0.25rem',
  },
  agendaLocation: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '0.85rem',
    color: 'var(--secondary-color)',
    fontWeight: '500',
  },
  agendaTitle: {
    margin: 0,
    fontSize: '1.2rem',
    color: 'var(--text-color)',
  },
  agendaSpeaker: {
    margin: '0.25rem 0 0',
    color: 'var(--text-color)',
    fontSize: '0.9rem',
    opacity: '0.8',
    whiteSpace: 'pre-line',
  },
  workshopTable: {
    width: '100%',
    maxWidth: '900px',
    margin: '0 auto',
    borderCollapse: 'collapse',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  },
  workshopThead: {
    background: 'var(--card-bg)',
  },
  workshopTh: {
    padding: '1.25rem 1rem',
    textAlign: 'left',
    color: 'var(--primary-color)',
    fontFamily: "'Share Tech Mono', monospace",
    borderBottom: '2px solid var(--border-color)',
    fontSize: '1.1rem',
  },
  workshopTr: {
    transition: 'background-color 0.3s, opacity 0.6s, transform 0.6s',
    background: 'var(--card-bg)',
  },
  workshopTd: {
    padding: '1.25rem 1rem',
    borderTop: '1px solid var(--border-color)',
  },
  keynoteSpeakersGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '3rem',
    flexWrap: 'wrap',
  },
  keynoteSpeakerCard: {
    position: 'relative',
    background: 'var(--card-bg)',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    textAlign: 'center',
    padding: '3rem 2rem',
    transition: 'transform 0.4s ease-out, box-shadow 0.4s ease-out, opacity 0.6s ease-out',
    cursor: 'pointer',
    width: '400px',
  },
  keynoteSpeakerImg: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '1.5rem',
    border: '3px solid var(--primary-color)',
    background: 'var(--border-color)',
  },
  speakerCard: {
    background: 'var(--card-bg)',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    textAlign: 'center',
    padding: '2rem 1.5rem',
    transition: 'transform 0.4s ease-out, box-shadow 0.4s ease-out, opacity 0.6s ease-out',
    cursor: 'pointer',
    width: '280px',
  },
  speakerImg: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '1.5rem',
    border: '3px solid var(--primary-color)',
    background: 'var(--border-color)', // Add a background for placeholder
  },
  speakerName: {
    margin: '0 0 0.5rem 0',
    fontSize: '1.4rem',
    color: 'var(--text-color)',
  },
  speakerTitle: {
    margin: 0,
    color: 'var(--primary-color)',
    fontSize: '0.9rem',
    fontWeight: '400',
  },
  pdfLink: {
    display: 'inline-block',
    padding: '0.75rem 1.5rem',
    background: 'var(--primary-color)',
    color: 'var(--bg-color)',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: '700',
    fontFamily: "'Share Tech Mono', monospace",
    letterSpacing: '1px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  },
  footer: {
    padding: '3rem 2rem',
    marginTop: '2rem',
    color: 'var(--footer-text-color)',
    fontSize: '0.9rem',
    borderTop: '1px solid var(--border-color)',
  },
  footerContent: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  footerLogo: {
    width: '150px',
    height: 'auto',
    filter: 'brightness(1.5)',
    opacity: 1,
  },
  footerText: {
    flex: 1,
    textAlign: 'left',
  },
  agendaLink: {
    display: 'inline-block',
    marginTop: '1rem',
    textDecoration: 'underline',
    color: 'inherit',
    opacity: 0.8,
    transition: 'opacity 0.2s',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'var(--modal-overlay-bg)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    position: 'relative',
    background: 'var(--card-bg)',
    padding: '2rem',
    borderRadius: '8px',
    border: '1px solid var(--border-color)',
    maxWidth: '600px',
    width: '90%',
    boxShadow: 'var(--modal-shadow)',
    animation: 'fadeIn 0.3s ease-out',
    maxHeight: '90vh',
    overflowY: 'auto',
  },
  modalCloseButton: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'none',
    border: 'none',
    color: 'var(--text-color)',
    fontSize: '2rem',
    cursor: 'pointer',
    lineHeight: 1,
  },
  backToTopButton: {
    position: 'fixed',
    bottom: '6rem',
    right: '2rem',
    background: 'var(--primary-color)',
    color: 'var(--bg-color)',
    border: '2px solid var(--primary-color)',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    fontSize: '24px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1001,
    boxShadow: '0 0 15px var(--primary-color)',
    transition: 'opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
    opacity: 0,
    visibility: 'hidden',
    transform: 'translateY(20px)',
  },
  themeToggleButton: {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    background: 'var(--card-bg)',
    color: 'var(--primary-color)',
    border: '2px solid var(--border-color)',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1001,
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
  },
  visibilityToggleButton: {
    position: 'fixed',
    bottom: '2rem',
    left: '2rem',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#6a0dad', // Distinct deep purple
    color: '#ffffff',
    border: '3px solid #ffffff', // White border for high visibility
    cursor: 'pointer',
    zIndex: 1010,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 15px rgba(106, 13, 173, 0.6)',
    transition: 'all 0.3s ease',
  },
  timerButton: {
    position: 'fixed',
    top: '2rem',
    right: '2rem',
    background: 'var(--card-bg)',
    color: 'var(--primary-color)',
    border: '2px solid var(--primary-color)',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1005,
    boxShadow: '0 0 15px rgba(0, 191, 255, 0.3)',
    transition: 'all 0.3s ease',
  },
  timerModalContent: {
    background: 'var(--card-bg)',
    padding: '2rem',
    borderRadius: '12px',
    border: '1px solid var(--primary-color)',
    textAlign: 'center',
    boxShadow: '0 0 30px var(--primary-color)',
    maxWidth: '90%',
    width: '340px',
    position: 'relative',
    animation: 'fadeIn 0.3s ease-out',
  },
  timerDisplay: {
      fontFamily: "'Share Tech Mono', monospace",
      fontSize: '1.8rem',
      color: 'var(--primary-color)',
      margin: '1rem 0',
      textShadow: '0 0 10px var(--primary-color)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
  },
  weatherButton: {
    position: 'fixed',
    top: '2rem',
    left: '2rem',
    background: 'var(--card-bg)',
    color: 'var(--primary-color)',
    border: '2px solid var(--border-color)',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1005,
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
  },
  weatherModalContent: {
    background: 'var(--card-bg)',
    padding: '2rem',
    borderRadius: '12px',
    border: '1px solid var(--primary-color)',
    textAlign: 'center',
    boxShadow: '0 0 30px var(--primary-color)',
    maxWidth: '90%',
    width: '450px',
    position: 'relative',
    animation: 'fadeIn 0.3s ease-out',
  },
  weatherRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 0',
    borderBottom: '1px solid var(--border-color)',
    fontSize: '0.9rem',
  }
};


// --- REACT COMPONENTS ---

const TimerWidget = ({ visible, isOpen, onToggle }) => {
  const TimerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );

  if (!visible) return null;

  return (
    <>
      <button 
        style={styles.timerButton} 
        onClick={() => onToggle(!isOpen)}
        aria-label="Open Event Message"
        className="timer-button"
        onMouseOver={e => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = `0 0 25px var(--primary-color)`;
        }}
        onMouseOut={e => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 191, 255, 0.3)';
        }}
      >
        <TimerIcon />
      </button>

      {isOpen && (
        <div style={styles.modalOverlay} onClick={() => onToggle(false)}>
          <div style={styles.timerModalContent} onClick={e => e.stopPropagation()}>
            <button style={styles.modalCloseButton} onClick={() => onToggle(false)}>&times;</button>
            
            <h3 style={{...styles.sectionTitle, fontSize: '1.5rem', marginBottom: '0.5rem'}}>
                This Event Has Concluded
            </h3>
            <div style={{width: '60px', height: '3px', background: 'var(--theme-gradient)', margin: '0 auto 1.5rem auto', borderRadius: '2px'}}></div>
            
            <p style={{ margin: '0 0 1.5rem 0', fontSize: '1rem', color: 'var(--text-color)', lineHeight: '1.6' }}>
                Thank you for attending ScaleUpv5! We hope you had fun! See you all next year! 
            </p>

            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
              <p style={{ margin: '0 0 1rem 0', fontSize: '0.95rem', color: 'var(--text-color)', fontWeight: 'bold' }}>Please fill out the exit survey if you haven't already!</p>
              <a 
                href="https://forms.gle/3SCpLUiqCzWDWmQYA" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '0.75rem 1.5rem',
                  background: 'var(--secondary-color)',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: '1rem',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}
                onMouseOver={e => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 0 15px var(--secondary-color)';
                }}
                onMouseOut={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                }}
              >
                Exit Survey
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

const Confetti = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles = [];
    const colors = ['#00bfff', '#ff00ff', '#ffffff', '#FFD700'];
    
    const createParticle = () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight - window.innerHeight,
      vx: Math.random() * 2 - 1,
      vy: Math.random() * 5 + 3,
      size: Math.random() * 8 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      dRotation: (Math.random() - 0.5) * 10,
    });

    for (let i = 0; i < 150; i++) {
      particles.push(createParticle());
    }

    let animationFrameId;

    const render = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.y += p.vy;
        p.x += p.vx;
        p.rotation += p.dRotation;

        if (p.y > canvas.height) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

const DateWidget = ({ visible, isOpen, onToggle }) => {
  const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );

  if (!visible) return null;

  return (
    <>
    <button 
        style={styles.weatherButton} 
        onClick={() => onToggle(!isOpen)}
        aria-label="Event Date"
        className="weather-widget-button"
        onMouseOver={e => {
            e.currentTarget.style.boxShadow = `0 0 25px var(--secondary-color)`;
        }}
        onMouseOut={e => {
            e.currentTarget.style.boxShadow = `0 0 15px rgba(0, 0, 0, 0.2)`;
        }}
      >
        <CalendarIcon />
    </button>
    
    {isOpen && (
        <div style={styles.modalOverlay} onClick={() => onToggle(false)}>
            <Confetti />
            <div style={styles.weatherModalContent} onClick={e => e.stopPropagation()}>
                <button style={styles.modalCloseButton} onClick={() => onToggle(false)}>&times;</button>
                <h3 style={{...styles.sectionTitle, fontSize: '1.5rem', marginBottom: '1rem'}}>Event Date</h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.5', color: 'var(--text-color)' }}>
                    This event happened on Friday, November 21, 2025
                </p>
            </div>
        </div>
    )}
    </>
  );
};

const Header = () => (
    <header style={styles.header}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={styles.headerTextWrapper}>
                <h1 style={styles.logo}>
                    ScaleUp
                    <span style={{
                        fontSize: '0.5em',
                        opacity: 1,
                        fontWeight: 700,
                        marginLeft: '0.2rem'
                    }}>
                        v5
                    </span>
                </h1>
                <p style={styles.subtitle}>Hosted by El Camino College</p>
                <p style={styles.theme}>AI³: Imagine, Innovate, Inspire</p>
            </div>
        </div>
    </header>
);

const Agenda = ({ onItemClick, onOpenMap }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const agendaItemsToAnimate = document.querySelectorAll('.agenda-item-animate');
    agendaItemsToAnimate.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      agendaItemsToAnimate.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);
  
  const titleContainerStyle = {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 'clamp(2rem, 8vw, 6rem)',
    marginBottom: '1.5rem',
    minHeight: 'auto', 
  };

  return (
    <section id="agenda" style={styles.section} className="content-section">
      <div className="container">
        <div style={titleContainerStyle} className="agenda-title-container">
          <h2
            style={{ ...styles.sectionTitle, margin: 0, whiteSpace: 'nowrap' }}
            className="agenda-headline"
          >
            Agenda
          </h2>
        </div>
        <ul style={{...styles.agendaList}}>
          {agendaItems.map((item, index) => {
            const isClickable = !!item.description;
            const itemStyle = {
              ...styles.agendaItem,
              cursor: isClickable ? 'pointer' : 'default',
            };
            const classNames = [
              isClickable ? 'agenda-item-clickable' : null,
              'agenda-item-animate',
            ].filter(Boolean).join(' ');

            return (
              <li
                key={index}
                style={itemStyle}
                className={classNames}
                onClick={() => isClickable && onItemClick(item)}
              >
                <div style={styles.agendaTimeWrapper}>
                  <div style={styles.agendaTime}>{item.time}</div>
                  <div 
                    style={styles.agendaLocation} 
                    className="agenda-location-link"
                    onClick={onOpenMap}
                    title="View Map"
                  >
                    {item.location}
                  </div>
                </div>
                <div>
                  <h3 style={styles.agendaTitle}>{item.title}</h3>
                  {item.speaker && <p style={styles.agendaSpeaker}>{item.speaker}</p>}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

const Workshops = ({ onOpenMap }) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const itemsToAnimate = currentSection.querySelectorAll('.workshop-item-animate');
    itemsToAnimate.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      itemsToAnimate.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} id="workshops" style={styles.section} className="content-section">
      <div className="container">
        <h2 style={{...styles.sectionTitle, marginBottom: '0.5rem'}}>Workshops</h2>
        <p style={{ 
            textAlign: 'center', 
            color: 'var(--secondary-color)', 
            margin: '0 auto 1rem auto',
            fontSize: '1.1rem',
            fontWeight: '500'
        }}
        className="agenda-location-link"
        onClick={onOpenMap}
        >
            All held in MBA Building
        </p>
        <div style={styles.sectionTitleSeparator}></div>
        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
          <table style={styles.workshopTable}>
            <thead style={styles.workshopThead}>
              <tr>
                <th style={{...styles.workshopTh, width: '10%'}}>Workshop</th>
                <th style={{...styles.workshopTh, width: '50%'}}>Title</th>
                <th style={{...styles.workshopTh, width: '15%'}}>Location</th>
                <th style={{...styles.workshopTh, width: '25%'}}>Presenter</th>
              </tr>
            </thead>
            <tbody>
              {workshopItems.map((item, index) => (
                <tr
                  key={index}
                  style={styles.workshopTr}
                  className="workshop-item-animate"
                  onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--border-color)'}
                  onMouseOut={e => e.currentTarget.style.backgroundColor = 'var(--card-bg)'}
                >
                  <td style={{...styles.workshopTd, color: 'var(--primary-color)', fontFamily: "'Share Tech Mono', monospace"}}>{item.type}</td>
                  <td style={styles.workshopTd}>{item.title}</td>
                  <td style={styles.workshopTd}>{item.location}</td>
                  <td style={styles.workshopTd}>{item.instructor}</td>
                </tr>
              ))}
              <tr style={styles.workshopTr}>
                <td colSpan={4} style={{...styles.workshopTd, textAlign: 'center'}}>
                    <div style={{ padding: '1rem 0' }}>
                        <h4 style={{ fontFamily: "'Share Tech Mono', monospace", margin: '0 0 0.5rem 0', color: 'var(--primary-color)', fontSize: '1.2rem' }}>Booth Fair</h4>
                        <p style={{ margin: 0, opacity: 0.9 }}>
                            Check out the demos and info from companies and student clubs on campus! Learn about the Robotics club, the Computing club, the Women in Technology club, the Google Student Developers club, and more!
                        </p>
                    </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const KeynoteSpeakers = ({ onItemClick, onOpenMap }) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cardsToAnimate = currentSection.querySelectorAll('.speaker-card-animate');
    cardsToAnimate.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cardsToAnimate.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} id="keynote-speakers" style={styles.section} className="content-section">
      <div className="container">
        <h2 style={{...styles.sectionTitle, marginBottom: '0.5rem'}}>Keynote Speakers</h2>
        <p style={{ 
            textAlign: 'center', 
            color: 'var(--secondary-color)', 
            margin: '0 auto 1rem auto',
            fontSize: '1.1rem',
            fontWeight: '500'
        }}
        className="agenda-location-link"
        onClick={onOpenMap}
        >
            Located in the Gymnasium
        </p>
        <div style={styles.sectionTitleSeparator}></div>
        <div style={styles.keynoteSpeakersGrid}>
          {keynoteSpeakers.map((speaker, index) => (
            <div 
              key={index} 
              style={styles.keynoteSpeakerCard}
              className="speaker-card speaker-card-animate"
              onClick={() => onItemClick(speaker)}>
              <img src={speaker.img} alt={speaker.name} style={styles.keynoteSpeakerImg} />
              <h3 style={styles.speakerName}>{speaker.name}</h3>
              <p style={styles.speakerTitle}>{speaker.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WorkshopLeads = ({ onItemClick }) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cardsToAnimate = currentSection.querySelectorAll('.speaker-card-animate');
    cardsToAnimate.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cardsToAnimate.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} id="speakers" style={styles.section} className="content-section">
      <div className="container">
        <h2 style={styles.sectionTitle}>Workshop Leads & Faculty</h2>
        <div style={styles.sectionTitleSeparator}></div>
        <div className="workshop-leads-grid">
          {workshopLeads.map((speaker, index) => (
            <div 
              key={index} 
              style={styles.speakerCard}
              className="speaker-card speaker-card-animate"
              onClick={() => onItemClick(speaker)}>
              <img src={speaker.img} alt={speaker.name} style={styles.speakerImg} />
              <h3 style={styles.speakerName}>{speaker.name}</h3>
              <p style={styles.speakerTitle}>{speaker.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer style={styles.footer}>
    <div style={styles.footerContent} className="footer-content-wrapper">
      <img
        src={elcoLogoImage}
        alt="El Camino College Logo placeholder"
        style={styles.footerLogo}
      />
      <div style={styles.footerText}>
        <p style={{ margin: '0 0 1rem 0' }}>
            The El Camino Community College District is committed to providing an educational and employment environment in which no person is subjected to discrimination on the basis of actual or perceived race, color, ancestry, national origin, religion, creed, age (over 40), disability (mental or physical), sex, gender (including pregnancy and childbirth), sexual orientation, gender identity, gender expression, medical condition, genetic information, marital status, military and veteran status, or retaliation; or on any other basis as required by state and federal law.
        </p>
      </div>
    </div>
  </footer>
);

const Modal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div style={styles.modalOverlay} onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div style={styles.modalContent} onClick={e => e.stopPropagation()} className="modal-content">
        <button style={styles.modalCloseButton} onClick={onClose} aria-label="Close dialog">&times;</button>
        {item.img && <img src={item.img} alt={item.name} style={{...styles.speakerImg, marginBottom: '1.5rem'}} />}
        <h2 id="modal-title" style={{ ...styles.sectionTitle, fontSize: '2rem', marginBottom: 'rem', textAlign: 'left', textShadow: '0 0 5px var(--primary-color)' }}>
            {item.name || item.title}
        </h2>
        {item.name && item.title && <p style={{...styles.speakerTitle, textAlign: 'left', margin: '-1rem 0 1.5rem 0', color: 'var(--text-color)', opacity: 0.9 }}>{item.title}</p>}
        <p style={{lineHeight: 1.6, opacity: 0.9, whiteSpace: 'pre-wrap'}}>{item.description}</p>
      </div>
    </div>
  );
};

const BackToTopButton = ({ onClick, visible }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const shouldShow = isVisible && visible;

  const dynamicStyle = {
    ...styles.backToTopButton,
    opacity: shouldShow ? 1 : 0,
    visibility: shouldShow ? 'visible' : 'hidden',
    transform: shouldShow ? 'translateY(0)' : 'translateY(20px)',
  };

  return (
    <button
      style={dynamicStyle}
      onClick={onClick}
      aria-label="Go to top"
      className="back-to-top-button"
      onMouseOver={e => e.currentTarget.style.boxShadow = `0 0 25px var(--primary-color)`}
      onMouseOut={e => e.currentTarget.style.boxShadow = `0 0 15px var(--primary-color)`}
    >
      &#8679;
    </button>
  );
};

const ThemeToggleButton = ({ onClick, isDarkMode, visible }) => {
  const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  );

  const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  );

  if (!visible) return null;

  return (
    <button
      style={styles.themeToggleButton}
      onClick={onClick}
      aria-label="Toggle theme"
      className="theme-toggle-button"
      onMouseOver={e => e.currentTarget.style.boxShadow = `0 0 25px var(--secondary-color)`}
      onMouseOut={e => e.currentTarget.style.boxShadow = `0 0 15px rgba(0, 0, 0, 0.2)`}
    >
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

const VisibilityControl = ({ isVisible, onToggle }) => {
    // Eye Icon (Open)
    const ShowIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
             <circle cx="12" cy="12" r="3"></circle>
        </svg>
    );

    // Eye Slash Icon (Hidden)
    const HideIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
        </svg>
    );

    return (
        <button
            style={styles.visibilityToggleButton}
            onClick={onToggle}
            aria-label={isVisible ? "Hide controls" : "Show controls"}
            className="visibility-toggle-button"
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        >
            {isVisible ? <HideIcon /> : <ShowIcon />}
        </button>
    );
};

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [theme, setTheme] = useState('dark');
  const [uiVisible, setUiVisible] = useState(true);
  const [activeWidget, setActiveWidget] = useState(null);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleUiToggle = () => {
    if (uiVisible) {
        // If we are hiding the UI, also close any active widgets
        setActiveWidget(null);
    }
    setUiVisible(!uiVisible);
  };
  
  const openMap = (e) => {
    e.stopPropagation();
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
      const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

      newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Campus Map - ScaleUpv5</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
            <style>
              :root {
                --bg-color: #0a0a1a;
                --text-color: #e0e0e0;
                --primary-color: #00bfff;
                --secondary-color: #ff00ff;
                --card-bg: #1a1a2e;
                --border-color: #3a3a5e;
              }
              body[data-theme='light'] {
                --bg-color: #ffffff;
                --text-color: #1a1a1a;
                --primary-color: #0077FF;
                --secondary-color: #FF477E;
                --card-bg: #dee2e6;
                --border-color: #e9ecef;
              }
              body {
                margin: 0;
                padding: 2rem;
                background-color: var(--bg-color);
                color: var(--text-color);
                font-family: 'Poppins', sans-serif;
                display: flex;
                flex-direction: column;
                align-items: center;
                min-height: 100vh;
                text-align: center;
                transition: background-color 0.3s ease, color 0.3s ease;
              }
              img {
                max-width: 100%;
                height: auto;
                border: 2px solid var(--primary-color);
                box-shadow: 0 0 20px rgba(0, 191, 255, 0.2);
                border-radius: 8px;
              }
              p {
                font-size: 2rem;
                color: var(--primary-color);
                max-width: 900px;
                line-height: 1.4;
                margin-bottom: 2rem;
                text-shadow: 0 0 15px var(--primary-color), 0 0 30px var(--primary-color);
                font-weight: 600;
              }
              .theme-toggle {
                position: fixed;
                bottom: 2rem;
                left: 2rem;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                border: 2px solid var(--border-color);
                background: var(--card-bg);
                color: var(--primary-color);
                cursor: pointer;
                display: flex;
                align-items: center;
                justifyContent: center;
                box-shadow: 0 0 15px rgba(0,0,0,0.2);
                transition: all 0.3s ease;
              }
              .theme-toggle:hover {
                 box-shadow: 0 0 25px var(--secondary-color);
              }
            </style>
          </head>
          <body data-theme="${theme}">
            <p>The buildings enclosed by the yellow rectangles indicate the locations.</p>
            <img src={elcoMapImage} alt="El Camino College Campus Map" />
            <button class="theme-toggle" aria-label="Toggle theme"></button>
            <script>
              const btn = document.querySelector('.theme-toggle');
              const sunIcon = \`${sunIcon}\`;
              const moonIcon = \`${moonIcon}\`;
              
              function updateIcon() {
                const currentTheme = document.body.getAttribute('data-theme');
                btn.innerHTML = currentTheme === 'dark' ? sunIcon : moonIcon;
              }

              btn.addEventListener('click', () => {
                const currentTheme = document.body.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                document.body.setAttribute('data-theme', newTheme);
                updateIcon();
              });

              updateIcon();
            </script>
          </body>
        </html>
      `);
      newWindow.document.close();
    }
  };

  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <KeynoteSpeakers onItemClick={handleItemClick} onOpenMap={openMap} />
        <Agenda onItemClick={handleItemClick} onOpenMap={openMap} />
        <Workshops onOpenMap={openMap} />
        <WorkshopLeads onItemClick={handleItemClick} />
      </main>
      <Footer />
      <Modal item={selectedItem} onClose={handleCloseModal} />
      
      <BackToTopButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} visible={uiVisible} />
      <ThemeToggleButton onClick={toggleTheme} isDarkMode={theme === 'dark'} visible={uiVisible} />
      
      <TimerWidget 
        visible={uiVisible}
        isOpen={activeWidget === 'timer'}
        onToggle={(isOpen) => setActiveWidget(isOpen ? 'timer' : null)}
      />
      
      <DateWidget 
        visible={uiVisible}
        isOpen={activeWidget === 'date'}
        onToggle={(isOpen) => setActiveWidget(isOpen ? 'date' : null)}
      />
      
      <VisibilityControl isVisible={uiVisible} onToggle={handleUiToggle} />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);