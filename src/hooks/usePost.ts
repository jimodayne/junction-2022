import { useMemo } from "react"
import { IPost } from "src/service/PostService"
import useApp from "./useApp"

const usePosts = (posts: IPost[]) => {
    const { collections } = useApp()
    const featurePosts = useMemo(() => posts.slice(0, 2), [posts])
    const filteredPosts = useMemo(() => {
        if (collections?.length) {
            return posts.slice(0, posts.length)?.filter(post => collections.includes(post.category))
        }
        return posts.slice(2, posts.length)
    }, [posts, collections])

    return { featurePosts, filteredPosts }
}

export default usePosts
