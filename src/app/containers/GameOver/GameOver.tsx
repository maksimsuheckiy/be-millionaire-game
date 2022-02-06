import React from "react";
import {useHistory} from "react-router";
import hand from "../../../assets/hand.png";
import Button from "../../components/Button/Button";
import {useAppSelector} from "../../store/hooks/redux";
import styles from './GameOver.module.scss';
import {resetWinning} from "../../store/reducers/GameSlice";
import {useDispatch} from "react-redux";

const GameOver = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const winningAmount = useAppSelector(state => state.data.winningReward);
    const currency = useAppSelector(state => state.data.currency);

    const handleClickStart = () => {
        history.goBack();
        dispatch(resetWinning());
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <img src={hand} alt="Hand" className={styles.image}/>
                <div className={styles.content}>
                    <p className={styles.title}>
                        {winningAmount && 'Total score:'}
                    </p>
                    <p className={styles.subtitle}>
                        {winningAmount ? `${currency}${winningAmount} earned` : 'Click on the button to start new game'}
                    </p>
                    <Button text={winningAmount ? 'Try again' : 'Start'} onClick={handleClickStart}/>
                </div>
            </div>
        </div>
    )
}

export default GameOver