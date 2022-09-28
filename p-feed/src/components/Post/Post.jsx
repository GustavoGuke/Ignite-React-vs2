import { format, formatDistanceToNow } from 'date-fns'
import {ptBR} from 'date-fns/locale'
import { useState } from 'react'
import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/comment'
import styles from './post.module.css'


export function Post({ author, publishedAt, content}) {

let [comments, setComments] = useState([
  'Primeiro Post'
])

  const dateFomartted = format(publishedAt, "dd 'de' LLLL 'ás' HH:mm'h'", {locale:ptBR})
  const dateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })
  

  function handleCreateComment(event){
    event.preventDefault()
    console.log(event.target.comment.value);
    const comment = event.target.comment.value;

    setComments([...comments, comment])
     event.target.comment.value = ''
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} alt="" />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={dateFomartted} dateTime={publishedAt.toISOString()}>{dateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
       {content.map(line => {
        if (line.type === 'paragraph'){
          return <p>{line.content}</p>
        } else if (line.type === 'link'){
          return <a href="#">{line.content}</a>
        }
       })}
      </div>

      <form onSubmit={handleCreateComment} className={styles.conmentForm}>
        <strong>Deixe seu FeedBack</strong>
        <textarea name='comment' placeholder="deixe um comentario" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.conmentList}>
          {comments.map(comment => {
            return <Comment content= {comment}/>
          })}
      </div>
    </article>
  );
}
