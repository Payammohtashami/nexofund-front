import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateUserData = createAsyncThunk("update-user", async (data) => {
    try {
        return {
            user_name: 'Payam Mohtashami',
            fisrt_name: 'Payam',
            last_name: 'Mohtashami',
            ...data
        };
    } catch (error) {
        console.log({error});
    };
});