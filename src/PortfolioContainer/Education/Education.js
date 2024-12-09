import React, { useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollServices from '../../utilities/ScrollServices';
import Animations from '../../utilities/Animations';
import USCLogo from '../../assets/Education/USC Logo.png';
import './Education.css';

export default function Education(props) {
    useEffect(() => {
        const fadeInScreenHandler = (screen) => {
            if (screen.fadeScreen !== props.id) return;
            Animations.animations.fadeInScreen(props.id);
        };
        const fadeInSubscription = ScrollServices.currentScreenFadeIn.subscribe(fadeInScreenHandler);
        return () => fadeInSubscription.unsubscribe();
    }, [props.id]);

    const educationDetails = [
        {
            logo: USCLogo, // Replace with the actual path to the logo
            university: 'University of Southern California',
            year: '2023 - 2025',
            course: 'Master\'s in Computer Science (Artificial Intelligence)',
            cgpa: 'GPA: 3.17/4.0',
            coursework: [
                'Deep Learning',
                'Natural Language Processing',
                'Machine Learning',
                'Computer Vision',
                'Data Science Professional Practicum', 
                'Information Retrieval and Web search engines',
                'Artificial Intelligence', 
                'Analysis of Algorithms'
            ],
        },
        {
            logo: 'https://upload.wikimedia.org/wikipedia/en/f/fe/Srmseal.png', // Replace with the actual path to the logo
            university: 'SRM Institute of Science and Technology',
            year: '2019 - 2023',
            course: 'Bachelor of Technology in Computer Science',
            cgpa: 'GPA: 9.43/10.0',
            coursework: [
                'Data Structures',
                'Algorithms',
                'Operating Systems',
                'Database Systems',
                'Computer Networks', 
                'Web Application Development', 
                'Object Oriented Programming',
                'Cloud Computing and it\'s Architecture'

            ],
        },
    ];

    const renderCoursework = (coursework) => {
        return coursework.map((course, index) => <li key={index}>{course}</li>);
    };

    const renderEducationDetails = () => {
        return educationDetails.map((education, index) => (
            <div className="education-box" key={index}>
                <div className="education-logo">
                    <img src={education.logo} alt={`${education.university} logo`} />
                </div>
                
                <div className="education-details">
                    <h3 className="education-university">{education.university}</h3>
                    <p className="education-year">{education.year}</p>
                    <p className="education-course">{education.course}</p>
                    <p className="education-cgpa">{education.cgpa}</p>
                    <ul className="education-coursework">{renderCoursework(education.coursework)}</ul>
                </div>
            </div>
        ));
    };

    return (
        <div className="education-container screen-container" id={props.id || ''}>
            <div className="education-parent">
                <ScreenHeading title={'Education'} subHeading={'My Academic Journey'} />
                <div className="education-content">{renderEducationDetails()}</div>
            </div>
        </div>
    );
}
