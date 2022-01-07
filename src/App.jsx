import React, { useState } from 'react'
import styles from './App.module.css'
import Post from './components/Post'
import PostComposer from './components/PostComposer'

function App() {
  const [isPostComposerActive, setPostComposerState] = useState(false);

  const [posts, setPosts] = useState([]);

  const openPostComposer = e => {
    setPostComposerState(true);
  }

  return (
    <>
      <main className={styles.contentArea}>
        <button className={styles.createPostBtn} onClick={openPostComposer}>Create Post</button>
        <h2 className={styles.heading}>All Posts</h2>
        <section>
          {
            posts.map((post, index) => <Post key={index} msg={post.msg} gifs={post.gifs} />)
          }
        </section>
      </main>
      {
        isPostComposerActive && (
          <PostComposer 
            setPosts={setPosts} 
            setPostComposerState={setPostComposerState} 
          />
        )
      }
    </>
  );
}

export default App
