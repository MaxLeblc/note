import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: { editMode: false, darkMode: false },
}

export const modeSlice = createSlice({
    name: 'modes',
    initialState,
    reducers: {
        editMode: (state, { payload }) => {
            state.value.editMode = payload
        },
        darkMode: (state, { payload }) => {
            state.value.darkMode = payload
        },
    }
})

export const { editMode, darkMode } = modeSlice.actions
export default modeSlice.reducer