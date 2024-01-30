// store.js
import { configureStore } from '@reduxjs/toolkit';
import { reducer as headerReducer } from './slices/header';

// 创建 Redux store
const store = configureStore({
    reducer: {
        header: headerReducer,
    },
});

export default store;
