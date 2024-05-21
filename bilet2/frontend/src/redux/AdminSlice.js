import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    admin:[]
}

export const adminSlice = createSlice({
    name:"admin",
    initialState,
    reducers:{  
        deleteMenu: (state,action) =>{
            state.admin = [...state.admin].filter((elem) =>elem._id !== action.payload._id)
        }
    }
})

export const {deleteMenu} = adminSlice.actions
export default adminSlice.reducer