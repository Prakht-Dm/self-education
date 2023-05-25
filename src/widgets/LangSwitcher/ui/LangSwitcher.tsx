import {classNames} from "shared/lib/helpers/classNames/classNames";
import cls from './LangSwitcher.module.scss'
import {Button} from "shared/ui/Button";
import React from "react";
import {useTranslation} from "react-i18next";

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const { i18n } = useTranslation()

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (
        <Button onClick={changeLanguage} children={i18n.language}/>
    );
};