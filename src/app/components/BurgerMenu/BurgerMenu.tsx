import React, {SetStateAction, Dispatch} from "react";
import classNames from "classnames";
import './BurgerMenu.scss';

type Props = {
    onSetActive: Dispatch<SetStateAction<boolean>>;
    isActive: boolean;
}

const BurgerMenu = (props: Props) => {
    const {onSetActive, isActive} = props;

    return (
        <div className="burger" onClick={() => onSetActive(!isActive)}>
            <div className={classNames("burger__btn", {'burger__btn--close': isActive})}/>
        </div>
    )
};

export default BurgerMenu