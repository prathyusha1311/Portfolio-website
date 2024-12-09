import { TOTAL_SCREENS } from "./commonUtils";
import { Subject } from 'rxjs';

export default class ScrollServices {

    static scrollHandler = new ScrollServices();

    static currentScreenBroadCaster = new Subject();
    static currentScreenFadeIn = new Subject();

    constructor() {
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewport);
    }

    ScrollToHireMe = () => {
        let contactMeScreen = document.getElementById("Contact Me");
        if (!contactMeScreen) return;
        contactMeScreen.scrollIntoView({ behavior: "smooth" });
    }

    ScrollToHome = () => {
        let homeScreen = document.getElementById("Home");
        if (!homeScreen) return;
        homeScreen.scrollIntoView({ behavior: "smooth" });
    }

    isElementInView = (elem, type) => {
        let rec = elem.getBoundingClientRect();
        let elementTop = rec.top;
        let elementBottom = rec.bottom;

        let partiallyVisible = elementTop < window.innerHeight && elementBottom >= 0;
        let completelyVisible = elementTop >= 0 && elementBottom <= window.innerHeight;

        switch (type) {
            case "partial":
                return partiallyVisible;
            case "complete":
                return completelyVisible;
            default:
                return false;
        }
    }

    checkCurrentScreenUnderViewport = (event) => {
        if (!event || Object.keys(event).length < 1) return;

        for (let screen of TOTAL_SCREENS) {
            let screenfromDOM = document.getElementById(screen.screen_name);
            if (!screenfromDOM) continue;

            let fullyVisible = this.isElementInView(screenfromDOM, "complete");
            let partiallyVisible = this.isElementInView(screenfromDOM, "partial");

            if (fullyVisible || partiallyVisible) {
                if (partiallyVisible && !screen.alreadyRendered) {
                    ScrollServices.currentScreenFadeIn.next({
                        fadeInScreen: screen.screen_name
                    });
                    screen['alreadyRendered'] = true;
                    break;
                }
                if (fullyVisible) {
                    ScrollServices.currentScreenBroadCaster.next({
                        screenInView: screen.screen_name,
                    });
                    break;
                }
            }
        }
    };
}
