import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from 'nanoid'

const initialState = {
    value: [],
}

export const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state, { payload }) => {
            const newNote = {
                id: nanoid(),
                title: payload.title,
                text: payload.text,
                date: new Date().toLocaleString(),
                position: { x: 0, y: 600 },
                size: payload.size,
            }
            state.value.push(newNote)
        },
        deleteNote: (state, { payload }) => {
            state.value = state.value.filter(note => note.id !== payload)
        },
        editNote: (state, { payload }) => {

            state.value = state.value.map((note) => {
                if (note.id === payload[3]) {
                    return {
                        ...note,
                        title: payload[0],
                        text: payload[1],
                        date: payload[2]
                    }
                } else return note
            })
        },
        positionNote: (state, { payload }) => {
            state.value = state.value.map((note) => {
                if (note.id === payload[1]) {
                    return {
                        ...note,
                        position: payload[0]
                    }
                } else return note
            })
        },
        sizeAreaNote: (state, { payload }) => {
            state.value = state.value.map((note) => {
                if (note.id === payload[1]) {
                    return {
                        ...note,
                        size: payload[0]
                    }
                } else return note
            })
        }
    }
})

export const { addNote, deleteNote, editNote, positionNote, sizeAreaNote } = noteSlice.actions
export default noteSlice.reducer