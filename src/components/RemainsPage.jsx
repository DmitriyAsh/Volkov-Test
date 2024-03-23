import cl from '../styles/RemainsPage.module.css';
import RemainsTable from './RemainsTable';
import { Link } from 'react-router-dom';
import { useUserStore } from '../store/user';
import { useGoodsStore } from '../store/goodsValue';

const RemainsPage = () => {
	const { goodsData, setGoodsData } = useGoodsStore();

	const { userData } = useUserStore();

	const handleQuantity = (productName, quantity) => {
		const exist = goodsData.findIndex((i) => i.productName === productName);
		if (exist !== -1) {
			goodsData[exist].quantity += quantity;
			setGoodsData(goodsData);
		}
	};

	return (
		<div className={cl.remains_page}>
			<div className={cl.user_info}>
				{' '}
				Текущий пользователь: {userData}
			</div>
			<Link to='/' className={cl.exit_button}>
				Выход
			</Link>
			<table className={cl.remains_table}>
				<thead>
					<tr>
						<th className={cl.remains_th}>Название товара</th>
						<th className={cl.remains_th}>Ингредиент</th>
						<th className={cl.remains_th}>
							Количество готового продукта
						</th>
						<th className={cl.remains_th}>
							Продаж за текущий день
						</th>
						<th className={cl.remains_th}>Текущий остаток</th>
					</tr>
				</thead>
				{goodsData.map((i) => (
					<RemainsTable
						productName={i.productName}
						ingridient1={i.ingridient1}
						ingridient2={i.ingridient2}
						quantity={i.quantity}
						salesForCurrentDay={i.salesForCurrentDay}
						currentBalance={i.currentBalance}
						key={i.id}
						onQuantityChange={handleQuantity}
					/>
				))}
			</table>
		</div>
	);
};

export default RemainsPage;
