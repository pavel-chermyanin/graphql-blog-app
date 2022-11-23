import Head from "next/head";
import Image from "next/image";
import { Categories, PostCard, PostWidget } from "../components";

const posts = [
  { title: "Lerning Next", excerpt: "i like it" },
  { title: "Lerning Next with TailWind", excerpt: "i like it with TailWind" },
];

const Home = () => {
  return (
    <div className="container mx-auto px-10 mb-8 ">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1 relative">
          <div className="lg:stycky  top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
