import { create } from 'zustand';

export const useGoodsStore = create((set) => ({
	goodsData: null,
	setGoodsData: (data) => {
		set({ goodsData: data });
	},
}));
