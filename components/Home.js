import styles from '../styles/Home.module.scss'
import Header from './Header'
import AddNote from './AddNote'
import Note from './Note'
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
    } else if ((note.title || note.text).toLowerCase().includes(query.toLowerCase())) {
      return note
    }
  }).map((note, i) => (
    <Note
      key={i}
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

  if (warningSize) {
    return (
      <div className={styles.warningSize}>
        <h1>Votre fenêtre est trop petite ! 🙀😬😮</h1>
        <br />
        <p>Note n'est pour le moment pas disponible sur mobile !
          <br /> Veuillez naviguer depuis un ordinateur* ou une tablette.
          <br />Ou demander un pc au Père Noël...</p>
        <br />
        <p>*Si la page ne s'affiche pas depuis votre ordinateur, <br /> veuillez appuyer sur :
          <p>Ctrl et - pour Windows et Linux</p>
          <p>Ctrl et - pour Chrome OS</p>
          <p>⌘ et - pour Mac</p>
        </p>
      </div>
    )
  } else {

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
}