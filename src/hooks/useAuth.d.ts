import { LOGIN_TYPE, REGISTER_TYPE } from "@/constants/enum/auth";
import { signInDef } from "@/constants/types/auth";
import { signUpDef } from "@/utils/validate";
declare const useAuth: () => {
    isAuth: boolean;
    accessToken: string | undefined;
    refreshToken: string | undefined;
    logIn: (loginType: LOGIN_TYPE, loginData?: signInDef) => Promise<boolean | undefined>;
    signUp: (loginType: REGISTER_TYPE, registerData?: signUpDef) => Promise<boolean | undefined>;
    logOut: () => Promise<void>;
};
export default useAuth;
