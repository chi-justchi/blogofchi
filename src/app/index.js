import Head from "next/head";
import {PostCard, Categories, PostWidget} from '../Components';

const posts = [
  {title: "Hello World", excerpt: "Testing"},
  {title: "The mystery of La Micachoana ice-cream", excerpt: "What"}
]

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Blog of Chi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className = "lg:col-span-8 col-span-1">
          {posts.map((post) => <PostCard post={post} key={post.title}/>
          )}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className = "lg:sticky relative top0">
            <PostWidget/>
            <Categories/>
          </div>
        </div>
      </div>
    </div>
  );
}
