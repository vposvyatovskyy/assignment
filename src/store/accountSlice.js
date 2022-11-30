import {createSlice} from '@reduxjs/toolkit';
const initialAccountState = {
    name: "John Doe",
    wallet: {
        USD: '0',
        GBP: '0',
        EUR: '0',
        CZK: '0',
        CHF: '0'
    },
    isAuth: false
};

const accountSlice = createSlice({
    name: 'account',
    initialState: initialAccountState,
    reducers: {
        login(state) {
            console.log('state changed to true');
            state.isAuth = true;
        },
        logout(state) {
            console.log('state changed to false');
            state.isAuth = false;
        }
    }
})
export const accountActions = accountSlice.actions;
export default accountSlice.reducer;