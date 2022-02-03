import React from "react";
import './RewardItem.scss';
import classNames from "classnames";

type Props = {
    text: string;
    isActive: boolean;
    isDisabled: boolean;
}

const RewardItem = (props: Props) => {
    const {text, isActive, isDisabled} = props;

    return (
        <div className={classNames('reward', {'reward--active': isActive})}>
            <div className={classNames('reward__triangle', {'triangle--active': isActive})}/>
            <div className={classNames('reward-text', {'reward--active': isActive}, {'reward--disabled': isDisabled})}>
                {text}
            </div>
            <div className={classNames('reward__triangle', {'triangle--active': isActive})}/>
        </div>
    )
}

export default RewardItem