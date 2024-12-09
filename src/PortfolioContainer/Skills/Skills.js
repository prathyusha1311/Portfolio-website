// import React, { useState, useEffect } from "react";
// import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
// import ScrollServices from "../../utilities/ScrollServices";
// import Animations from "../../utilities/Animations";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { 
//     faPython, 
//     faJsSquare, 
//     faReact, 
//     faNodeJs, 
//     faHtml5, 
//     faCss3Alt, 
//     faAws, 
//     faSwift 
//   } from "@fortawesome/free-brands-svg-icons";
  
//   import { 
//     faDatabase, 
//     faCode, // Use for Django
//     faLeaf // Use for MongoDB
//   } from "@fortawesome/free-solid-svg-icons";
  
// import "./Skills.css";

// export default function Skills(props) {
//   const [expanded, setExpanded] = useState(false);

//   useEffect(() => {
//     const fadeInScreenHandler = (screen) => {
//       if (screen.fadeScreen !== props.id) return;
//       Animations.animations.fadeInScreen(props.id);
//     };

//     const fadeInSubscription = ScrollServices.currentScreenFadeIn.subscribe(
//       fadeInScreenHandler
//     );

//     return () => fadeInSubscription.unsubscribe();
//   }, [props.id]);

//   const skills = [
//     { name: "Python", level: "Advanced", icon: faPython },
//     { name: "JavaScript", level: "Advanced", icon: faJsSquare },
//     { name: "ReactJS", level: "Advanced", icon: faReact },
//     { name: "NodeJS", level: "Intermediate", icon: faNodeJs },
//     { name: "HTML5", level: "Advanced", icon: faHtml5 },
//     { name: "CSS3", level: "Advanced", icon: faCss3Alt },
//     { name: "AWS", level: "Intermediate", icon: faAws },
//     { name: "SQL", level: "Intermediate", icon: faDatabase },
//     { name: "Swift", level: "Beginner", icon: faSwift },
//     { name: "MongoDB", level: "Intermediate", icon: faLeaf }, // Using faLeaf for MongoDB
//     { name: "Django", level: "Intermediate", icon: faCode }, // Using faCode for Django
//     { name: "TypeScript", level: "Intermediate", icon: faJsSquare },
//     { name: "Kubernetes", level: "Beginner", icon: faDatabase },
//     { name: "Docker", level: "Intermediate", icon: faNodeJs },
//     { name: "GraphQL", level: "Beginner", icon: faReact },
//     { name: "Java", level: "Advanced", icon: faJsSquare },
//     { name: "Flask", level: "Intermediate", icon: faPython },
//     { name: "PostgreSQL", level: "Intermediate", icon: faDatabase },
//     { name: "Firebase", level: "Intermediate", icon: faDatabase },
//     { name: "TensorFlow", level: "Intermediate", icon: faPython },
//   ];
  

//   const visibleSkills = expanded ? skills : skills.slice(0, 9);

//   const renderSkills = () =>
//     visibleSkills.map((skill, index) => (
//       <div className="skill-card" key={index}>
//         <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
//         <h4 className="skill-name">{skill.name}</h4>
//         <p className="skill-level">{skill.level}</p>
//       </div>
//     ));

//   return (
//     <div className="skills-container screen-container" id={props.id || ""}>
//       <div className="skills-parent">
//         <ScreenHeading
//           title={"Skills"}
//           subHeading={"My Technical Proficiencies"}
//         />
//         <div className="skills-grid">{renderSkills()}</div>
//         <div className="load-more">
//           <button
//             className="btn primary-btn"
//             onClick={() => setExpanded(!expanded)}
//           >
//             {expanded ? "Show Less" : "Load More"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollServices from "../../utilities/ScrollServices";
import Animations from "../../utilities/Animations";
import "./Skills.css";

export default function Skills(props) {
  const [expanded, setExpanded] = useState(false);

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

  const skills = [
    { name: "Python", level: "Advanced", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png" },
    { name: "C", level: "Intermediate", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png" },
    { name: "C++", level: "Intermediate", logo: "https://avatars.githubusercontent.com/u/13841574?v=4" },
    { name: "HTML", level: "Advanced", logo: "https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png?f=webp&w=256" },
    { name: "CSS", level: "Advanced", logo: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    { name: "SQL", level: "Advanced", logo: "https://static.vecteezy.com/system/resources/thumbnails/036/044/336/small_2x/sql-database-icon-logo-design-ui-or-ux-app-png.png" },
    { name: "JavaScript", level: "Intermediate", logo: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" },
    { name: "TensorFlow", level: "Intermediate", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFoiz9_MxMLfD9rxAcai43v3zmqcx4Y8pb5g&s" },
    { name: "PyTorch", level: "Intermediate", logo: "https://static-00.iconduck.com/assets.00/pytorch-icon-423x512-6xpyyw7t.png" },
    { name: "Scikit Learn", level: "Advanced", logo: "https://e7.pngegg.com/pngimages/39/4/png-clipart-logo-scikit-learn-python-github-machine-learning-text-orange.png" },
    { name: "Numpy", level: "Advanced", logo: "https://logosandtypes.com/wp-content/uploads/2024/02/NumPy.png" },
    { name: "Pandas", level: "Advanced", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZd37oUzVXPHOsl-Ygg5hzYpZs7Djvk-vSw&s" },
    { name: "Hugging Face", level: "Advanced", logo: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.png" },
    {name:"ML Libraries", level:"Advanced", logo: "https://www.shutterstock.com/image-vector/artificial-intelligence-circuit-line-style-260nw-2316452929.jpg"},
    { name: "Vertex AI (GCP)", level: "Intermediate", logo: "https://static-00.iconduck.com/assets.00/google-cloud-icon-512x412-8rnz6wkz.png" },
    { name: "AWS", level: "Intermediate", logo: "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png" },
    { name: "React Native", level: "Beginner", logo: "https://reactnative.dev/img/header_logo.svg" },
    { name: "Docker", level: "Intermediate", logo: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png" },
    { name: "Linux", level: "Intermediate", logo: "https://seeklogo.com/images/L/Linux_Tux-logo-DA252F3C21-seeklogo.com.png" },
    { name: "ReactJS", level: "Intermediate", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/react.svg" },
    { name: "FastAPI", level: "Intermediate", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_3MFhCzXcwI3GWIDTsWJg2HXDTG7TwGovA&s" },
    { name: "Pinecone (Vector Databases)", level: "Intermediate", logo: "https://pbs.twimg.com/profile_images/1676450951874453505/y5_T5OWH_200x200.png" },
    { name: "CUDA", level: "Beginner", logo: "https://www.svgrepo.com/show/373541/cuda.svg" },
    { name: "SPARK", level: "Beginner", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Apache_Spark_logo.svg/2560px-Apache_Spark_logo.svg.png" },
    { name: "NodeJS", level: "Intermediate", logo: "https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png" },
    { name: "MongoDB", level: "Intermediate", logo: "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png" },
    { name: "MySQL", level: "Intermediate", logo: "https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png" },
    { name: "Langchain & LangGraph", level: "Intermediate", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb2FZsSE8lCx255gSAAV4LyVLQr6PVravPCA&s" },
    { name: "PowerBI", level: "Intermediate", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
    { name: "REDIS", level: "Beginner", logo: "data:image/jpeg;base64,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" },
    {name:"NLTK", level:"Advanced", logo: "https://miro.medium.com/v2/resize:fit:1200/1*-dNH8WI8Oy3etClaRvRCgw.png"},
    {name: "OpenCV", level:"Intermediate", logo:"https://github.com/opencv/opencv/wiki/logo/OpenCV_logo_no_text.png"},
    {name:"Flask", level:"Advanced", logo:"https://cdn.worldvectorlogo.com/logos/flask.svg"},
    {name:"Django", level:"Intermediate", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbaw-k_0RKwf1WzasaX3fDLQamF6er6YN4Q&s"},
    {name:"ExpressJS", level:"Beginner", logo:"https://cdn.prod.website-files.com/6320125ace536b6ad148eca3/66502d746f57d299fe0e0c31_Image%201-Express.js.webp"},
    {name: "Git and Github", level:"Intermediate", logo:"https://cdn-icons-png.flaticon.com/512/25/25231.png"},
    {name:"PostgreSQL", level:"Beginner", logo:"https://banner2.cleanpng.com/20180315/eaq/av0cw3km1.webp"},
    {name:"GraphQL",level:"Beginner", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeefbmS16N_Nw0jZSh3aIfVJg7Pz9CLqcnCA&s"},
    {name:"XGBoost", level:"Intermediate", logo:"https://miro.medium.com/v2/resize:fit:720/0*2LQ7VkdK9d2WaPVJ.png"},
    {name:"RaspberryPi", level:"Intermediate", logo:"https://download.logo.wine/logo/Raspberry_Pi/Raspberry_Pi-Logo.wine.png"},
    {name:"Arduino", level:"Intermediate", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdtg42dIkmNspEu55Lf1OGigF546QpdGuLcw&s"},
    {name:"Postman", level:"Intermediate", logo:"https://cdn.worldvectorlogo.com/logos/postman.svg"}



  ];

  const visibleSkills = expanded ? skills : skills.slice(0, 9);

  const renderSkills = () =>
    visibleSkills.map((skill, index) => (
      <div className="skill-card" key={index}>
        <img src={skill.logo} alt={`${skill.name} logo`} className="skill-icon" />
        <h4 className="skill-name">{skill.name}</h4>
        <p className="skill-level">{skill.level}</p>
      </div>
    ));

  return (
    <div className="skills-container screen-container" id={props.id || ""}>
      <div className="skills-parent">
        <ScreenHeading title={"Skills"} subHeading={"My Technical Proficiencies"} />
        <div className="skills-grid">{renderSkills()}</div>
        <div className="load-more">
          <button
            className="btn primary-btn"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show Less" : "Load More"}
          </button>
        </div>
      </div>
    </div>
  );
}
