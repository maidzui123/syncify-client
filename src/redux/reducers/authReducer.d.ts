import type { PayloadAction } from "@reduxjs/toolkit";
import { LOGIN_TYPE } from "@/constants/enum/auth";
import { userDataDef } from "@/constants/types/auth";
type authDef = {
    accessToken?: string;
    refreshToken?: string;
    email?: string;
    loginType?: LOGIN_TYPE;
    isNewUser?: boolean;
    user?: userDataDef;
};
export declare const authReducer: import("@reduxjs/toolkit").Slice<{
    value: authDef;
}, {
    setAuthData: (state: import("immer").WritableDraft<{
        value: authDef;
    }>, action: PayloadAction<authDef>) => void;
    setNewUser: (state: import("immer").WritableDraft<{
        value: authDef;
    }>, action: PayloadAction<boolean>) => void;
    setUserInfo: (state: import("immer").WritableDraft<{
        value: authDef;
    }>, action: PayloadAction<userDataDef>) => void;
    clearAuthData: (state: import("immer").WritableDraft<{
        value: authDef;
    }>) => void;
}, "auth", "auth", import("@reduxjs/toolkit").SliceSelectors<{
    value: authDef;
}>>;
export declare const setAuthData: import("@reduxjs/toolkit").ActionCreatorWithPayload<authDef, "auth/setAuthData">, setNewUser: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "auth/setNewUser">, setUserInfo: import("@reduxjs/toolkit").ActionCreatorWithPayload<userDataDef, "auth/setUserInfo">, clearAuthData: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"auth/clearAuthData">;
declare const _default: import("redux").Reducer<{
    value: authDef;
}>;
export default _default;
