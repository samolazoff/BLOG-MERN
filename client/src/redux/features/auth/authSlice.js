import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: null,
    isLoading: false,
    status: null
}

export const authSlise  = createSlice({
    name: 'auth',
    initialState,
    reducers: {}
});

export default authSlise.reducer