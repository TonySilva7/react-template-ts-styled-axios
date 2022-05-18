import {
	ActionReducerMapBuilder,
	createAsyncThunk,
	createSlice,
	PayloadAction
} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { productService } from '../../services/myExampleService';

export interface IMyState {
	num: number;
	user: UserProps;
	status: 'idle' | 'pending' | 'succeeded' | 'failed';
}

export type UserProps = {
	id: number;
	name: string;
	url: string;
};

const initialState: IMyState = {
	num: 0,
	user: { id: 0, name: '', url: '' },
	status: 'idle',
};

// Thunk Function
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

	extraReducers: (builder: ActionReducerMapBuilder<IMyState>) => {
		builder.addCase(getMyData.fulfilled, (state, action: PayloadAction<any, string>) => {
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
