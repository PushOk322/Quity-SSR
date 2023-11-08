import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice.js";
import userSignReducer from "./slices/userSIgnSlice.js";

export default configureStore({
    reducer: {
        users: userReducer,
        userSign: userSignReducer,
    },
});
