import './math.scss'

type propsButMath = {
	symbol: string
	click: Function
}

function ButMath(props: propsButMath) {
	return (
		<button className='buttonMath' onClick={() => props.click(props.symbol)}>
			{props.symbol}
		</button>
	)
}

export default ButMath
