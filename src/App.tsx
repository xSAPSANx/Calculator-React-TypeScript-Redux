import { useState } from 'react'

import './App.scss'
import ButNum from './components/buttons/num'
import ButMath from './components/buttons/math'
import ClearButton from './components/buttons/clear'
import Equal from './components/buttons/equal'
import Modal from './components/modal'
import ButHistory from './components/buttons/history'

function App() {
	const [screen, setScreen] = useState('')
	const [active, setActive] = useState(true)

	function handleClick(props: string) {
		setScreen(screen + props)
	}

	function clickHistory(props: boolean) {
		setActive(!props)
	}

	function handleClickEqual() {
		setScreen(eval(screen))
	}

	function handleClickClear() {
		setScreen('')
	}

	return (
		<>
			<Modal active={active} setActive={setActive} />
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
						<button onClick={() => setScreen('')}>test</button>
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
