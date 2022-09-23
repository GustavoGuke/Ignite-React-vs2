import { Header } from "./components/Header/Header"
import { Post } from "./components/Post/Post"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Comment } from "./components/Comment/Comment"

import "./global.css"
import styles from "./app.module.css"

function App() {
  return (

    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Gustavo Silva"
            content="lorem ipsum dolor sir amet"
          />

          <Post
            author="Gustavo Silva"
            content="lorem ipsum dolor sir amet"
          />

        </main>
      </div>

    </div>

  )
}

export default App
