import React from 'react';
import {RouterPath} from "app/provider/router/ui/routeConfig/routeConfig";
import {classNames} from "shared/lib/helpers/classNames/classNames";
import cls from './Navbar.module.scss'
import {AppLink} from "shared/ui/AppLink";
import {AppLinkTheme} from "shared/ui/AppLink/ui/AppLink";
import {useTranslation} from "react-i18next";


interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const [t] = useTranslation()
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RouterPath.main} className={cls.mainLink}>{t('Главная')}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RouterPath.about}>{t('О сайте')}</AppLink>
            </div>

        </div>
    );
};
