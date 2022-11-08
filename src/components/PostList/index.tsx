import useApp from "src/hooks/useApp"
import usePosts from "src/hooks/usePost"
import { IPost } from "src/service/PostService"
import { store } from "src/store"
import Post from "../Post"
import PostCard from "../PostCard"
import styles from "./PostList.module.css"

interface PostListProps {
    posts: IPost[]
}

export type RootState = ReturnType<typeof store.getState>

const PostList = (props: PostListProps) => {
    const { isEco } = useApp()
    const { posts } = props

    const { featurePosts, filteredPosts } = usePosts(posts)

    return (
        <div className={styles.postList}>
            {!isEco && featurePosts.map(post => <PostCard key={post.id} {...post} />)}

            {filteredPosts?.length === 0 ? (
                <div className="text-center mt-8"> Sorry, no post found </div>
            ) : (
                filteredPosts.map(post => <Post key={post.id} {...post} />)
            )}
        </div>
    )
}

export default PostList
