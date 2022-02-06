import React, {SetStateAction, Dispatch} from "react";
import cls from "classnames";
import styles from './BurgerMenu.module.scss';

type Props = {
    onSetActive: Dispatch<SetStateAction<boolean>>;
    isActive: boolean;
}

const BurgerMenu = (props: Props) => {
    const {onSetActive, isActive} = props;

    return (
        <div className={styles.burger} onClick={() => onSetActive(!isActive)}>
            <div className={cls(`${styles.btn}`, {[styles.close]: isActive})}/>
        </div>
    )
};

export default BurgerMenu