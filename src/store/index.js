import { configureStore } from '@reduxjs/toolkit';
import accountSlice from './accountSlice';
import exchangeOfficeSlice from './exchangeOfficeSlice';

const store = configureStore({
    reducer: {
        account: accountSlice,
        exchangeOffice: exchangeOfficeSlice
    }
});

export default store;