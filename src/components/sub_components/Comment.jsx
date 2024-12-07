export default function Comment({comment}) {
    
    return(
        <div className="comment">
                <h1>{comment.author}</h1>
                <span>{comment.created_at}</span>
                <p>{comment.text}</p>
        </div>
    )
}