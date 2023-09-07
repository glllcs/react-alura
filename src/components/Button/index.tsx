import React from "react";
import style from './Button.module.scss'

interface Props {
    children: string
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void
}

export default class Button extends React.Component<Props> {
    render() {
        const { type = "button" } = this.props;
        return (
            <button 
                type={type}
                className={style.button}
                onClick={this.props.onClick}
            >
                {this.props.children}
            </button>
        )
    }
}