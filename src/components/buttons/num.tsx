import './num.scss'

type propsButNum = {
	num: number
	click: Function
}

function ButNum(props: propsButNum) {
	let stringNum: string = String(props.num)
	return (
		<button className='buttonNum' onClick={() => props.click(stringNum)}>
			{props.num}
		</button>
	)
}

export default ButNum
