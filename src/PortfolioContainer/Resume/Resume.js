

import React, { useState, useEffect } from 'react';

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollServices from '../../utilities/ScrollServices';
import Animations from '../../utilities/Animations';
import './Resume.css';
// Import local assets
import educationLogo from '../../assets/Resume/education.svg';
import workHistoryLogo from '../../assets/Resume/work-history.svg';
import programmingSkillsLogo from '../../assets/Resume/programming-skills.svg';
import projectsLogo from '../../assets/Resume/projects.svg';
import interestsLogo from '../../assets/Resume/interests.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJsSquare, faReact, faNodeJs, faHtml5, faCss3Alt, faAws, faSwift } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({ transform: "translateY(0px)" });

    useEffect(() => {
        const fadeInScreenHandler = (screen) => {
            if (screen.fadeScreen !== props.id) return;
            Animations.animations.fadeInScreen(props.id);
        };

        const fadeInSubscription = ScrollServices.currentScreenFadeIn.subscribe(fadeInScreenHandler);
        return () => fadeInSubscription?.unsubscribe(); // Added safety check
    }, [props.id]);

    const ResumeHeading = ({ heading, fromDate, toDate, subHeading, description }) => (
        <div className='resume-heading'>
           <div className='resume-main-heading'>
                {/* <div className='heading-bullet'> */}
                <div className='heading-bullet'></div>
                <span>{heading}</span>  
                {fromDate && toDate && (
                        <div className='heading-date'>
                            {fromDate + ' - ' + toDate}
                        </div>
                    )}

{/* </div> */}
            </div>
            {subHeading && <div className='resume-sub-heading'><span>{subHeading}</span></div>}
            {description && <div className='resume-heading-description'><span>{description}</span></div>}
        </div>
    );

    const resumeBullets = [
        { label: "Education", logoSrc: educationLogo },
        { label: "Work History", logoSrc: workHistoryLogo },
        { label: "Programming Skills", logoSrc: programmingSkillsLogo },
        { label: "Projects", logoSrc: projectsLogo },
        { label: "Interests", logoSrc: interestsLogo },
    ];

    const programmingSkillsDetails = [
        { skill: "Python", level: "Advanced", icon: faPython },
        { skill: "JavaScript", level: "Advanced", icon: faJsSquare },
        { skill: "ReactJS", level: "Advanced", icon: faReact },
        { skill: "NodeJS", level: "Intermediate", icon: faNodeJs },
        { skill: "HTML5", level: "Advanced", icon: faHtml5 },
        { skill: "CSS3", level: "Advanced", icon: faCss3Alt },
        { skill: "AWS", level: "Intermediate", icon: faAws },
        { skill: "SQL", level: "Intermediate", icon: faDatabase },
        { skill: "Swift", level: "Beginner", icon: faSwift },
        // Add more skills as needed
    ];

    const projectDetails = [
        {
            title: "Personal Portfolio Website",
            duration: { fromDate: "2020", toDate: "2021" },
            description: "A personal portfolio website to showcase my details and projects.",
            subHeading: "Technologies Used: ReactJS, Bootstrap",
        },
        {
            title: "Chatbot Application",
            duration: { fromDate: "2022", toDate: "2023" },
            description: "A chatbot application to assist users with FAQs and queries.",
            subHeading: "Technologies Used: Python, Flask, AWS",
        },
    ];


    // Sample work history data
const workHistory = [
    {
        company: "USC Viterbi K12 STEM Center",
        role: "Full Stack Developer Intern",
        logo: "path/to/usc-logo.png", // Replace with the actual path to the company logo
        fromDate: "2020",
        toDate: "Present",
        responsibilities: [
            "Developed and integrated dynamic user onboarding applications.",
            "Worked on a MERN stack-based project, ensuring responsive design and user-friendly UI.",
            // Add more responsibilities as needed
        ],
    },
    {
        company: "USC Viterbi K12 STEM Center",
        role: "Full Stack Developer Intern",
        logo: "path/to/usc-logo.png", // Replace with the actual path to the company logo
        fromDate: "2020",
        toDate: "Present",
        responsibilities: [
            "Developed and integrated dynamic user onboarding applications.",
            "Worked on a MERN stack-based project, ensuring responsive design and user-friendly UI.",
            // Add more responsibilities as needed
        ],
    },
    // Add more work history entries as needed
];

    const resumeDetails = [
        <div className='resume-screen-container' key="education">
            <ResumeHeading
                heading="University of Southern California"
                subHeading="Master's in Computer Science - AI"
                fromDate="2023"
                toDate="2025"
            />
            <ResumeHeading
                heading="University of Southern California"
                subHeading="Bachelor of Science and Technology"
                fromDate="2014"
                toDate="2018"
            />
        </div>,
        // <div className='resume-screen-container' key="work-experience">
        //     <ResumeHeading
        //         heading="USC Viterbi K12 STEM Center"
        //         subHeading="Full Stack Developer Intern"
        //         fromDate="2020"
        //         toDate="Present"
        //     />
        //     <div className='experience-description'>
        //         <span className='resume-description-text'>
        //             - Developed and integrated dynamic user onboarding applications.
        //         </span>
        //         <br />
        //         <span className='resume-description-text'>
        //             - Worked on a MERN stack-based project, ensuring responsive design and user-friendly UI.
        //         </span>
        //     </div>
        // </div>,
    //     <div className="resume-screen-container skills-scrollable-container" key="programming-skills">
    //     <div className="skills-grid-container">
    //         {programmingSkillsDetails.map((skill, index) => (
    //             <div className="skill-card" key={index}>
    //                 <span className="skill-icon">✔️</span>
    //                 <div className="skill-details">
    //                     <span className="skill-name">{skill.skill}</span><br/>
    //                     <span className="skill-level">{skill.level}</span>
    //                 </div>
    //             </div>
    //         ))}
    //     </div>
    // </div>,

    <div className="resume-screen-container work-history">
                        {workHistory.map((job, index) => (
                            <div className="work-history-item" key={index}>
                                <img src={job.logo} alt={`${job.company} logo`} className="company-logo" />
                                <div className="work-details">
                                    <h3 className="company-name">{job.company}</h3>
                                    <p className="role">{job.role}</p>
                                    <p className="duration">{`${job.fromDate} - ${job.toDate}`}</p>
                                    <ul className="responsibilities">
                                        {job.responsibilities.map((task, idx) => (
                                            <li key={idx}>{task}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>,
    <div className="resume-screen-container skills-scrollable-container">
            <div className="skills-grid-container">
                {programmingSkillsDetails.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                        <div className="skill-details">
                            <span className="skill-name">{skill.skill}</span><br/>
                            <span className="skill-level">{skill.level}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>,
        <div className='resume-screen-container' key="projects">
            {projectDetails.map((project, index) => (
                <ResumeHeading
                    key={index}
                    heading={project.title}
                    subHeading={project.subHeading}
                    description={project.description}
                    fromDate={project.duration.fromDate}
                    toDate={project.duration.toDate}
                />
            ))}
        </div>,
        <div className='resume-screen-container' key="interests">
            <ResumeHeading heading="Teaching" description="Mentoring students in STEM subjects." />
            <ResumeHeading heading="Music" description="Passionate Carnatic singer with several performances." />
        </div>,
    ];

    const handleCarousal = (index) => {
        const offsetHeight = document.querySelector(".resume-card")?.offsetHeight || 360;
        setCarousalOffsetStyle({ transform: `translateY(${index * offsetHeight * -1}px)` });
        setSelectedBulletIndex(index);
    };

    const getBullets = () => (
        resumeBullets.map((bullet, index) => (
            <div
                key={index}
                onClick={() => handleCarousal(index)}
                className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
                role="button"
                aria-label={`Bullet ${index + 1}`}
            >
                <img
                    className="bullet-logo"
                    src={bullet.logoSrc} alt={bullet.label}
                />
                <span className='bullet-label'>{bullet.label}</span>
            </div>
        ))
    );

    const getResumeScreen = () => (
        <div style={carousalOffsetStyle} className='resume-details-carousal'>
            {resumeDetails}
        </div>
    );

    return (
        <div className='resume-container screen-container' id={props.id || ""}>
            <div className='resume-content'>
                <ScreenHeading title='Resume' subHeading='My Formal Bio Details' />
                <div className='resume-card'>
                    <div className='resume-bullets'>
                        <div className='bullet-container'>
                            <div className='bullet-icons'></div>
                            <div className='bullets'>{getBullets()}</div>
                        </div>
                    </div>
                    <div className='resume-bullet-details'>{getResumeScreen()}</div>
                </div>
            </div>
        </div>
    );
}
