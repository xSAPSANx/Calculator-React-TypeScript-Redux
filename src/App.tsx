import { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from './redux/hooks'

import './App.scss'
import NumBlock from './components/numBlock'
import MathBlock from './components/mathBlock'
import ClearButton from './components/buttons/clear'
import ModalBlock from './components/modalBlock'
import ButHistory from './components/buttons/history'
import { setScreen, equalScreen } from './redux/slices/calcSlice'
import { setHistory, changeFirst } from './redux/slices/historySlice'

function App() {
	const dispatch = useAppDispatch()
	const screen = useAppSelector(state => state.calcSlice.screen)
	const historyArr = useAppSelector(state => state.historySlice.historyArr)

	const [active, setActive] = useState(true)

	function handleClick(props: string) {
		dispatch(setScreen(props))
	}

	function clickHistory(props: boolean) {
		setActive(!props)
	}

	function handleClickEqual() {
		dispatch(equalScreen(eval(screen)))
		dispatch(setHistory(screen + '=' + eval(screen)))
	}
	useEffect(() => {
		if (historyArr[10] !== undefined) {
			dispatch(changeFirst())
		}
	}, [historyArr])

	function handleClickClear() {
		dispatch(equalScreen(''))
	}

	return (
		<>
			<div className={active ? 'modal active' : 'modal'}>
				<ModalBlock />
			</div>
			<div className='calcBox'>
				<div className='calcScreen'>{screen}</div>
				<div className='specButton'>
					<ButHistory active={active} click={clickHistory} />
					<ClearButton click={handleClickClear} />
				</div>
				<div className='allButton'>
					<NumBlock handleClick={handleClick} />
					<MathBlock handleClick={handleClick} handleClickEqual={handleClickEqual} />
				</div>
			</div>
		</>
	)
}

export default App
