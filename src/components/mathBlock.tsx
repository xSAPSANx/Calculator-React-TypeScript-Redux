import ButMath from './buttons/mathbutton'
import Equal from './buttons/equal'

type propsMath = {
	handleClick: Function
	handleClickEqual: Function
}

function MathBlock(props: propsMath) {
	return (
		<div className='mathColumn'>
			<ButMath symbol={'+'} click={props.handleClick} />
			<ButMath symbol={'-'} click={props.handleClick} />
			<ButMath symbol={'*'} click={props.handleClick} />
			<ButMath symbol={'/'} click={props.handleClick} />
			<Equal symbol={'='} click={props.handleClickEqual} />
		</div>
	)
}

export default MathBlock
