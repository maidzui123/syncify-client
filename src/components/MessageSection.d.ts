import { userDataDef } from "@/constants/types/auth.ts";
import { chatDef } from "@/constants/types/chat.ts";
type messageSectionProps = {
    userData: userDataDef;
    chatData?: userDataDef & {
        chatId: string;
    };
    updateLastChat: (lastChat: chatDef) => void;
};
declare const MessageSection: (props: messageSectionProps) => import("react/jsx-runtime").JSX.Element;
export default MessageSection;
