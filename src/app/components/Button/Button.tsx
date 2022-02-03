import React from 'react'
import './Button.scss';

type Props = {
    text: string;
    onClick: () => void;
}

const Button = (props: Props) => {
    const {text, onClick} = props;
    return <button className="button" onClick={onClick}>{text}</button>
}

export default Button