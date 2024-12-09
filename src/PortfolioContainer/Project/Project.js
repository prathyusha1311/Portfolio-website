import React, { useEffect, useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollServices from "../../utilities/ScrollServices";
import Animations from "../../utilities/Animations";
import "./Project.css";
import HealthGuard from '../../assets/Resume/Health Guard.png';
import Grassroots from '../../assets/Resume/GRASSROOTS AI Chatbot.png';


export default function Projects(props) {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fadeInScreenHandler = (screen) => {
      if (screen.fadeScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription = ScrollServices.currentScreenFadeIn.subscribe(
      fadeInScreenHandler
    );

    return () => fadeInSubscription.unsubscribe();
  }, [props.id]);

  const projects = [
    {
      id: 1,
      title: "HealthGuard: Health Suite and Fall Detection Application",
      // image: "Health Guard.png", // Replace with your image path
      image:HealthGuard,
      description: [
        "Comprehensive Health Monitoring: A robust fall detection and health monitoring system tailored for elderly users, leveraging IoT devices and sensors for real-time vital sign and movement analysis.",
        "Innovative Technologies: Built using FastAPI for scalable backend APIs, integrated with machine learning models via PyTorch, and deployed on AWS for seamless performance and reliability.",
        "Advanced Features: Incorporates federated learning for secure, decentralized data processing, spatial visualization using Folium, and real-time alert systems to notify caregivers during emergencies."
      ],
      sourceCode: "https://github.com/prathyusha1311/Datascience-project",
      technologies: ["React Native", "Multi layer Perceptron", "ThingsBoard", "Apache Web server","AWS"],
    },
    {
      id: 2,
      title: "Blockchain based E-voting system with facial recognition",
      image: "https://www.honestballot.com/wp-content/uploads/2019/11/38646453_S.jpg",
      description: [
        "Secure and Transparent Voting: The Blockchain-based E-voting system ensures immutable and tamper-proof recording of votes, enhancing transparency and reducing fraud risks in election processes.",
        "Biometric Authentication: Integrates facial recognition using the Random Forest algorithm to verify voter identities, providing an additional layer of security and preventing unauthorized access.",
        "Efficient Election Management: Streamlines voter and candidate data administration, facilitating smooth organization of multiple elections, while achieving 74% accuracy in face verification and enabling real-time results tracking."
      ],
      sourceCode: "https://github.com/prathyusha1311/Blockchain-based-eVoting-system-using-Facial-Recognition",
      technologies: ["React", "Flask", "MySQL", "Python"],
    },
    {
      id: 3,
      title: "GRASSROOTS AI Chatbot Application",
      image: Grassroots,
      description: [
        "Personalized College Guidance: The GRASSROOTS AI chatbot provides automated and tailored assistance for 11th and 12th-grade students and first-year college students, helping them navigate college applications, housing, tuition, and transportation with ease.",
        "Advanced AI and RAG Integration: Utilizes Google Gemini for LLM processing, a vector database for resource retrieval, and Retrieval-Augmented Generation (RAG) techniques to deliver accurate and context-aware responses.",
        "Accessible and Scalable Solution: Deployed as a pop-up feature on the Grassroots website, the chatbot ensures seamless interaction and resource-sharing, improving engagement by 50% and assisting over 25+ students with college-related queries."
      ],
      sourceCode: "This is a private repository of USC Viterbi K12 STEM Center",
      technologies: ["Flask", "Google Gemini", "Pinecone", "Content Security Policy", "Rate Limiting", "AWS"],
    },
  ];

  const renderProjectCards = () =>
    projects.map((project) => (
      <div
        className="project-card"
        key={project.id}
        onClick={() => setSelectedProject(project)}
      >
        <img src={project.image} alt={project.title} className="project-image" />
        <h3 className="project-title">{project.title}</h3>
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-chip">
              {tech}
            </span>
          ))}
        </div>
      </div>
    ));

  return (
    <div className="projects-container screen-container" id={props.id || ""}>
      <div className="projects-parent">
        <ScreenHeading title={"Projects"} subHeading={"My Development Work"} />
        <div className="projects-grid">{renderProjectCards()}</div>

        {selectedProject && (
          <div className="project-modal">
            <div className="modal-content">
              <span
                className="close-modal"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </span>
              <h2>{selectedProject.title}</h2>
              <ul>
                {selectedProject.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <p>
                <strong>Source Code: </strong>
                <a
                  href={selectedProject.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {selectedProject.sourceCode}
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
