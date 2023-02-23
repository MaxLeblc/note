import styles from '../styles/Home.module.scss';
import NotesList from './NotesList';
import Search from './Search';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

function Home() {
  const [notes, setNotes] = useState([])
  // console.log("🚀 ~ file: Home.js:9 ~ Home ~ notes:", notes)
  const [searchNote, setSearchNote] = useState('')
  const [darkMode, setDarkMode] = useState(false)


  // get note's position
  // const [notePosition, setNotePosition] = useState({})

  const handleNotePosition = (position, i) => {
    // setNotes({...notes, position: position})
    // console.log(notes);
  }

  // using LocalStorage to save notes
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-note-app-data'))
    if (savedNotes) setNotes(savedNotes)
  }, [])

  useEffect(() => {
    localStorage.setItem('react-note-app-data', JSON.stringify(notes))
  }, [notes])

  const addNote = (title, text) => {
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      position: {},
      date: new Date().toLocaleString(),
    }
    setNotes([...notes, newNote])
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  return (
    <div className={`${darkMode && 'darkMode'}`} >
      <main className={styles.main}>
        <Search handleSearchNote={setSearchNote} handleDarkMode={setDarkMode} />
        <NotesList
          notes={notes.filter((note) => note.text.toLocaleLowerCase().includes(searchNote))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleNotePosition={handleNotePosition} // position
        />
      </main>
    </div>
  );
}

export default Home;
