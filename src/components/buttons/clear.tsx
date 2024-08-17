import './clear.scss'

type propsButNum = {
	click: Function
}

function ClearButton(props: propsButNum) {
	const handleClickClear = props.click
	return (
		<button className='clearButton' onClick={() => handleClickClear()}>
			Clear
		</button>
	)
}

export default ClearButton
