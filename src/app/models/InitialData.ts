export type questionItem = {
    "question": string,
    "answer": string,
    "allAnswers": Array<string>,
    "amount": number | null,
    "id": number
}

export interface InitialStateTypes {
    questions: Array<questionItem>,
    status: string,
    error: any,
    winningReward: string,
    currentQuestion: questionItem
}