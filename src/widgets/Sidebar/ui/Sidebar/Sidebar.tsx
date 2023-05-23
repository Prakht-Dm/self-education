import {classNames} from "shared/lib/helpers/classNames/classNames";
import cls from './Sidebar.module.scss'
import React, {useState} from "react";
import {Button} from "shared/ui/Button";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => setCollapsed(prev => !prev)
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
          <Button onClick={onToggle} children={'Toggle'}/>
            <ThemeSwitcher />
        </div>
    );
};