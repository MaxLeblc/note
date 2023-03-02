import styles from '../styles/Home.module.scss'

export default function ScreenResizer() {

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
}