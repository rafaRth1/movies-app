import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loadingAuth: false,
};

export const authSlice = createSlice({
	name: 'movieReducer',
	initialState,
	reducers: {
		loadingTest(state) {
			return {
				...state,
				loadingAuth: true,
			};
		},
	},
});

export const { loadingTest } = authSlice.actions;
