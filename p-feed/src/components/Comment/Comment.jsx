import { Trash, ThumbsUp } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Comment.module.css";

export function Comment() {
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
          <p>Muito Bom</p>
        </div>
        <footer>
          <button>
            <ThumbsUp /> aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
