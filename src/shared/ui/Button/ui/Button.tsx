import {classNames} from "shared/lib/helpers/classNames/classNames";
import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from "react";

export enum Variant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    EMPTY = 'empty'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: string
}

export const Button: FC<ButtonProps> = (props) => {
    const {children, className, variant = Variant.PRIMARY, ...otherProps} = props
    return (
        <button className={classNames(cls.Button, {}, [className, cls[variant]])} {...otherProps}>
            {children}
        </button>
    );
};