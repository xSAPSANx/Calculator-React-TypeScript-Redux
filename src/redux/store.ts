import { configureStore } from '@reduxjs/toolkit'
import calcSlice from './slices/calcSlice'
import historySlice from './slices/historySlice'

export const store = configureStore({
	reducer: {
		calcSlice,
		historySlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
