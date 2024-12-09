import Home from "../PortfolioContainer/Home/Home";
import AboutMe from '../PortfolioContainer/AboutMe/AboutMe';
//import Resume from '../PortfolioContainer/Resume/Resume'
import Experience from '../PortfolioContainer/Experience/Experience'
import Education from "../PortfolioContainer/Education/Education";
import Skills from "../PortfolioContainer/Skills/Skills";
import Project from "../PortfolioContainer/Project/Project";
//import Footer from "../PortfolioContainer/ContactMe/ContactMe";
import ContactMe from "../PortfolioContainer/ContactMe/ContactMe";
import Publications from "../PortfolioContainer/Publications/Publications";
import Interests from "../PortfolioContainer/Interests/Interests";

export const TOTAL_SCREENS = [

    {
        screen_name:"Home",
        component: Home
    },
    {
        screen_name:"AboutMe",
        component:AboutMe, 
    },
    // {
    //     screen_name:"Resume",
    //     component:Resume, 
    // },
    {
        screen_name:"Experience",
        component:Experience, 
    },
    {
        screen_name:"Education",
        component:Education, 
    },
    {
        screen_name:"Skills",
        component:Skills, 
    },
    {
        screen_name:"Project",
        component:Project, 
    },
    {
        screen_name:"Publications",
        component:Publications, 
    },
    {
        screen_name:"Interests",
        component:Interests, 
    },

    {
        screen_name:"Contact Me",
        component:ContactMe, 
    },
];

export const GET_SCREEN_INDEX =(screen_name)=>{
    if(!screen_name) return -1;
    for (let i =0;i< TOTAL_SCREENS.length;i++)
    {
        if (TOTAL_SCREENS[i].screen_name === screen_name) return i
    }
    return -1;
}



