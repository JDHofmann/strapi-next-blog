
export default function Home({blogs}) {

  console.log("i am on the client")

  return (
    // loop over blogs and show them

    <div>
      {blogs && blogs.map( (blog) => (
        <div key={blog.id}>
          <h2>{blog.Title}</h2>
        </div>
      ))}
      

    </div>
  )
}

export async function getStaticProps() {

  // console.log("I'm the server side");

  //get posts from our api

  const res = await fetch("http://localhost:1337/blogs");
  const blogs = await res.json()

  console.log(blogs)

  return {
    props: {
      blogs
    }
  }
}