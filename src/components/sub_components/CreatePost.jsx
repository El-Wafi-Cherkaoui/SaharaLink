import { useRef } from "react"

export default function CreatePost({comment_added}) {
    const author_ref = useRef()
    const text_ref = useRef()
    async function create_comment() {
        const author = author_ref.current.value
        const text = text_ref.current.textContent
        const request = await fetch('https://saharalink-production.up.railway.app/new_post', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(
                {
                    author: author,
                    text: text
                }
            )
        })
        if (request.ok){
            comment_added((old_v)=>!old_v)
        }
    }
    return(
        <div className="create_post">
            <h1>Add new post: </h1>
            <input type="text" placeholder="Your Name" className="author_inp" ref={author_ref}/>
            <div contentEditable={true} className="new_post" ref={text_ref}>
            </div>
            <button onClick={create_comment}>Add post</button>
        </div>
    )
}