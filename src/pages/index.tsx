import type {GetServerSideProps, NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
import PostCard from "src/components/PostCard";
import {ResponseData} from "src/constants";
import {IPost} from "src/service/PostService";
import {getWithPath} from "src/utils/http";
import styles from "../styles/Home.module.css";

interface HomeProps {
    posts: ResponseData<IPost[]>;
}

const Home = (props: HomeProps) => {
    // const {posts} = props;
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Junction 2022</h1>

                {/* {posts?.data.map((post) => (
                    <PostCard key={post.id} {...post} />
                ))} */}
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
// const data = await getWithPath("/posts");
// return {props: {posts: data}};
// };

export default Home;
