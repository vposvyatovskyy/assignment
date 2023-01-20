import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
const initialAccountState = {
    name: "John Doe",
    wallet: {
        USD: null,
        GBP: null,
        EUR: null,
        CZK: null,
        CHF: null,
        RUB: null
    },
    isAuth: false
};

const accountSlice = createSlice({
    name: 'account',
    initialState: initialAccountState,
    reducers: {
        login(state, action) {
            //localStorage.setItem("isAuth", true);
            console.log('state changed to true');
            state.isAuth = localStorage.getItem("isAuth");
        },
        logout(state) {
            //localStorage.setItem("isAuth", false);
            console.log('state changed to false');
            state.isAuth = localStorage.getItem("isAuth");
        },
        buy(state, action) {
            console.log("Buy action performed");
            switch (action.payload.code) {
                case 'USD': {
                    state.wallet.USD += action.payload.unit;
                }
                case 'EUR': {
                    state.wallet.EUR += action.payload.unit;
                }
                case 'GBP': {
                    state.wallet.GBP += action.payload.unit;
                }
                case 'CZK': {
                    state.wallet.CZK += action.payload.unit;
                }
                case 'RUB': {
                    state.wallet.RUB += action.payload.unit;
                }
                case 'CHF': {
                    state.wallet.CHF += action.payload.unit;
                }
            }
        },
        sell(state, action) {
            switch (action.payload.code) {
                case 'USD': {
                    if(state.wallet.USD >= action.payload.unit){
                        state.wallet.USD -= action.payload;
                    }
                }
                case 'EUR': {
                    if(state.wallet.EUR >= action.payload.unit){
                        state.wallet.EUR -= action.payload.unit;
                    }
                }
                case 'GBP': {
                    if(state.wallet.GBP >= action.payload.unit){
                        state.wallet.GBP -= action.payload.unit;
                    }
                }
                case 'CZK': {
                    if(state.wallet.CZK >= action.payload.unit){
                        state.wallet.CZK -= action.payload.unit;
                    }
                }
                case 'RUB': {
                    if(state.wallet.RUB >= action.payload.unit){
                        state.wallet.RUB -= action.payload.unit;
                    }
                }
                case 'CHF': {
                    if(state.wallet.CHF >= action.payload.unit){
                        state.wallet.CHF -= action.payload.unit;
                    }
                }
            }
        }
    }
})
export const accountActions = accountSlice.actions;
export default accountSlice.reducer;