import { createSlice } from '@reduxjs/toolkit'

type TypeState = {
	historyArr: string[]
}

let initialState: TypeState = {
	historyArr: [],
}

const historySlice = createSlice({
	name: 'historyChange',
	initialState,
	reducers: {
		setHistory(state, action) {
			state.historyArr.push(action.payload)
		},
		changeFirst(state) {
			state.historyArr.shift()
		},
	},
})

export const { setHistory, changeFirst } = historySlice.actions

export default historySlice.reducer
