import type { PayloadAction } from "@reduxjs/toolkit";
export declare const loadingReducer: import("@reduxjs/toolkit").Slice<{
    value: boolean;
}, {
    setLoading: (state: import("immer").WritableDraft<{
        value: boolean;
    }>, action: PayloadAction<boolean>) => void;
}, "loading", "loading", import("@reduxjs/toolkit").SliceSelectors<{
    value: boolean;
}>>;
export declare const setLoading: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "loading/setLoading">;
declare const _default: import("redux").Reducer<{
    value: boolean;
}>;
export default _default;
