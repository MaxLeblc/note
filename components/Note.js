import styles from '../styles/Note.module.scss'
import { FaTrash } from 'react-icons/fa'
import { useState } from 'react'
import Draggable from 'react-draggable'

export default function Note({ id, title, text, position, date, handleDeleteNote }) {

    //track Note position
    const [notePosition, setNotePosition] = useState({ x: 0, y: 0 })
    const trackPosition = (data) => setNotePosition({ x: data.x, y: data.y })

    return (
        <Draggable onStop={(data) => { trackPosition(data), position({ x: data.pageX, y: data.pageY }) }}>
            <div className={styles.container}>
                <div className={styles.description} >
                    <h4>{title}</h4>
                    <p>{text}</p>
                    {/* display Note position on it : */}
                    <span>x: {notePosition.x.toFixed(0)}, y: {notePosition.y.toFixed(0)}</span>
                </div>

                <div className={styles.footer} >
                    <p>{date}</p>
                    <FaTrash className={styles.icon} onClick={() => handleDeleteNote(id)} />
                </div>
            </div>
        </Draggable>
    )
}