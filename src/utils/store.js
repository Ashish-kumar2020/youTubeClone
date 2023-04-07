import { configureStore } from "@reduxjs/toolkit";

import toggleSlice from "./toggleSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
    reducer:{
        app: toggleSlice,
        search: searchSlice,
        chat: chatSlice,
    },
});

export default store;