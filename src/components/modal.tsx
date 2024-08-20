import './modal.scss'

type propsModal = {
	num: number
	historyArr: string[]
}

const ModalContent = (props: propsModal) => {
	return <div className='modalContent'>{props.historyArr[props.num]}</div>
}

export default ModalContent
