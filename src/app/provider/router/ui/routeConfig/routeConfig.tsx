import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";


export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
}

export const routerConfig: RouteProps[] = [
    {
        path: RouterPath.main,
        element: <MainPage />
    },
    {
        path: RouterPath.about,
        element: <AboutPage />
    }
]