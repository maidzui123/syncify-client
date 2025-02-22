import type { PayloadAction } from "@reduxjs/toolkit";
export type localeType = 'vi' | 'en';
export declare const localeReducer: import("@reduxjs/toolkit").Slice<{
    value: localeType;
}, {
    setLocale: (state: import("immer").WritableDraft<{
        value: localeType;
    }>, action: PayloadAction<"vi" | "en">) => void;
}, "locale", "locale", import("@reduxjs/toolkit").SliceSelectors<{
    value: localeType;
}>>;
export declare const setLocale: import("@reduxjs/toolkit").ActionCreatorWithPayload<"vi" | "en", "locale/setLocale">;
declare const _default: import("redux").Reducer<{
    value: localeType;
}>;
export default _default;
