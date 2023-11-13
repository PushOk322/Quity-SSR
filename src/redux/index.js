import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice.js";
import userSignReducer from "./slices/userSIgnSlice.js";
import productsReducer from "./slices/productsSlice.js";

export default configureStore({
    reducer: {
        users: userReducer,
        userSign: userSignReducer,
        products: productsReducer
    },
});
