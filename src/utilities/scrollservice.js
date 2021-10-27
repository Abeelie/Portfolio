import { TOTAL_SCREENS } from "./commonUtils";
import {Subject} from "rxjs";

export default class ScrollService {
    static scrollHandler = new ScrollService();
    static currentScreenBroadCaster = new Subject();
    static currentScreenFadeIn = new Subject();

    constructor(){
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewport);
    }

    scrollToHireMe = () => {
        const contactMeScreen = document.getElementById("Contact Me");
        if (!contactMeScreen) {
            return;
        } else {
            contactMeScreen.scrollIntoView({behavior: "smooth"});
        }
    }

    scrollToHome = () => {
        const homeScreen = document.getElementById("Home");
        if (!homeScreen) {
            return;
        } else {
            homeScreen.scrollIntoView({behavior: "smooth"});
        }
    }

    isElementInView = (el, type) => {
        const rec = el.getBoundingClientRect();
        const elementTop = rec.top;
        const elementBottom = rec.Bottom;
        const partiallyVisible = elementTop < window.innerHeight && elementBottom >= 0;
        const completelyVisible = elementTop >= 0 && elementBottom <= window.innerHeight;
    
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
        if(!event || Object.keys(event).length < 1) return;
        for(let screen of TOTAL_SCREENS){
            const screenFromDom = document.getElementById(screen.screen_name);
            if (!screenFromDom) {
                continue;
            }
            const fullyVisibles = this.isElementInView(screenFromDom, "complete");
            const partiallyVisibles = this.isElementInView(screenFromDom, "partial");

            if (fullyVisibles || partiallyVisibles) {
                if (partiallyVisibles && !screen.alreadyRendered) {
                    ScrollService.currentScreenFadeIn.next({
                        fadeInScreen: screen.screen_name
                    })
                    screen['alreadyRendered'] = true;
                    break;
                }
                if (fullyVisibles) {
                    ScrollService.currentScreenBroadCaster.next({
                        screenInView: screen.screen_name,
                    })
                    break
                }
            }
        }
    }
}