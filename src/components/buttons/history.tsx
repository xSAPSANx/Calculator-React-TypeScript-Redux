type propsHistory = {
	active: boolean
	click: Function
}

function ButHistory(props: propsHistory) {
	return (
		<button className='historyButton' onClick={() => props.click(props.active)}>
			History
		</button>
	)
}

export default ButHistory
