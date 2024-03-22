import { useState } from 'react';
import cl from '../styles/Modal.module.css';

const Modal = ({ visible, setVisible, ingridient1, ingridient2, onChange }) => {
	const rootClasses = [cl.myModal];
	const [inputValue, setInputValue] = useState(0);

	if (visible) {
		rootClasses.push(cl.active);
	}

	const handleQuantityChange = () => {
		onChange(inputValue);
	};

	const getValueFromInputAndChangeVisible = () => {
		setVisible(false);
		handleQuantityChange();
	};

	return (
		<div
			className={rootClasses.join(' ')}
			onClick={() => setVisible(false)}
		>
			<div
				className={cl.myModalContent}
				onClick={(e) => e.stopPropagation()}
			>
				<div className={cl.modal_ingridient_block}>
					<div className={cl.ingridient}>Выберите Ингредиент</div>
					<select className={cl.modal_select}>
						<option>{ingridient1}</option>
						<option>{ingridient2}</option>
					</select>
				</div>
				<div>
					<div className={cl.quantity}>
						Введите количество приготовленного продукта
					</div>
					<input
						className={cl.modal_input}
						type='text'
						value={inputValue}
						onChange={(e) => setInputValue(Number(e.target.value))}
					/>
				</div>
				<button
					className={cl.modal_button}
					onClick={() => getValueFromInputAndChangeVisible()}
				>
					Подтвердить
				</button>
			</div>
		</div>
	);
};

export default Modal;
