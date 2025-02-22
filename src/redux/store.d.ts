export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    locale: {
        value: import("./reducers/localeReducer").localeType;
    };
    auth: {
        value: {
            accessToken?: string;
            refreshToken?: string;
            email?: string;
            loginType?: import("../constants/enum/auth").LOGIN_TYPE;
            isNewUser?: boolean;
            user?: import("../constants/types/auth").userDataDef;
        };
    };
    loading: {
        value: boolean;
    };
    editPost: {
        value: import("./reducers/editPostReducer").editPostDef;
    };
} & import("redux-persist/es/persistReducer").PersistPartial, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        locale: {
            value: import("./reducers/localeReducer").localeType;
        };
        auth: {
            value: {
                accessToken?: string;
                refreshToken?: string;
                email?: string;
                loginType?: import("../constants/enum/auth").LOGIN_TYPE;
                isNewUser?: boolean;
                user?: import("../constants/types/auth").userDataDef;
            };
        };
        loading: {
            value: boolean;
        };
        editPost: {
            value: import("./reducers/editPostReducer").editPostDef;
        };
    } & import("redux-persist/es/persistReducer").PersistPartial, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export declare const persist: import("redux-persist").Persistor;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
