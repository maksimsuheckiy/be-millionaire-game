import React from "react";
import styles from './RewardItem.module.scss';
import cls from "classnames";

type Props = {
    text: string;
    isActive: boolean;
    isDisabled: boolean;
}

const RewardItem = (props: Props) => {
    const {text, isActive, isDisabled} = props;

    return (
        <div className={cls(`${styles.box}`, {[styles.active]: isActive})}>
            <div className={cls(`${styles.triangle}`, {[styles.active]: isActive})}/>
            <div className={cls(`${styles.text}`, {[styles.active]: isActive}, {[styles.disabled]: isDisabled})}>
                {text}
            </div>
            <div className={cls(`${styles.triangle}`, {[styles.active]: isActive})}/>
        </div>
    )
}

export default RewardItem