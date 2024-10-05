import Head from "next/head";

const posts = [
  {title: "Hello World", excerpt: "Testing"},
  {title: "The mystery of La Micachoana ice-cream", excerpt: "What"}
]

export default function Home() {
  return (
    <div className="conatiner mx-auto px-10 mb-8">
      <Head>
        <title>Blog of Chi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className = 'grid grid-cols-1 lg:grid-cols-12 gap-12'>
          {posts.map((post, index) =>
              (<div key={index}>
                {post.title}
                {post.excerpt}
              </div>)
          )}
        </div>
    </div>
  );
}
