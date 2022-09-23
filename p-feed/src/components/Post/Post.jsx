import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/comment'
import styles from './post.module.css'
export function Post({ author, content } = props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/diego3g.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Gustavo Silva</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='22 de Julho ás 15:43' dateTime='2022-07-22 15:43:59'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p> Consectetur cupiditate cumque debitis amet recusandae reiciendis possimus maiores sit</p>
        <p> <a href="#"> blanditiis aliquam atque fugit odio ad. </a> </p>
        <p> <a href="#"> Odio cum ducimus inventore at eligendi.</a></p>
      </div>

      <form className={styles.conmentForm}>

        <strong>Deixe seu FeedBack</strong>
        <textarea
          placeholder='deixe um comentario'
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.conmentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
