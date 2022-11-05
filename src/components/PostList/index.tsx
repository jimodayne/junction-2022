import { useState } from "react"
import { useSelector } from "react-redux"
import { IPost } from "src/service/PostService"
import { store } from "src/store"
import { selectCollections } from "src/store/app"
import Post from "../Post"
import PostCard from "../PostCard"
import styles from "./PostList.module.css"

interface PostListProps {
    posts: IPost[]
}

export type RootState = ReturnType<typeof store.getState>

const PostList = (props: PostListProps) => {
    const collections = useSelector(selectCollections)

    const { posts } = props
    if (!posts?.length) return null

    let results = []
    if (collections.length == 0) {
        results = posts.slice(3, posts.length)
    } else {
        results = posts.slice(0, posts.length)?.filter(post => collections.includes(post.category))
    }

    return (
        <div className={styles.postList}>
            {posts.slice(0, 2)?.map(post => (
                <PostCard key={post.id} {...post} />
            ))}

            {results?.map(post => (
                <Post key={post.id} {...post} />
            ))}
        </div>
    )
}

export default PostList
