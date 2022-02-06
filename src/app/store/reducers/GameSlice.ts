import {createAsyncThunk, createSlice, isAnyOf, isRejectedWithValue, PayloadAction} from "@reduxjs/toolkit";
import {InitialState} from "../../models/InitialDataTypes";
import {AnswerData} from "../../models/ActionsTypes";

const initialState: InitialState = {
    currency: "",
    questions: [],
    currentQuestion: {
        "question": '',
        "answer": '',
        "allAnswers": [],
        "amount": '',
        "id": 1,
    },
    winningReward: '',
    status: '',
    error: null,
}

export const getData = createAsyncThunk(
    'data/questions',
    async () => {
        const response = await fetch('data.json')
        return response.json()
    }
)

export const GameSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setNextAnswer(state, action: PayloadAction<AnswerData>) {
            state.currentQuestion = state.questions[action.payload.id];
            state.winningReward = action.payload.amount;
        },
        setWinning(state, action: PayloadAction<{amount: string}>) {
            state.winningReward = action.payload.amount;
        },
        resetWinning(state) {
            state.winningReward = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                isAnyOf(getData.pending),
                (state) => {
                    state.status = 'loading';
                    state.error = null;
                }
            )
            .addMatcher(
                isAnyOf(getData.fulfilled),
                (state, action) => {
                    state.status = 'success'
                    state.currency = action.payload.currency;
                    state.questions = action.payload.questions;
                    state.currentQuestion = action.payload.questions[0];
                }
            )
            .addMatcher(
                isRejectedWithValue(getData),
                (state, action) => {
                    state.error = action.error
                }
            )
    }
})

export const { setNextAnswer, setWinning, resetWinning } = GameSlice.actions;
export default GameSlice.reducer;