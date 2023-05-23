import React from 'react';
import {Link} from 'react-router-dom';
import './styles/index.scss';
import {useTheme} from "app/provider/ThemeProvider/lib/useThemeResult";
import {classNames} from "shared/lib/helpers/classNames/classNames";
import {AppRouter} from "app/provider/router";
import {RouterPath} from "app/provider/router/ui/routeConfig/routeConfig";
import {Navbar} from "widgets/Navbar";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <button onClick={toggleTheme}>TOGGLE</button>
            <AppRouter />
        </div>
    );
};

export default App;
