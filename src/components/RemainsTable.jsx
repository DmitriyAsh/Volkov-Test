import cl from '../styles/RemainsTable.module.css';

const RemainsTable = ({
	productName,
	ingridient,
	quantity,
	salesForCurrentDay,
	currentBalance,
}) => {
	return (
		<tbody>
			<tr className={cl.remains_tr}>
				<td className={cl.remains_td}>{productName}</td>
				<td className={cl.remains_td}>{ingridient}</td>
				<td className={cl.remains_td}>{quantity}</td>
				<td className={cl.remains_td}>{salesForCurrentDay}</td>
				<td className={cl.remains_td}>{currentBalance}</td>
			</tr>
		</tbody>
	);
};

export default RemainsTable;
