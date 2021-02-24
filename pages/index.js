
export default function Home({blogs, bios}) {

  console.log("i am on the client")

  return (
    // loop over blogs and show them
    <div className="main">
    <h1>Test Page</h1>
    <div className="blogs">
      <h2>Recent Articles</h2>
      {blogs && blogs.map( (blog) => (
        <div key={blog.id}>
          <h3>{blog.Title}<span className="author"> - {blog.user.username}</span></h3>
        </div>
      ))}
    </div>
    {/* loop over bios and show them */}
    <div className="bios">
      <h2>Our Employees</h2>
      {bios && bios.map((bio) => (
        <div key={bio.id}>
          <h3>{bio.title}</h3>
        </div>
      ))}
    </div>
    </div>
  )
}

export async function getStaticProps() {

  //get posts from our api

  const resBlogs = await fetch("http://localhost:1337/blogs");
  const blogs = await resBlogs.json()

  // get bios from our api
  const resBios = await fetch('http://localhost:1337/bios');
  const bios = await resBios.json();

  return {
    props: {
      blogs, bios
    }
  }
}