import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isSideBarOpen: true,
    },
    reducers: {
        toggleSidebar: (state)=>{
            state.isSideBarOpen = !state.isSideBarOpen;
        },
        closeSideBar: (state) => {
          state.isSideBarOpen = false;
        },
    },
});


export const {toggleSidebar,closeSideBar} = appSlice.actions;

export default appSlice.reducer;