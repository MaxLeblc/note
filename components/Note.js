import styles from '../styles/Note.module.scss'
import Draggable from 'react-draggable'
import { FaTrash } from 'react-icons/fa'
import { useEffect, useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { deleteNote, editNote, positionNote, sizeAreaNote } from '../reducers/notes'

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


    // dynamic rows for textarea
    const areaRef = useRef(null)
    const handleAreaHeight = () => {
        if (areaRef.current) {
            areaRef.current.style.height = "auto"
            areaRef.current.style.height = areaRef.current.scrollHeight + "px"
            dispatch(sizeAreaNote([areaRef.current.scrollHeight / 24, note.id])) // (areaRef.current.scrollHeight / note.size)
        }
    }

    return (
        <Draggable
            defaultPosition={note.position}
            onStop={(data) => dispatch(positionNote([{ x: data.layerX, y: data.layerY }, note.id]))}
            handle={'.handle'}
            // bounds="parent"
        >
            <div className={styles.container} >
                <div className={`${styles.handle}  ${'handle'}`} />
                <div className={styles.description} >
                    <input
                        onChange={(e) => setEditNoteTitle(e.target.value)}
                        value={note.title}
                        maxLength="18"
                    />
                    <textarea
                        rows={note.size}
                        onChange={(e) => setEditNoteText(e.target.value)}
                        value={note.text}
                        onInput={handleAreaHeight}
                        ref={areaRef}
                    />
                    {/* display note position & infos: */}
                    {/* <br /><span>x: {note.position.x.toFixed(0)}, y: {note.position.y.toFixed(0)} {note.title} {note.id}</span> */}
                </div>
                <div className={styles.footer} >
                    <p>Edited: {note.date}</p>
                    <FaTrash
                        className={styles.iconDelete}
                        onClick={() => dispatch(deleteNote(note.id))}
                    />
                </div>
            </div>
        </Draggable>
    )
}