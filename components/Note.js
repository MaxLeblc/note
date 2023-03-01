import styles from '../styles/Note.module.scss'
import Draggable from 'react-draggable'
import { FaTrash } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteNote, editNote, positionNote } from '../reducers/notes'

export default function Note({ note }) {

    const dispatch = useDispatch()

    // edit note & dispatch modifications
    const [editNoteTitle, setEditNoteTitle] = useState(note.title)
    const [editNoteText, setEditNoteText] = useState(note.text)

    useEffect(() => {
        if (editNoteTitle !== note.title || editNoteText !== note.text) {
            dispatch(editNote([editNoteTitle, editNoteText, new Date().toLocaleString(), note.id]))
        }
    }, [editNoteTitle, editNoteText])

    return (
        <Draggable defaultPosition={note.position} onStop={(data) => dispatch(positionNote([{ x: data.layerX, y: data.layerY }, note.id]))} handle={'.handle'} bounds="parent" >
            <div className={styles.container} >
                <div className={`${styles.handle}  ${'handle'}`} />
                <div className={styles.description} >
                    <input
                        onChange={(e) => { setEditNoteTitle(e.target.value) }}
                        value={editNoteTitle}
                        required
                    />
                    <textarea
                        rows='14'
                        onChange={(e) => { setEditNoteText(e.target.value) }}
                        value={editNoteText}
                        required
                    />
                    {/* display note position & infos: */}
                    <br /><span>x: {note.position.x.toFixed(0)}, y: {note.position.y.toFixed(0)} {note.title} {note.id}</span>
                </div>
                <div className={styles.footer} >
                    <p>edited: {note.date}</p>
                    <FaTrash
                        className={styles.iconDelete}
                        onClick={()=> dispatch(deleteNote(note.id))}
                    />
                </div>
            </div>
        </Draggable>
    )
}