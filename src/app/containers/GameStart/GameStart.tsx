import React from "react";
import {useHistory} from "react-router";
import Button from "../../components/Button/Button";
import hand from '../../../assets/hand.png';
import styles from './GameStart.module.scss';

const GameStart = () => {
    const history = useHistory();

    const handleClickStart = () => {
        history.push({
            pathname: '/game'
        });
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <img src={hand} alt="Hand" className={styles.image}/>
                <div className={styles.content}>
                    <p className={styles.content__desc}>Who wants to be a millionaire?</p>
                    <Button text="Start" onClick={handleClickStart}/>
                </div>
            </div>
        </div>
    )
}

export default GameStart