export default function CreatePost() {
    return(
        <div className="create_post">
            <h1>Add new post: </h1>
            <div contentEditable={true} className="new_post">
            </div>
            <button>Add post</button>
        </div>
    )
}