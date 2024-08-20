import { createSlice } from '@reduxjs/toolkit'

type TypeState = {
	historyArr: string[]
}

const initialState: TypeState = {
	historyArr: [],
}

const historySlice = createSlice({
	name: 'historyChange',
	initialState,
	reducers: {
		setHistory(state, action) {
			state.historyArr.push(action.payload)
		},
	},
})

export const { setHistory } = historySlice.actions

export default historySlice.reducer
