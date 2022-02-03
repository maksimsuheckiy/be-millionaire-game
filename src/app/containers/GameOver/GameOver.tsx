import React from "react";
import {useHistory} from "react-router";
import hand from "../../../assets/hand.png";
import Button from "../../components/Button/Button";
import {useAppSelector} from "../../store/hooks/redux";
import './GameOver.scss';

const GameOver = () => {
    const history = useHistory();
    const winningAmount = useAppSelector(state => state.data.winningReward);

    const handleClickStart = () => {
        history.goBack();
    }

    return (
        <div className="winning-wrapper">
            <div className="winning-container">
                <div className="winning-container__image-box">
                    <img src={hand} alt="Hand" className="image-box__picture"/>
                </div>
                <div className="content">
                    <p className="content__title">
                        {winningAmount && 'Total score:'}
                    </p>
                    <p className="content__subtitle">
                        {winningAmount ? `$${winningAmount} earned` : 'Click on the button to start the game.'}
                    </p>
                    <Button text={winningAmount ? 'Try again' : 'Start'} onClick={handleClickStart}/>
                </div>
            </div>
        </div>
    )
}

export default GameOver