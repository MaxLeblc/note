import styles from '../styles/AddNote.module.scss'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from '../reducers/notes'

export default function AddNote() {

    const dispatch = useDispatch()

    const [titleNote, setTitleNote] = useState('')
    const [textNote, setTextNote] = useState('')

    const handleSave = () => {
        if (textNote.trim().length > 0) dispatch(addNote({ title: titleNote, text: textNote }))
        setTitleNote('')
        setTextNote('')
    }

    return (
        <div className={styles.container} >
            <div className={styles.description} >
                <input
                    placeholder='Type to add title...'
                    onChange={(e) => setTitleNote(e.target.value)}
                    value={titleNote}
                />
                <textarea
                    placeholder='Type to add text...'
                    // cols='45'
                    rows='10'
                    onChange={(e) => setTextNote(e.target.value)}
                    value={textNote}
                />
            </div>

            <div className={styles.footer} >
                <p>Edit New Note</p>
                <button className={styles.button} onClick={handleSave} >Save</button>
            </div>
        </div>
    )
}