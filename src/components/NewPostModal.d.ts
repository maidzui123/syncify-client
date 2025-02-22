import type { userDataDef } from "@/constants/types/auth.ts";
import { postDef } from "@/constants/types/post";
import { POST_MODAL_ACTION } from "@/redux/reducers/editPostReducer";
type newPostProps = {
    userData: userDataDef | undefined;
    open: boolean;
    initPostData?: postDef;
    action?: POST_MODAL_ACTION;
};
declare const NewPostModal: (props: newPostProps) => import("react/jsx-runtime").JSX.Element;
export default NewPostModal;
