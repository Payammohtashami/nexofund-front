import { createSlice } from '@reduxjs/toolkit';
import { updateUserData } from './asyncActions';

const initialState = {
    data: {},
    status: "idle",
    isFetching: true,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            // update users data from server
            .addCase(updateUserData.fulfilled, (state, { payload }) => {
                state.status = "fulfilled-update-user";
                state.data = {
                    ...payload,
                    isFetching: false,
                };
            })
            .addCase(updateUserData.pending, (state) => {
                state.status = "pending";
                state.data = state?.data;
                state.data = {
                    ...state.data,
                    isFetching: true,
                };
            })
            .addCase(updateUserData.rejected, (state) => {
                state.status = "rejected";
                state.isFetching = false;
            })
    },
});

export default userSlice.reducer;