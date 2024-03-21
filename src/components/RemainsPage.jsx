import cl from '../styles/RemainsPage.module.css';
import RemainsTable from './RemainsTable';

const RemainsPage = () => {
	const chicken = {
		productName: 'Курица гриль',
		ingridient: 'Курица',
		quantity: 145,
		salesForCurrentDay: 54,
		currentBalance: 170,
		id: 0,
	};

	const BBQ = {
		productName: 'Шашлык',
		ingridient: 'Мясо',
		quantity: 75,
		salesForCurrentDay: 54,
		currentBalance: 100,
		id: 1,
	};

	const grilledVegetables = {
		productName: 'Овощи гриль',
		ingridient: 'Овощи',
		quantity: 42,
		salesForCurrentDay: 20,
		currentBalance: 60,
		id: 2,
	};

	const goods = [chicken, BBQ, grilledVegetables];

	console.log(goods);

	return (
		<div className={cl.remains_page}>
			<table className={cl.remains_table}>
				<thead>
					<tr>
						<th className={cl.remains_th}>Название продукта</th>
						<th className={cl.remains_th}>Ингридиент</th>
						<th className={cl.remains_th}>
							Количество готового продукта
						</th>
						<th className={cl.remains_th}>
							Продаж за текущий день
						</th>
						<th className={cl.remains_th}>Текущий остаток</th>
					</tr>
				</thead>
				{goods.map((i) => (
					<RemainsTable
						productName={i.productName}
						ingridient={i.ingridient}
						quantity={i.quantity}
						salesForCurrentDay={i.salesForCurrentDay}
						currentBalance={i.currentBalance}
						key={i.id}
					/>
				))}
			</table>
		</div>
	);
};

export default RemainsPage;
