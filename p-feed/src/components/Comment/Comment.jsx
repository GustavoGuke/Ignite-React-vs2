import { Trash, ThumbsUp } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Comment.module.css";

export function Comment({content}) {

  let [count, setCount] = useState(0)

  function handleAplaudir(){
    setCount(count+1)
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/GustavoGuke.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gustavo Silva</strong>
              <time title="22 de Julho ás 15:43" dateTime="2022-07-22 15:43:59">
                Publicado há 1h
              </time>
            </div>
            <button title="Deletar Comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleAplaudir}>
            <ThumbsUp /> aplaudir <span>{count}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
