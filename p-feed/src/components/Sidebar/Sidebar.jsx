import {PencilLine} from 'phosphor-react'
import styles from "./sidebar.module.css"
import imgbola from './img/R.jfif'
import { Avatar } from '../Avatar/Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
        <img className={styles.imgbola} src={imgbola} alt="" />

        <div className={styles.profile}>

            <Avatar src="https://github.com/GustavoGuke.png" alt="" />

            <strong>Gustavo Silva</strong>
            <span>Student Web Developer</span>
        </div>

        <footer>
            
            <a href="#">
             <PencilLine size={20}/>
                Editar Perfil
            </a>
        </footer>
    </aside>
  )
}
