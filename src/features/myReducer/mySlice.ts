import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { productService } from '../../services/myExampleService';

export interface IMyState {
	num: number;
	user: {
		id: number;
		name: string;
		url: string;
	};
	status: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: IMyState = {
	num: 0,
	user: { id: 0, name: '', url: '' },
	status: 'idle',
};

// Faz requisição para API
export const getMyData = createAsyncThunk('games', async (url: string) => {
	const response = await productService.fetchMyData(url);
	return response.data;
});

export const mySlice = createSlice({
	name: 'mySlice',
	initialState,

	reducers: {
		handleIncrement: (state) => {
			state.num += 1;
		},
		handleDecrement: (state) => {
			state.num -= 1;
		},
	},

	extraReducers: (builder) => {
		builder.addCase(getMyData.fulfilled, (state, action: PayloadAction<any, any>) => {
			// state.user = action.payload.data.login;
			state.user = action.payload;
			state.status = 'succeeded';
		});

		builder.addCase(getMyData.rejected, (state, action) => {
			state.status = 'failed';
		});

		builder.addCase(getMyData.pending, (state, action) => {
			state.status = 'pending';
		});
	},
});

export const { handleIncrement, handleDecrement } = mySlice.actions;

export const selectMyNum = (state: RootState) => state.myReducer.num;
export const selectUser = (state: RootState) => state.myReducer.user;
export const selectStatus = (state: RootState) => state.myReducer.status;

export default mySlice.reducer;
