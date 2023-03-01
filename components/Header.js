import styles from '../styles/Header.module.scss'
import { FaSearch } from 'react-icons/fa'
import { ImEyeBlocked } from "react-icons/im"
import { useDispatch, useSelector } from 'react-redux'
import { editMode, darkMode } from '../reducers/modes'

export default function Search({ handleFilteredNotes }) {

    const dispatch = useDispatch()
    const modes = useSelector(state => state.modes.value)

    return (
        <div className={styles.container} >
            <button
                onClick={() => dispatch(editMode(!modes.editMode))}
                className={modes.darkMode ? styles.buttonEditDark : styles.buttonEdit} >
                {modes.editMode ? <ImEyeBlocked /> : '+'}
            </button>
            <div className={modes.darkMode ? styles.searchContainerDark : styles.searchContainer} >
                <FaSearch />
                <input
                    type='text'
                    placeholder='Search a note...'
                    onChange={(e) => handleFilteredNotes(e.target.value)}
                    className={modes.darkMode ? styles.searchBarDark : styles.searchBar}
                />
            </div>
            <button
                onClick={() => dispatch(darkMode(!modes.darkMode))}
                className={modes.darkMode ? styles.buttonModeDark : styles.buttonMode} >
                Dark
            </button>
        </div>
    )
}