import './num.scss'

type propsButNum = {
	num: number | string
	click: Function
}

function ButNum(props: propsButNum) {
	let stringNum: string = String(props.num)
	let pixels
	if (props.num === 0) {
		pixels = {
			width: '130px',
		}
	}
	return (
		<button className='buttonNum' style={pixels} onClick={() => props.click(stringNum)}>
			{props.num}
		</button>
	)
}

export default ButNum
