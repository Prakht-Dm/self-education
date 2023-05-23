import React from 'react';
import './styles/index.scss';
import {useTheme} from "app/provider/ThemeProvider/lib/useThemeResult";
import {classNames} from "shared/lib/helpers/classNames/classNames";
import {AppRouter} from "app/provider/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className={'content-page'}>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;
