import React, {useRef} from "react";
import styles from './AnswerItem.module.scss';

type Props = {
    text: string;
    letterNumbering: string;
    onSelectAnswer: (answerVariant: string | null) => void;
}

const AnswerItem = (props: Props) => {
    const {text, letterNumbering, onSelectAnswer} = props;
    const answerVariant = useRef<HTMLParagraphElement>(null);

    const handleClick = () => {
        if (answerVariant.current) {
            onSelectAnswer(answerVariant.current.textContent);
        }
    }

    return (
        <div className={styles.box} onClick={handleClick}>
            <div className={styles.triangle}/>
            <div className={styles.content}>
                <span className={styles.numbering}>{letterNumbering}</span>
                <p className={styles.text} ref={answerVariant}>{text}</p>
            </div>
            <div className={styles.triangle}/>
        </div>
    )
}

export default AnswerItem