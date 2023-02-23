import styles from '../styles/AddNote.module.scss'
import { useState } from 'react'

export default function AddNote({ handleAddNote }) {
    const [textNote, setTextNote] = useState('')
    const [titleNote, setTitleNote] = useState('')

    const handleSave = () => {
        if (textNote.trim().length > 0) handleAddNote(titleNote, textNote)
        setTitleNote('')
        setTextNote('')
    }

    return (
        <div className={styles.container} >
            <div className={styles.description} >
                <textarea
                    placeholder='Type to add title...'
                    cols="60"
                    rows="2"
                    onChange={(e) => setTitleNote(e.target.value)}
                    value={titleNote}
                >
                </textarea>
                <textarea
                    placeholder='Type to add text...'
                    cols='60'
                    rows='20'
                    onChange={(e) => setTextNote(e.target.value)}
                    value={textNote}
                />
            </div>

            <div className={styles.footer} >
                <button className={styles.button} onClick={handleSave} >Save</button>
            </div>
        </div>
    )
}