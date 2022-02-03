import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";
import RewardItem from "../../components/RewardItem/RewardItem";
import AnswerOptionItem from "../../components/AnswerOptionItem/AnswerOptionItem";
import {getData, setNextAnswer, setWinningReward} from "../../store/reducers/GameSlice";
import {SelectListRewards} from "../../store/selectors/SelectListRewards";
import {useAppSelector} from "../../store/hooks/redux";
import {setLetterNumbering, shuffleArray} from '../../utils';
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import classNames from "classnames";
import './Game.scss';

const Game = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [menuActive, setMenuActive] = useState<boolean>(false);
    const [answers, setAnswers] = useState<string[]>([]);
    const listRewards = useAppSelector(SelectListRewards);
    const allQuestions = useAppSelector(state => state.data.questions);
    const currentQuestion = useAppSelector(state => state.data.currentQuestion);
    const {question, amount, answer, allAnswers, id} = currentQuestion;

    useEffect(() => {
        dispatch(getData())
    }, [])

    useEffect(() => {
        const mixedArray = shuffleArray(allAnswers);
        setAnswers(mixedArray)
    }, [currentQuestion])

    const handleSelectAnswer = (answerVariant: string | null) => {
        if (answerVariant === answer && id !== allQuestions.length) {
            dispatch(setNextAnswer(id))
        } else {
            dispatch(setWinningReward(amount));
            history.push({pathname: '/game-over'})
        }
    }

    return (
        <div className="game-wrapper">
            <div className="main">
                <BurgerMenu onSetActive={setMenuActive} isActive={menuActive}/>
                <div className="question-box">
                    <p className="question-box__text">{question}</p>
                </div>
                <div className="answer-container">
                    {answers.map((answer, index) => (
                        <AnswerOptionItem key={index}
                                          text={answer}
                                          letterNumbering={setLetterNumbering(index)}
                                          onSelectAnswer={handleSelectAnswer}/>
                    ))}
                </div>
            </div>
            <div className={classNames("aside", {'menu-content': menuActive})}>
                {listRewards.map((reward, index) => (
                    <RewardItem key={index}
                                text={reward}
                                isActive={id === ++index}
                                isDisabled={index < id}/>
                ))}
            </div>
        </div>
    )
}

export default Game