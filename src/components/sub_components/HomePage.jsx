import Comment from "./Comment";
import CreatePost from "./CreatePost";

export default function HomePage() {
    const comments = [
        {
            author: 'elwafi', 
            text: 'loremaklsdjklajsndkljkalsdjkljaskdljkl kljaskld klaskdljkals',
            date: new Date()
        },
        {
            author: 'elwafi', 
            text: 'loremaklsdjklajsndkljkalsdjkljaskdljkl kljaskld klaskdljkals',
            date: new Date()
        },
        {
            author: 'elwafi', 
            text: 'loremaklsdjklajsndkljkalsdjkljaskdljkl kljaskld klaskdljkals',
            date: new Date()
        },
        {
            author: 'elwafi', 
            text: 'loremaklsdjklajsndkljkalsdjkljaskdljkl kljaskld klaskdljkals',
            date: new Date()
        }
        ,{
            author: 'elwafi', 
            text: 'loremaklsdjklajsndkljkalsdjkljaskdljkl kljaskld klaskdljkals',
            date: new Date()
        },
        {
            author: 'elwafi', 
            text: 'sd kljaskld klaskdljkals',
            date: new Date()
        },
        {
            author: 'elwafi', 
            text: 'loremaklsdjklajsndkljkalsdjkljaasdasdasdadsskdljkl kljaskld klaskdljkals',
            date: new Date()
        },
        {
            author: 'elwafi', 
            text: 'loremaklsdjklajsndkljkalsdjkljaskdljkl kljaskld klaskdljkals',
            date: new Date()
        },
        {
            author: 'elwafi', 
            text: 'loremaklsdjklajsndkljkalsdjkljaskdljkl kljaskld klaskdljkals',
            date: new Date()
        },
        {
            author: 'elwafi', 
            text: 'loremaklsdjklajsndkljkalsdjkljaskdljkl kljaskld klaskdljkals',
            date: new Date(),
        }
    ]
    return(
        <>
            <CreatePost/>
            <div className="all_posts">
                <h1>Posts: </h1>
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