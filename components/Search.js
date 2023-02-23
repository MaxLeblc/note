import styles from '../styles/Search.module.scss'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export default function Search({ handleSearchNote, handleDarkMode }) {
    const [buttonTheme, setButtonTheme] = useState(false)

    return (
        <div className={styles.container} >
            <div className={styles.searchContainer} >
                <FaSearch />
                <input
                    type='text'
                    placeholder='Type to search a note...'
                    onChange={(e) => handleSearchNote(e.target.value)}
                    className={styles.searchBar} />
            </div>
            <button onClick={() => { handleDarkMode((previousMode) => !previousMode), setButtonTheme(!buttonTheme) }} className={buttonTheme === false ? styles.button : styles.buttonDark} >Mode</button>
        </div>
    )
}