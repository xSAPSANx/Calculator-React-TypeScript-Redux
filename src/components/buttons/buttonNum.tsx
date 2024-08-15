import './buttonNum.scss'

type propsBatNum = {
	num: number
}

function BatNum(props: propsBatNum) {
	return <button className='buttonNum'>{props.num}</button>
}

export default BatNum
