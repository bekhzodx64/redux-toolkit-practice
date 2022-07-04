import NavBar from './components/NavBar';
import CartContainer from './components/CartContainer';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './components/Modal';

function App() {
	const { cartItems, isLoading } = useSelector((store) => store.cart);
	const { isOpen } = useSelector((store) => store.modal);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(calculateTotals());
	}, [cartItems]);

	useEffect(() => {
		dispatch(getCartItems('random'));
	}, []);

	if (isLoading) {
		return (
			<div className='loading'>
				<h2>Loading ...</h2>
			</div>
		);
	}

	return (
		<main>
			{isOpen && <Modal />}
			<NavBar />
			<CartContainer />
		</main>
	);
}
export default App;
