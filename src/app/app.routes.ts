import { Routes } from '@angular/router';
import { About } from './about/about';
import { Staff } from './staff/staff';
import { Content } from './content/content';
import { Offers } from './offers/offers';
import { Articles } from './articles/articles';
import { Home } from './home/home';
import { Login } from './login/login';
import { Signup } from './signup/signup';


export const routes: Routes = [
    {
        path: "about",
        component:About
    },
    {
        path: "staff",
        component: Staff
    },
    {
        path: "content",
        component: Content
    },
    {
        path: "offers",
        component: Offers
    },{
        path: "articles",
        component: Articles
    },
    {
        path: "home",
        component: Home
    },{
        path:"login",
        component: Login
    },
    {
        path: "signup",
        component: Signup
    }
];
