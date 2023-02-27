import styles from '../styles/Home.module.scss'
import Header from './Header'
import AddNote from './AddNote'
import Note from './Note'
import { useState } from 'react'
import { useSelector } from 'react-redux'

function Home() {

  const notes = useSelector(state => state.notes.value)
  const modes = useSelector(state => state.modes.value)

  // filter notes for searchBar in Header
  const [query, setQuery] = useState('')

  const handleFilteredNotes = (data) => {
    setQuery(data)
  }

  const filteredNotes = notes.filter(note => {
    if (query === '') {
      return note
    } else if ((note.title || note.text).toLowerCase().includes(query.toLowerCase())) {
      return note
    }
  }).map((note, i) => (
    <Note
      key={i}
      note={note}
    />
  ))

  return (
    <div className={`${modes.darkMode && 'darkMode'}`} >
      <main className={styles.main}>
        <Header handleFilteredNotes={handleFilteredNotes} />
        {modes.editMode && <AddNote />}
        {filteredNotes}
      </main>
    </div>
  );
}

export default Home;