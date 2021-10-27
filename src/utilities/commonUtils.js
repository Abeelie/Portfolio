import Hompage from "../pages/HomePage/HomePage";
import About from "../components/About/About";
import Resume from "../components/Resume/Resume";
import Contact from "../components/Contact/Contact";

export const TOTAL_SCREENS = 
[
    {
        screen_name: "Home",
        component: Hompage,
    },
    {
        screen_name: "About Me",
        component: About,
    },
    {
        screen_name: "Resume",
        component: Resume,
    },
    {
        screen_name: "Contact",
        component: Contact,
    },
]

export const GET_SCREEN_INDEX = (screen_name) => {
    if (!screen_name) return -1;
    for (let index = 0; index < TOTAL_SCREENS.length; index++) {
        if (TOTAL_SCREENS[index].screen_name === screen_name) return index; 
    }
    return -1;
}