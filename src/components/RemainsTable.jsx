import { useState } from 'react';
import cl from '../styles/RemainsTable.module.css';
import Modal from './Modal';

const RemainsTable = ({
	productName,
	ingridient1,
	ingridient2,
	quantity,
	salesForCurrentDay,
	currentBalance,
	onQuantityChange,
}) => {
	const [modal, setModal] = useState(false);
	const [newQuantity, setNewQuantity] = useState('');

	const handleQuantityChange = (value) => {
		setNewQuantity(value);
		onQuantityChange(productName, value);
	};

	return (
		<tbody>
			<tr className={cl.remains_tr}>
				<td className={cl.remains_td}>
					<button
						className={cl.product_name_button}
						onClick={() => setModal(true)}
					>
						{productName}
					</button>
				</td>
				<td className={cl.remains_td}>
					{ingridient1}, {ingridient2}
				</td>
				<td className={cl.remains_td}>{quantity + +newQuantity}</td>
				<td className={cl.remains_td}>{salesForCurrentDay}</td>
				<td className={cl.remains_td}>{currentBalance}</td>
			</tr>
			<Modal
				visible={modal}
				setVisible={setModal}
				ingridient1={ingridient1}
				ingridient2={ingridient2}
				quantity={quantity}
				onChange={handleQuantityChange}
			/>
		</tbody>
	);
};

export default RemainsTable;
