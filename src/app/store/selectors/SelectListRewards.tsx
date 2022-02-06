import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../store";

export const SelectListRewards = createSelector(
    (state: RootState) => state.data.questions,
    (state: RootState) => state.data.currency,
    (questions, currency) => {
        return questions.map(question => {
            return `${currency}${question.amount}`
        });
    }
)