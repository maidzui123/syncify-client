declare const _default: import("redux").Reducer<{
    locale: {
        value: import("./localeReducer").localeType;
    };
    auth: {
        value: {
            accessToken?: string;
            refreshToken?: string;
            email?: string;
            loginType?: import("../../constants/enum/auth").LOGIN_TYPE;
            isNewUser?: boolean;
            user?: import("../../constants/types/auth").userDataDef;
        };
    };
    loading: {
        value: boolean;
    };
    editPost: {
        value: import("./editPostReducer").editPostDef;
    };
}, import("redux").UnknownAction, Partial<{
    locale: {
        value: import("./localeReducer").localeType;
    } | undefined;
    auth: {
        value: {
            accessToken?: string;
            refreshToken?: string;
            email?: string;
            loginType?: import("../../constants/enum/auth").LOGIN_TYPE;
            isNewUser?: boolean;
            user?: import("../../constants/types/auth").userDataDef;
        };
    } | undefined;
    loading: {
        value: boolean;
    } | undefined;
    editPost: {
        value: import("./editPostReducer").editPostDef;
    } | undefined;
}>>;
export default _default;
