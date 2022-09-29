import { Header } from "./components/Header/Header"
import { Post } from "./components/Post/Post"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Comment } from "./components/Comment/Comment"

import "./global.css"
import styles from "./app.module.css"


const post = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/gustavoGuke.png",
      name: "Gustavo Silva",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Lorem ipsum dolor sit amet," },
      { type: "paragraph", content: " consectetur adipisicing elit." },
      { type: "link", content: "Numquam, eius debitis commodi quas " },
    ],
    publishedAt: new Date(),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego fernandes",
      role: "CTO Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Lorem ipsum dolor sit amet," },
      { type: "paragraph", content: " consectetur adipisicing elit." },
      { type: "link", content: "Numquam, eius debitis commodi quas " },
    ],
    publishedAt: new Date()
  },
];

function App() {
  return (

    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map(posts => {
            return (
            <Post 
              key={posts.id}
              author = {posts.author}
              content = {posts.content}
              publishedAt = {posts.publishedAt}
            />
            )
          })}
        </main>
      </div>

    </div>

  )
}

export default App
