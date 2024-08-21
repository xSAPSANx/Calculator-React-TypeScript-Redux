import ButNum from './buttons/num'

type propsNum = {
	handleClick: Function
}

function numBlock(props: propsNum) {
	return (
		<div className='numGrid'>
			<ButNum num={1} click={props.handleClick} />
			<ButNum num={2} click={props.handleClick} />
			<ButNum num={3} click={props.handleClick} />
			<ButNum num={4} click={props.handleClick} />
			<ButNum num={5} click={props.handleClick} />
			<ButNum num={6} click={props.handleClick} />
			<ButNum num={7} click={props.handleClick} />
			<ButNum num={8} click={props.handleClick} />
			<ButNum num={9} click={props.handleClick} />
			<ButNum num={'.'} click={props.handleClick} />
			<ButNum num={0} click={props.handleClick} />
		</div>
	)
}

export default numBlock
