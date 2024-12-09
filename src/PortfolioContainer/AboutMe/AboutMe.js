import React, { useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollServices from '../../utilities/ScrollServices';
import Animations from '../../utilities/Animations';
import './AboutMe.css';

export default function AboutMe(props) {
    useEffect(() => {
        const fadeInScreenHandler = (screen) => {
            if (screen.fadeScreen !== props.id) return;
            Animations.animations.fadeInScreen(props.id);
        };
        const fadeInSubscription = ScrollServices.currentScreenFadeIn.subscribe(fadeInScreenHandler);
        return () => fadeInSubscription.unsubscribe();
    }, [props.id]);

    const SCREEN_CONSTANTS = {
        description: (
            <>
            <p>
                Hello! I’m <strong>Prathyusha Naresh Kumar</strong>, a passionate technologist specializing in{" "}
                <strong>Machine Learning, Artificial Intelligence, and Data Science</strong>. Based in{" "}
                <strong>Los Angeles, California</strong>, I am pursuing my Master’s in Computer Science at the{" "}
                <strong>University of Southern California (USC)</strong>.
            </p>
            {/* <br /> */}
            <p>
                I thrive on <strong>building scalable web and mobile applications</strong>, making{" "}
                <strong>data-driven decisions</strong>, and contributing to <strong>cutting-edge research</strong> to solve real-world challenges.
            </p>
            {/* <br /> */}
            <p>
                With a strong belief in <strong>continuous learning</strong> and an <strong>entrepreneurial spirit</strong>, 
                I aim to create meaningful solutions that inspire progress and drive innovation.
            </p>
        </>
        ),
        highlights: {
            bullets: [
                {
                    title: "Full Stack and Mobile Development",
                    description: "Designed and implemented responsive web applications using modern frameworks like React, Flask, and Node.js. Developed mobile applications utilizing Swift and React Native, focusing on seamless user experiences and performance optimization."
                },
                {
                    title: "Machine Learning Expertise",
                    description: "Proficient in supervised and unsupervised learning techniques, including classification, regression, clustering, and dimensionality reduction. Applied these concepts in real-world projects using Python libraries like Scikit-Learn, TensorFlow, and PyTorch. "
                },
                {
                    title: "Natural Language Processing (NLP) and Computer Vision (CV)",
                    description: "Leveraged advanced NLP techniques like sentiment analysis, text classification, and named entity recognition using models such as BERT and GPT. Improved language model accuracy through fine-tuning and hyperparameter optimization. Experienced in developing computer vision applications such as image recognition, object detection, semantic segmentation, and OCR using libraries like OpenCV, Pytessaract"
                },
                {
                    title: "Data Engineering and Visualization",
                    description: "Engineered scalable data pipelines and utilized visualization tools such as Tableau, Power BI, and Matplotlib to derive actionable insights. Experience in handling large datasets using Apache Spark and SQL for data wrangling."
                },
                {
                    title: "Soft Skills and Collaboration",
                    description: "Effective communicator and team player with a knack for leading cross-functional projects. Fostered collaboration across technical and non-technical teams to align objectives and deliver impactful solutions."
                },
                {
                    title: "Research and Innovation",
                    description: "Conducted research on AI model robustness, exploring techniques such as adversarial training and reinforcement learning. Published findings in conferences and integrated innovations into practical applications."
                },
            ],
            heading: "Here are a few highlights:"
        }
    };

    const renderHighlight = () => {
        return SCREEN_CONSTANTS.highlights.bullets.map((bullet, i) => (
            <div className='highlight' key={i}>
                <div className='highlight-blob'></div>
                <div>
                    <span className='highlight-title'>{bullet.title}</span>
                    <p className='highlight-description'>{bullet.description}</p>
                </div>
            </div>
        ));
    };

    return (
        <div className='about-me-container screen-container' id={props.id || ""}>
            <div className='about-me-parent'>
                <ScreenHeading title={'About Me'} subHeading={"Crafting Solutions, Driving Innovation"} />
                <div className='about-me-card'>
                    <div className='about-me-profile'></div>
                    <div className='about-me-details'>
                        <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
                        <div className='about-me-highlights'>
                            <div className='highlight-heading'>
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className='about-me-options'>
                            <button className="btn primary-btn" onClick={() => {
              const contactMeSection = document.getElementById("ContactMe");
              if (contactMeSection) {
                contactMeSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            >Hire Me</button>
                            <a href="https://drive.google.com/file/d/1DFZx9famKjQwwlcvohZ86vPV-sqjEZxz/view?usp=sharing" target="_blank" rel="noopener noreferrer">
  <button className="btn highlighted-btn">Get Resume</button>
</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
