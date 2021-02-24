import Link from "next/link";

export default function Post({ blog }) {
  return (
    <div>
      <Link href="/">
        <a>Go Home</a>
      </Link>
      <h2>{blog.Title}</h2>
      <p>{blog.Content}</p>
    </div>
  );
}

// tell next.js how many pages there are
export async function getStaticPaths() {
  const res = await fetch("http://localhost:1337/blogs");
  const posts = await res.json();

  const paths = posts.map((blog) => ({
    params: { slug: blog.Slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

// for each individual page: get the data for that page
export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await fetch(`http://localhost:1337/blogs?Slug=${slug}`);
  const data = await res.json();
  const blog= data[0];

  return {
    props: { blog },
  };
}