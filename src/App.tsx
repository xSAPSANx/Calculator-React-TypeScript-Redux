import { useState } from 'react'
import { useAppSelector, useAppDispatch } from './redux/hooks'

import './App.scss'
import ButNum from './components/buttons/num'
import ButMath from './components/buttons/math'
import ClearButton from './components/buttons/clear'
import Equal from './components/buttons/equal'
import ModalContent from './components/modal'
import ButHistory from './components/buttons/history'
import { setScreen, equalScreen } from './redux/slices/calcSlice'
import { setHistory } from './redux/slices/historySlice'

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

	function handleClickClear() {
		dispatch(equalScreen(''))
	}

	return (
		<>
			<div className={active ? 'modal active' : 'modal'}>
				<ModalContent num={0} historyArr={historyArr} />
				<ModalContent num={1} historyArr={historyArr} />
				<ModalContent num={2} historyArr={historyArr} />
				<ModalContent num={3} historyArr={historyArr} />
				<ModalContent num={4} historyArr={historyArr} />
				<ModalContent num={5} historyArr={historyArr} />
				<ModalContent num={6} historyArr={historyArr} />
				<ModalContent num={7} historyArr={historyArr} />
				<ModalContent num={8} historyArr={historyArr} />
				<ModalContent num={9} historyArr={historyArr} />
			</div>
			<div className='calcBox'>
				<div className='calcScreen'>{screen}</div>
				<div className='specButton'>
					<ButHistory active={active} click={clickHistory} />
					<ClearButton click={handleClickClear} />
				</div>
				<div className='allButton'>
					<div className='numGrid'>
						<ButNum num={1} click={handleClick} />
						<ButNum num={2} click={handleClick} />
						<ButNum num={3} click={handleClick} />
						<ButNum num={4} click={handleClick} />
						<ButNum num={5} click={handleClick} />
						<ButNum num={6} click={handleClick} />
						<ButNum num={7} click={handleClick} />
						<ButNum num={8} click={handleClick} />
						<ButNum num={9} click={handleClick} />
						<ButNum num={0} click={handleClick} />
						<ButNum num={'.'} click={handleClick} />
					</div>
					<div className='mathColumn'>
						<ButMath symbol={'+'} click={handleClick} />
						<ButMath symbol={'-'} click={handleClick} />
						<ButMath symbol={'*'} click={handleClick} />
						<ButMath symbol={'/'} click={handleClick} />
						<Equal symbol={'='} click={handleClickEqual} />
					</div>
				</div>
			</div>
		</>
	)
}

export default App
