type Post={
    id:string;
    title:string;
    body:string;
    userId:string;
}

type Album={
    id:string;
    title:string;
    userId:string;
}


async function getUserPosts(userId:string){
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    return res.json();
}



async function getUserAlbum(userId:string){
    const res=await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
    return res.json();
}

export default async function UserProfile({params}:{params:{id:string}}){
    const{id}=await params;
    const postsData=await getUserPosts(id);
    const albumsData=await getUserAlbum(id);

    const[posts,albums]=await Promise.all([postsData,albumsData]);

    return(<>
    <h1>User Profile Page - {id}</h1>
    <h2>Posts:</h2> 
    <ul>
        {posts.map((post:Post)=>(
            <li key={post.id}>{post.title}</li>
        ))}
    </ul>
    <h2>Albums:</h2>
    <ul>
        {albums.map((album:Album)=>(
            <li key={album.id}>{album.title}</li>
        ))}
    </ul>
    </>)

}