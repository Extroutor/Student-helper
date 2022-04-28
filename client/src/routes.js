import {ADMIN_ROUTE, FAQ_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_PAGE_ROUTE, FORUM_ROUTE,PERSONAL_PAGE_ROUTE} from "./utils/consts";
// import Admin from "./pages/Admin";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import Faq from "./pages/Faq";
// import Forum from "./pages/Forum";
// import Personal from "./pages/Personal";

export const authRoutes = [
    // {
    //     path: ADMIN_ROUTE,
    //     Component: Admin
    // },
    // {
    //     path: FORUM_ROUTE,
    //     Component: Forum
    // },
    // {
    //     path: PERSONAL_PAGE_ROUTE,
    //     Component: Personal
    // },
]

export const publicRoutes = [
    {
        path: MAIN_PAGE_ROUTE,
        Component: Main
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: FAQ_ROUTE,
        Component: Faq
    },
]