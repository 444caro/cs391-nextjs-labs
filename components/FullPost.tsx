import { PostProps } from "@/types";
import { thumbDown, thumbUp} from "@mui/icons-material";

export default function FullPost({post}:{post:PostProps}) {
    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <div className="flex>
                <div>
                    {post.upvotes}
                    <thumbUp />
                </div>
                <div>
                    {post.downvotes}
                    <thumbDown />
                </div>
        </div>
    );
}