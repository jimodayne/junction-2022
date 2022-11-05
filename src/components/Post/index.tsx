import Link from 'next/link';
import { IPost } from 'src/service/PostService';
import styles from './Post.module.css';
import Moment from 'moment';

interface PostCardProps extends IPost {}
const Post = (props: PostCardProps) => {
  const { id, title, description, createdAt, category } = props;

  Moment.locale('en');

  return (
    // <Link key={id} href={`/${id}`}>
    <div className={styles.postContainer}>
      <div className={styles.postLeft}>
        <h4 className={styles.postCategory}>{category}</h4>
        <h2 className={styles.postTitle}>{title}</h2>
        <p className={styles.postDesc}>{description}</p>
        <p className={styles.postDate}>{Moment(createdAt).format('DD MMM')}</p>
      </div>
      <div className={styles.postRight}>
        <img
          src='https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
          alt='sport'
          className={styles.postImg}
        />
      </div>
    </div>
  );
};

export default Post;
