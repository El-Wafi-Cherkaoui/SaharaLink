export default function Comment({comment}) {
    const date = `${comment.date.getDay()+1} / ${comment.date.getMonth()+1} / ${comment.date.getFullYear()}`
    
    return(
        <div className="comment">
                <h1>{comment.author}</h1>
                <span>{date}</span>
                <p>{comment.text}</p>
        </div>
    )
}