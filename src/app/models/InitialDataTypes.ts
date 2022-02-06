export type questionItem = {
    "question": string,
    "answer": string,
    "allAnswers": Array<string>,
    "amount": string,
    "id": number
}

export interface InitialState {
    currency: string,
    questions: Array<questionItem>,
    status: string,
    error: any,
    winningReward: string,
    currentQuestion: questionItem
}