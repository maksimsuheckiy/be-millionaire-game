import React from "react";
import {useHistory} from "react-router";
import Button from "../../components/Button/Button";
import hand from '../../../assets/hand.png';
import './GameStart.scss';

const GameStart = () => {
    const history = useHistory();

    const handleClickStart = () => {
        history.push({
            pathname: '/game'
        });
    }

    return (
        <div className="wrapper">
            <div className="container">
                <div className="image-box">
                    <img src={hand} alt="Hand" className="image-box__picture"/>
                </div>
                <div className="content">
                    <p className="content__desc">Who wants to be a millionaire?</p>
                    <Button text="Start" onClick={handleClickStart}/>
                </div>
            </div>
        </div>
    )
}

export default GameStart