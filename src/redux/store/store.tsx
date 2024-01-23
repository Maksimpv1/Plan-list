import { configureStore } from "@reduxjs/toolkit";
import { shceduleSlice } from "../reducers/reducure";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer:{
        shcedule: shceduleSlice.reducer,
    }
})

export type storeType = ReturnType<typeof store.getState>

export const useAppSelectortype: TypedUseSelectorHook<storeType> = useSelector;

export type AppDispatch = typeof store.dispatch

export const useAppDispatchtype: TypedUseSelectorHook<AppDispatch> = useDispatch;



