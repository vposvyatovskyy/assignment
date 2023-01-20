import { createSlice } from '@reduxjs/toolkit';
const initialOfficeState = {
    officeBank: {
        USD: {
            unit: null,
            sellPrice: null
        },
        GBP: {
            unit: null,
            sellPrice: null
        },
        EUR: {
            unit: null,
            sellPrice: null
        },
        CZK: {
            unit: null,
            sellPrice: null
        },
        RUB: {
            unit: null,
            sellPrice: null
        },
        CHF: {
            unit: null,
            sellPrice: null
        }
    },
};

const accountSlice = createSlice({
    name: 'office',
    initialState: initialOfficeState,
    reducers: {
        buy(state) {
            
        },
        sell(state) {
            
        }
    }
})
export const exchangeOfficeActions = exchangeOffice.actions;
export default exchangeOfficeSlice.reducer;