import React from 'react';
import {Link} from 'react-router-dom';
import './styles/index.scss';
import {useTheme} from "app/provider/ThemeProvider/lib/useThemeResult";
import {classNames} from "shared/lib/helpers/classNames/classNames";
import {AppRouter} from "app/provider/router";
import {RouterPath} from "app/provider/router/ui/routeConfig/routeConfig";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', [], [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={RouterPath.main}>Главная</Link>
            <Link to={RouterPath.about}>О сайте</Link>
            <AppRouter />
        </div>
    );
};

export default App;
