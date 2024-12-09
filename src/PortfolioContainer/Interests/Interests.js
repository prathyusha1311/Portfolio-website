import React, { useState, useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollServices from '../../utilities/ScrollServices';
import Animations from '../../utilities/Animations';
import './Interests.css';
import Teaching1 from '../../assets/Resume/Teaching1.jpeg';
import Grassroots from '../../assets/Resume/GRASSROOTS AI Chatbot.png';

export default function Interests(props) {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    const photos = [
        '../../assets/Resume/Teaching1.jpeg', // Replace with your image paths
        '../../assets/Resume/GRASSROOTS AI Chatbot.png',
        // '/assets/Interests/singing.jpg',
    ];

    useEffect(() => {
        const fadeInScreenHandler = (screen) => {
            if (screen.fadeScreen !== props.id) return;
            Animations.animations.fadeInScreen(props.id);
        };
        const fadeInSubscription = ScrollServices.currentScreenFadeIn.subscribe(fadeInScreenHandler);

        const interval = setInterval(() => {
            setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
        }, 5000); // Change photo every 5 seconds

        return () => {
            fadeInSubscription.unsubscribe();
            clearInterval(interval); // Cleanup the interval on component unmount
        };
    }, [props.id]);

    return (
        <div className="interests-container screen-container" id={props.id || ''}>
            <div className="interests-parent">
                <ScreenHeading title={'Interests'} subHeading={'Other Pursuits and Passions'} />
                <div className="interests-card">
                    {/* <div className="interests-photo">
                        <img
                            src={photos[currentPhotoIndex]}
                            alt="Interest"
                            className="interest-image fade-in"
                        />
                    </div> */}
                    <div className="interests-details">
                        <p className="interests-description">
                            Apart from my professional endeavors, I am deeply passionate about music
                            and teaching. As a <b>Carnatic singer</b>, I have performed at various
                            cultural events and competitions, winning accolades for my dedication to
                            the art. Additionally, I find immense joy in mentoring students,
                            sharing knowledge, and contributing to the academic and personal growth
                            of young minds. Through teaching, I have guided several students toward
                            achieving their goals, instilling confidence and clarity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
