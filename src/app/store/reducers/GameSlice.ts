import {createAsyncThunk, createSlice, isAnyOf, isRejectedWithValue} from "@reduxjs/toolkit";
import {InitialStateTypes} from "../../models/InitialData";

const initialState: InitialStateTypes = {
    questions: [],
    currentQuestion: {
        "question": '',
        "answer": '',
        "allAnswers": [],
        "amount": null,
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
        setNextAnswer(state, action) {
            state.currentQuestion = state.questions[action.payload];
        },
        setWinningReward(state, action) {
            state.winningReward = action.payload;
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
                    state.questions = action.payload;
                    state.currentQuestion = action.payload[0];
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

export const { setNextAnswer, setWinningReward } = GameSlice.actions;
export default GameSlice.reducer;