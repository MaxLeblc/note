import styles from '../styles/Home.module.scss'
import Header from './Header'
import AddNote from './AddNote'
import Note from './Note'
import ScreenResizer from './ScreenResizer'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function Home() {

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
    } else if (note.title.toLowerCase().includes(query.toLowerCase()) || note.text.toLowerCase().includes(query.toLowerCase())) {
      return note
    }
  }).map((note) => (
    <Note
      key={note.id}
      note={note}
    />
  ))

  // Pop warning window size under 1180px width
  const [windowSize, _setWindowSize] = useState([window.innerWidth, window.innerHeight])
  const [warningSize, setWarningSize] = useState(false)

  useEffect(() => {
    window.innerWidth < 1180 ? setWarningSize(true) : setWarningSize(false)
    window.addEventListener('resize', () => {
      window.innerWidth < 1180 ? setWarningSize(true) : setWarningSize(false)
    })
  }, [windowSize])

  return (
    <div className={`${modes.darkMode && 'darkMode'}`} >
      {warningSize
        ? <ScreenResizer />
        : <main className={styles.main}>
          <Header handleFilteredNotes={handleFilteredNotes} />
          {modes.editMode && <AddNote />}
          {filteredNotes}
        </main>
      }
    </div>
  )
}