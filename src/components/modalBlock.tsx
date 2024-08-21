import { useAppSelector } from '../redux/hooks'
import ModalContent from '../components/modal'

function modalBlock() {
	const historyArr = useAppSelector(state => state.historySlice.historyArr)
	return (
		<>
			<ModalContent num={0} historyArr={historyArr} />
			<ModalContent num={1} historyArr={historyArr} />
			<ModalContent num={2} historyArr={historyArr} />
			<ModalContent num={3} historyArr={historyArr} />
			<ModalContent num={4} historyArr={historyArr} />
			<ModalContent num={5} historyArr={historyArr} />
			<ModalContent num={6} historyArr={historyArr} />
			<ModalContent num={7} historyArr={historyArr} />
			<ModalContent num={8} historyArr={historyArr} />
			<ModalContent num={9} historyArr={historyArr} />
		</>
	)
}

export default modalBlock
