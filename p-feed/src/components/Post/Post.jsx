import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/comment";
import styles from "./post.module.css";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["Primeiro Post"]);
  const [newComment, setNewComment] = useState("");

  const dateFomartted = format(publishedAt, "dd 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
  });

  const dateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function onDeleteComment(commentToDelete){
    const deleteComment = comments.filter( comment => {
      return comment != commentToDelete
    } )

    setComments(deleteComment)
  }

  function handleCreateComment(event) {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('')
  }

  function handleNewComment(event) {
    event.target.setCustomValidity("");
    setNewComment(event.target.value);
  }

  function handleComentInvalid(){
    event.target.setCustomValidity("Este campo é obrigatório")
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

        <time title={dateFomartted} dateTime={publishedAt.toISOString()}>
          {dateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return <p key={line.content}><a href="#">{line.content}</a></p> ;
          }
        })}
      </div>

      <form onSubmit={handleCreateComment} className={styles.conmentForm}>
        <strong>Deixe seu FeedBack</strong>

        <textarea
          value={newComment}
          name="comment"
          placeholder="deixe um comentario"
          onChange={handleNewComment}
          onInvalid={handleComentInvalid}
          required
        />

        <footer>
          <button 
          type="submit" 
          disabled={newComment.length === 0 || newComment.charCodeAt(0) == 32}
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.conmentList}>
        {comments.map((comment) => {
          return <Comment 
          key={comment} 
          content={comment}
          onDeleteComment = {onDeleteComment}
          />;
        })}
      </div>
    </article>
  );
}
