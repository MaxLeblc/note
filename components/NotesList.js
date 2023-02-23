import styles from '../styles/NotesList.module.scss'
import Note from './Note'
import AddNote from './AddNote'

export default function NotesList({ notes, handleAddNote, handleDeleteNote, handleNotePosition }) {

    return (
        <div className={styles.container} >
            {notes.map((note, key) =>
                <Note
                    key={key}
                    id={note.id}
                    title={note.title}
                    text={note.text}
                    position={handleNotePosition}
                    date={note.date}
                    handleDeleteNote={handleDeleteNote}
                />
            )}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    )
}