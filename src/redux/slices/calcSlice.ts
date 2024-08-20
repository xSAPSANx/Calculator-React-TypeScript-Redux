import { createSlice } from '@reduxjs/toolkit'

type TypeState = {
	screen: string
}

const initialState: TypeState = {
	screen: '',
}

const screenSlice = createSlice({
	name: 'screenChange',
	initialState,
	reducers: {
		setScreen(state, action) {
			state.screen += action.payload
		},
		equalScreen(state, action) {
			state.screen = action.payload
		},
	},
})

export const { setScreen, equalScreen } = screenSlice.actions

export default screenSlice.reducer
