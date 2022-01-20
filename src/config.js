import About from "./views/about";
import Bike from "./views/bike";
import Blog from "./views/blog";
import Comingsoon from "./views/comingsoon";
import Contact from "./views/contact";
import Error from "./views/error";
import Home from "./views/home";
import Login from "./views/login";
import PrivacyPolicy from "./views/privacy";
import Register from "./views/register";
import Support from "./views/support";

const appCfg = {
    routes:[
        {navItem:true, exact:true, path:"/",name:"Home",view:<Home/>},
        {navItem:true, exact:true, path:"/about",name:"About",view:<About/>},
        {navItem:true, exact:true, path:"/bike",name:"Bike",view:<Bike/>},
        {navItem:true, exact:true, path:"/support",name:"Support",view:<Support/>},
        {navItem:true, exact:true, path:"/blog",name:"Blog",view:<Blog/>},
        {navItem:true, exact:true, path:"/contact",name:"Contact",view:<Contact/>},
        {navItem:true, exact:true, path:"/login",name:<span className="fa fa-user-circle"></span>,view:<Login backLink={{name:" Register now!",href:"/register"}}/>},
        {navItem:false, exact:true, path:"/comingsoon",name:"Comingsoon",view:<Comingsoon/>},
        {navItem:false, exact:true, path:"/register",name:"Register",view:<Register backLink={{name:" Login now!",href:"/login"}}/>},
        {navItem:false, exact:false, path:"/error",name:"Error",view:<Error backLink={{name:"back to Home",href:"/"}}/>},
        {navItem:false, exact:true, path:"/privacy",name:"Privacy",view: <PrivacyPolicy backLink={{name:"back to Home",href:"/"}}/>},
        {navItem:false, exact:false, path:"*",name:"any",view:<Error backLink={{name:"back to Home",href:"/"}}/>}
    ]
};

const APP_LINKS = {
    messages: "",
    users: ""
};

const MESSAGES = {
    comingSoon:{
        title:"Starting soon",
        text:"Hi, we are not ready yet, however we are starting soon. Please visit us again in a while."
    },    
    error404:{        
        title:"Page not found!",
        text:""
    }
};

export {
    appCfg,
    APP_LINKS,
    MESSAGES
}
