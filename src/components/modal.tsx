import './modal.scss'

type propsModal = {
	active: boolean
	setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = (props: propsModal) => {
	return (
		<div className={props.active ? 'modal active' : 'modal'}>
			<button className='modalContent'>123213</button>
		</div>
	)
}

export default Modal
