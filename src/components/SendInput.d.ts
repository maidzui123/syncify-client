type sendInputProps = {
    avatar: string;
    placeholder?: string;
    value: string;
    onChange: (text: string) => void;
    onSend: () => void;
};
declare const SendInput: (props: sendInputProps) => import("react/jsx-runtime").JSX.Element;
export default SendInput;
