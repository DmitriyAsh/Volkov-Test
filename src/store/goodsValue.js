import { create } from 'zustand';

export const useGoodsStore = create((set) => ({
	goodsData: [
		{
			productName: 'Курица гриль',
			ingridient1: 'Бедро',
			ingridient2: 'Филе Грудки',
			quantity: 66,
			salesForCurrentDay: 54,
			currentBalance: 170,
			id: 0,
		},
		{
			productName: 'Шашлык',
			ingridient1: 'Свинина',
			ingridient2: 'Говядина',
			quantity: 23,
			salesForCurrentDay: 42,
			currentBalance: 100,
			id: 1,
		},
		{
			productName: 'Овощи гриль',
			ingridient1: 'Баклажаны',
			ingridient2: 'Кабачки',
			quantity: 15,
			salesForCurrentDay: 20,
			currentBalance: 60,
			id: 2,
		},
	],
	setGoodsData: (data) => {
		set({ goodsData: data });
	},
}));
