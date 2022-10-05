import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ChangeEvent, FormEvent, useState } from "react";
import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./post.module.css";


interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string
}

interface PostProps{
  author: Author;
  publisheAt: Date;
  content: Content[];
}

export function Post({ author, publisheAt, content }: PostProps) {
  const [comments, setComments] = useState(["Primeiro Post"]);
  const [newComment, setNewComment] = useState("");

  const dateFomartted = format(publisheAt, "dd 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
  });

  const dateRelativeToNow = formatDistanceToNow(publisheAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function onDeleteComment(commentToDelete: string){
    const deleteComment = comments.filter( comment => {
      return comment != commentToDelete
    } )

    setComments(deleteComment)
  }

  function handleCreateComment(event : FormEvent) {
    event.preventDefault()
    setComments([...comments, newComment]);
    setNewComment('')
  }

  function handleNewComment(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewComment(event.target.value);
  }

  function handleComentInvalid(event: ChangeEvent<HTMLTextAreaElement>){
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

        <time title={dateFomartted} dateTime={publisheAt.toISOString()}>
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
