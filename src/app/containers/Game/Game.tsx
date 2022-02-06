import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";
import classNames from "classnames";
import RewardItem from "../../components/RewardItem/RewardItem";
import AnswerItem from "../../components/AnswerItem/AnswerItem";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import {getData, setNextAnswer, setWinning} from "../../store/reducers/GameSlice";
import {SelectListRewards} from "../../store/selectors/SelectListRewards";
import {useAppSelector} from "../../store/hooks/redux";
import {setLetterNumbering, shuffleArray} from '../../utils';
import styles from './Game.module.scss';

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
        dispatch(getData());
    }, [])

    useEffect(() => {
        const mixedArray = shuffleArray(allAnswers);
        setAnswers(mixedArray);
    }, [allAnswers])

    const handleSelectAnswer = (answerVariant: string | null) => {
        if (answerVariant === answer && id !== allQuestions.length) {
            dispatch(setNextAnswer({id, amount}));
        } else {
            if (id === allQuestions.length) dispatch(setWinning({amount}))
            history.push({pathname: '/game-over'})
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <BurgerMenu onSetActive={setMenuActive} isActive={menuActive}/>
                <div className={styles.inner}>
                    <div className={styles['title-box']}>
                        <p className={styles.title}>{question}</p>
                    </div>
                    <div className={styles.answers}>
                        {answers.map((answer, index) => (
                            <AnswerItem key={index}
                                        text={answer}
                                        letterNumbering={setLetterNumbering(index)}
                                        onSelectAnswer={handleSelectAnswer}/>
                        ))}
                    </div>
                </div>
            </div>
            <div className={classNames(`${styles.aside}`, {[styles.menu]: menuActive})}>
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