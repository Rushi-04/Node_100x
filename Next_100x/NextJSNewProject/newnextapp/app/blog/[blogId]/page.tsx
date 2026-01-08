import axios from "axios";

async function getData (slug: number) {
    try{
        const data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${slug}`);
        return data.data;

    }
    catch(e){
        return e;
    }
}

export default async function BlogPage({params}: any) {
    const id = (await params).blogId;
    const res = await getData(id);

    return (
        <div>
            Hello from blog {id} 
            <div>
                Title: {res.title}
            </div>
            <div>
                Body: {res.body}
            </div>
        </div>
    )
};