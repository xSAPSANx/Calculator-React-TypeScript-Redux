import './equal.scss'

type propsEqual = {
	symbol: string
	click: Function
}

function Equal(props: propsEqual) {
	return (
		<button className='buttonMath buttonEqual' onClick={() => props.click()}>
			{props.symbol}
		</button>
	)
}

export default Equal
