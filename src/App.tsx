import './App.scss'
import BatNum from './components/buttons/buttonNum'

function App() {
	return (
		<>
			<div className='calcBox'>
				<div className='calcScreen'></div>
				<div className='numGrid'>
					<BatNum num={1} />
					<BatNum num={2} />
					<BatNum num={3} />
					<BatNum num={4} />
					<BatNum num={5} />
					<BatNum num={6} />
					<BatNum num={7} />
					<BatNum num={8} />
					<BatNum num={9} />
					<BatNum num={0} />
				</div>
			</div>
		</>
	)
}

export default App
