import type { PayloadAction } from "@reduxjs/toolkit";
import { postDef } from "@/constants/types/post";
export declare enum POST_MODAL_ACTION {
    CREATE = 0,
    EDIT = 1
}
export type editPostDef = {
    open: boolean;
    editPostData?: postDef;
    action?: POST_MODAL_ACTION;
};
export declare const editPostReducer: import("@reduxjs/toolkit").Slice<{
    value: editPostDef;
}, {
    toggleModal: (state: import("immer").WritableDraft<{
        value: editPostDef;
    }>) => void;
    setEditPost: (state: import("immer").WritableDraft<{
        value: editPostDef;
    }>, action: PayloadAction<editPostDef>) => void;
    clearEditPost: (state: import("immer").WritableDraft<{
        value: editPostDef;
    }>) => void;
}, "editPost", "editPost", import("@reduxjs/toolkit").SliceSelectors<{
    value: editPostDef;
}>>;
export declare const toggleModal: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"editPost/toggleModal">, setEditPost: import("@reduxjs/toolkit").ActionCreatorWithPayload<editPostDef, "editPost/setEditPost">, clearEditPost: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"editPost/clearEditPost">;
declare const _default: import("redux").Reducer<{
    value: editPostDef;
}>;
export default _default;
