import {classNames} from "shared/lib/helpers/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import React from "react";
import {useTheme} from "app/provider/ThemeProvider";
import {Button} from "shared/ui/Button";
import SvgThemeSwitcher from 'shared/assets/ic-theme-switcher.svg'
import {Variant} from "shared/ui/Button/ui/Button";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const {toggleTheme} = useTheme()

    return (
            <Button onClick={toggleTheme} variant={Variant.EMPTY} className={classNames(cls.ThemeSwitcher, {}, [className])}>
                <SvgThemeSwitcher className={classNames(cls.icon)}/>
            </Button>
    );
};