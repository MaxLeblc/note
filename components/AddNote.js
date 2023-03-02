import styles from '../styles/AddNote.module.scss'
import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from '../reducers/notes'

export default function AddNote() {

    const dispatch = useDispatch()

    const [titleNote, setTitleNote] = useState('')
    const [textNote, setTextNote] = useState('')

    const handleSave = () => {
        if (titleNote.trim().length > 0) dispatch(addNote({ title: titleNote, text: textNote, size: areaRef.current.scrollHeight / 24 })) // (areaRef.current.scrollHeight / note.size)
        setTitleNote('')
        setTextNote('')
        areaRef.current.style.height = "auto" // reset AddNote box size after submit
    }
    
    // dynamic rows area
    const areaRef = useRef(null)
    const handleAreaHeight = () => {
        if (areaRef.current) {
            areaRef.current.style.height = "auto"
            areaRef.current.style.height = areaRef.current.scrollHeight + "px"
        }
    }
    
    return (
        <div className={styles.container} >
            <div className={styles.description} >
                <input
                    placeholder='Add title...'
                    onChange={(e) => setTitleNote(e.target.value)}
                    value={titleNote}
                    maxLength="18"
                    required
                />
                <textarea
                    placeholder='Add text...'
                    rows='auto'
                    onChange={(e) => setTextNote(e.target.value)}
                    value={textNote}
                    onInput={handleAreaHeight}
                    ref={areaRef}
                />
            </div>

            <div className={styles.footer} >
                <p>Edit New Note</p>
                <button className={styles.button} onClick={handleSave} >Save</button>
            </div>
        </div>
    )
}