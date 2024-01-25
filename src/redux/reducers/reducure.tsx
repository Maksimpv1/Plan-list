import { createSlice } from "@reduxjs/toolkit"

interface IinitialState {
    isAuth:boolean,
}

const initialState:IinitialState = {
    isAuth:false,
}

export const shceduleSlice = createSlice({
    name:"shcedule",
    initialState,
    reducers:{
        setAuth:(state)=>{
            if( state.isAuth ){
            state.isAuth = false
            console.log(false)
            }else {
                state.isAuth = true                
                console.log(true)
            }
        },
    }
})

export const { setAuth } = shceduleSlice.actions

export default shceduleSlice.reducer