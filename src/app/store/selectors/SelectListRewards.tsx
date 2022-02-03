import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../store";

export const SelectListRewards = createSelector(
    (state: RootState) => state.data.questions,
    (questions) => {
        return questions.map(question => `$${question.amount}`);
    }
)