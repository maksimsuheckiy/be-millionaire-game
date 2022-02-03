import React, {useRef} from "react";
import './AnswerOptionItem.scss';

type Props = {
    text: string;
    letterNumbering: string;
    onSelectAnswer: (answerVariant: string | null) => void;
}

const AnswerOptionItem = (props: Props) => {
    const {text, letterNumbering, onSelectAnswer} = props;
    const answerVariant = useRef<HTMLParagraphElement>(null);

    const handleClick = () => {
        if (answerVariant.current) {
            onSelectAnswer(answerVariant.current.textContent);
        }
    }

    return (
        <div className="answer" onClick={handleClick}>
            <div className="answer__triangle"/>
            <div className="answer-content">
                <span className="answer-content__numbering">{letterNumbering}</span>
                <p className="answer-content__text" ref={answerVariant}>{text}</p>
            </div>
            <div className="answer__triangle"/>
        </div>
    )
}

export default AnswerOptionItem