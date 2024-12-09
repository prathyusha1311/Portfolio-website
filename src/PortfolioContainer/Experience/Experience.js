import React, { useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollServices from '../../utilities/ScrollServices';
import Animations from '../../utilities/Animations';
import './Experience.css';

export default function Experience(props) {
    useEffect(() => {
        const fadeInScreenHandler = (screen) => {
            if (screen.fadeScreen !== props.id) return;
            Animations.animations.fadeInScreen(props.id);
        };
        const fadeInSubscription = ScrollServices.currentScreenFadeIn.subscribe(fadeInScreenHandler);
        return () => fadeInSubscription.unsubscribe();
    }, [props.id]);

    const EXPERIENCE_CONSTANTS = [
        {
            role: "AI and Web Application Developer",
            company: "USC Viterbi K12 STEM Center",
            fromDate: "May 2024",
            toDate: "Present",
            location: "Los Angeles, USA",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-yZXcOEmlxQbvhKdX3CL8DIWljo1f9fBCXA&s", // Replace with actual logo path
            responsibilities: [
                "Developed and deployed a RAG chatbot that assisted 25+ students in accessing tailored resources for university applications and information, improving resource discovery by 50% and enhancing engagement with personalized STEM career advice.",
                "Extracted and integrated large volumes of data from websites, personal, and private sources using advanced Large Language Models (LLMs) and vector databases, creating an efficient and responsive chatbot. ",
                "Experimented with LLMs, vector databases, and generative AI techniques, boosting the chatbot's efficiency by 30%. Deployed the chatbot into production using AWS (EC2, S3, Route53, ElasticIP, IAM, Secret Manager) and automated workflows with GitHub Actions.",
                "Taught and Empowered 70+ students, spanning ages 5 to 20 and representing diverse backgrounds, through interactive teaching of Technology, Artificial Intelligence, Data Science, Electrical, Electronics and Software concepts. ",
                "Skills : Python, FastAPI, LLMs, Flask, HTML, CSS, JavaScript, jQuery, Text and Image Emebdding Models, Retrieval-Augmented Generation (RAG), Multimodality, Pinecone, Vector Databases, Knowledge Graphs,Google Spreadsheet API, Responsive UI, Interactive Chatbot Pop-up, Docker,RESTful APIs, Data Source Management AWS, Github, Git, PlayWright, Redis, Hugging Face, Testing and Debugging"
            ]
        },
        {
            role: "Machine learning Intern",
            company: "StyleBot Inc.",
            fromDate: "May 2024",
            toDate: "August 2024",
            location: "Los Angeles, California, USA",
            logo: "https://stylebot.app/wp-content/uploads/2022/09/logo.png", // Replace with actual logo path
            responsibilities: [
                "Developed and integrated a RAG system utilizing advanced generative AI techniques and large language models (LLMs) with vector databases like Pinecone, ChromaDB, Qdrant and Neo4j resulting in a 30% increase in efficiency for Stylebot's editing pipeline. ",
                " Conducted in-depth research and experimentation with various vector embedding models, including nomic, mxbai-large-embed, and google-text-gecko, to determine the most accurate model for the RAG system, achieving a 50% improvement in response accuracy. ",
                "Enhanced Stylebot's editorial capabilities by optimizing and implementing machine learning solutions that streamlined operations, leading to improved user engagement and editorial precision. ",
               
            ]
        },
        {
            role: "Machine Learning Research Intern (Summer Research Fellowship) ",
            company: "Indian Academy of Sciences",
            fromDate: "May 2022",
            toDate: "August 2022",
            location: "Mahindra Ecole Centrale, Hyderabad, India",
            logo: "https://media.licdn.com/dms/image/v2/C510BAQFppRVG1jhbsw/company-logo_200_200/company-logo_200_200/0/1630563473513/indian_national_science_academy_logo?e=2147483647&v=beta&t=YlRLO2FMxkRo03Ps5pDT2Kt9fHm3Tyq0cCVDiCaTorI", // Replace with actual logo path
            responsibilities: [
                "Crafted a custom movie synopsis NLP app by analyzing a large-volume IMDB user reviews dataset, employing abstractive text summarization to aid users in informed film choices aligned with viewing habits and preferences.",
                "Implemented the XSum PEGASUS pre-trained transformer model, to achieve abstractive text summarization, providing concise one-line synopses for movies based on provided input text, attaining a model accuracy of 83%."
            ]
        },
        {
            role: "Technical Intern",
            company: "BrainWaves Neuro Rehab Solutions Pvt. Ltd. ",
            fromDate: "August 2021",
            toDate: "December 2021",
            location: "SRM IST Innovation and Incubation Center, Chennai,India",
            logo: "https://fablab.srmdei.com/static/media/client-2.71e0e23f74d1dc43217e.png",
            responsibilities: [
                "Spearheaded a cross-functional team of Technical Interns in developing a specialized product for stroke survivors, addressing unique needs and enhancing recovery experience.",
                "Demonstrated initiative by leveraging VR and Unity to create an innovative health-focused game, capturing real-time movement data, contributing to improved patient well-being and medical insights, benefitting five patients.",
                "Utilized PowerBI to design and develop comprehensive dashboards that effectively communicated analytics on patients' health, enabling data-driven decision-making and enhancing healthcare outcomes."
            ]
        }
    ];

    const renderExperience = () => {
        return EXPERIENCE_CONSTANTS.map((exp, i) => (
            <div className='experience-item' key={i}>
                <div className='experience-logo'>
                    <img src={exp.logo} alt={`${exp.company} logo`} />
                </div>
                <div className='experience-details'>
                    <h3 className='experience-role'>{exp.role}</h3>
                    <p className='experience-company'>{exp.company}</p>
                    <p className='experience-dates'>{`${exp.fromDate} - ${exp.toDate}`}</p>
                    <p className='experience-location'>{exp.location}</p> 
                    <ul className='experience-responsibilities'>
                        {exp.responsibilities.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ul>
                </div>
            </div>
        ));
    };

    return (
        <div className='experience-container screen-container' id={props.id || ""}>
            <div className='experience-parent'>
                <ScreenHeading title={'Experience'} subHeading={"My Professional Journey"} />
                <div className='experience-card'>
                    {renderExperience()}
                </div>
            </div>
        </div>
    );
}
