import { postDef } from "@/constants/types/post.ts";
import { userDataDef } from "@/constants/types/auth";
type postProps = {
    data: postDef;
    userData: userDataDef;
    onRemovePost: (postId: string) => void;
};
declare const Post: (props: postProps) => import("react/jsx-runtime").JSX.Element;
export default Post;
