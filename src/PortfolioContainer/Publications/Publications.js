import React, { useEffect, useState } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollServices from '../../utilities/ScrollServices';
import Animations from '../../utilities/Animations';
import './Publications.css';
import Publication_1 from '../../assets/Resume/Publication_1.png';
import Pub_2 from '../../assets/Resume/Pub_2.png'
export default function Publications(props) {
  const [expanded, setExpanded] = useState({});

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

  const publications = [
    {
      title: "Don’t Blame the Data, Blame the Model: Understanding Noise and Bias",
      description:"This research highlights the limitations of conventional models trained on aggregated labels in subjective tasks, showing low confidence on high-disagreement instances. By exploring Multiple Ground Truth (Multi-GT) approaches that leverage raw annotations, we demonstrate improved model confidence and effectiveness in handling subjective tasks, paving the way for more robust learning from diverse perspectives.",
        image: Publication_1,
      link: "https://arxiv.org/abs/2403.04085",
    },
    {
      title: "Blockchain-Based E-Voting System with Facial Recognition",
      description:
        "Presented at the International Conference on Inventive Computational Technologies (ICICT), this paper showcases an innovative blockchain-based e-voting system enhanced with facial recognition technology to ensure security and transparency in voting processes.",
      image: Pub_2,
      link: "https://ieeexplore.ieee.org/document/10134227",
    },
    // Add more publications as needed
  ];

  const toggleExpanded = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="publications-container screen-container" id={props.id || ''}>
      <div className="publications-parent">
        <ScreenHeading title={'Publications'} subHeading={'My Research Papers'} />
        <div className="publications-content">
          {publications.map((pub, index) => (
            <div className="publication-card" key={index}>
              <div className="publication-image">
                <img src={pub.image} alt={pub.title} />
              </div>
              <div className="publication-details">
                <h3 className="publication-title">{pub.title}</h3>
                <p className="publication-description">
                  {expanded[index] || pub.description.length <= 150
                    ? pub.description
                    : `${pub.description.slice(0, 150)}...`}
                </p>
                {pub.description.length > 150 && (
                  <button
                    className="publication-more-btn"
                    onClick={() => toggleExpanded(index)}
                  >
                    {expanded[index] ? 'Show Less' : 'Show More'}
                  </button>
                )}
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noreferrer"
                  className="publication-link"
                >
                  Read Full Paper
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
