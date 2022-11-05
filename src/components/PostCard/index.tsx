import Link from "next/link"
import { IPost } from "src/service/PostService"
import styles from "./PostCard.module.css"
import Image from "next/image"

interface PostCardProps extends IPost {}
const PostCard = (props: PostCardProps) => {
    const { id, title, description, thumbnail } = props
    return (
        // <Link key={id} href={`/${id}`}>
        <div className={styles.cardContainer}>
            <img
                src={
                    thumbnail
                        ? thumbnail
                        : "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                }
                alt={title}
                className={styles.cardImg}
            />
            <div className={styles.cardInfo}>
                <div className={styles.cardInfoLeft}>
                    <h2 className={styles.cardTitle}>{title}</h2>
                    <p className={`${styles.cardDesc} is-trimmed is-trimmed-2`}>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default PostCard
