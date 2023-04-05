import { configureStore } from "@reduxjs/toolkit";

import toggleSlice from "./toggleSlice";

const store = configureStore({
    reducer:{
        app: toggleSlice,
    }
});

export default store;