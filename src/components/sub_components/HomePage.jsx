import { useEffect, useState } from "react";
import Comment from "./Comment";
import CreatePost from "./CreatePost";

export default function HomePage() {
    const [comments, setComments] = useState([])
    const [comment_added, setComment_added] = useState(false)
    useEffect(()=>{
        fetch('http://localhost:2025/all_posts')
        .then((res)=>res.json())
        .then((data)=>{setComments(data)})
    },[comment_added])
    return(
        <>
            <CreatePost comment_added={setComment_added} />
            <div className="all_posts">
                <h1>Posts:</h1>
                <div className="comments">
                    {
                        comments.map((comment, key)=>{
                            return(
                                <Comment comment={comment} key={key}/>
                            )
                        })
                    } 
                </div>
            </div>
        </>
    )
}