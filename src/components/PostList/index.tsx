import { IPost } from 'src/service/PostService';
import Post from '../Post';
import PostCard from '../PostCard';
import styles from './PostList.module.css';

interface PostListProps {
  posts: IPost[];
}

const PostList = (props: PostListProps) => {
  const { posts } = props;
  if (!posts?.length) return null;

  return (
    <div className={styles.postList}>
      {posts.slice(0, 2)?.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}

      {posts.slice(3, posts.length)?.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostList;
