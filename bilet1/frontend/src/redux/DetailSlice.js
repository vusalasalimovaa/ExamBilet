import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    detail:[]
}

export const detailSlice = createSlice({
    name:"detail",
    initialState,
    reducers:{
        addToDetail: (state,action) => {
            state.detail = state.detail.find((elem) => elem._id == action.payload.id)
        }
    }
})

export const {addToDetail} = detailSlice.actions
export default detailSlice.reducer