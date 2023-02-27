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
                className={styles.button} >
                {modes.editMode ? <ImEyeBlocked className={styles.icon} /> : '+'}
            </button>
            <div className={styles.searchContainer} >
                <FaSearch />
                <input
                    type='text'
                    placeholder='Type to search a note...'
                    onChange={(e) => handleFilteredNotes(e.target.value)}
                    className={styles.searchBar} />
            </div>
            <button
                onClick={() => dispatch(darkMode(!modes.darkMode))}
                className={modes.darkMode ? styles.buttonDark : styles.buttonWhite} >
                Mode
            </button>
        </div>
    )
}