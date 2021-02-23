import matter from 'gray-matter';

export default function Bios({bios}) {
    console.log(bios)
    return(
       
        <div>
            {bios && bios.map((bio) => (
                <div key={bio.id}>
                    <h2>{bio.title}</h2>
                    {matter(bio.content)}
                    <img 
                        className="bio-pic"
                        src={`http://localhost:1337${bio.content}`}
                    ></img>
                </div>
            ))}
        </div>
    )
}

export async function getStaticProps(){
    const res = await fetch('http://localhost:1337/bios');
    const data = await res.json();

    const bios = data.map((bio) => {matter(bio.content)})
    // const parsedMarkdown = matter(bios)

    // console.log(parsedMarkdown)

    return {
        props: {bios}
    }
}