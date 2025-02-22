import React, { CSSProperties } from 'react';
type modalProps = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    width?: number;
    height?: number;
    showHeader?: boolean;
    showBottom?: boolean;
    title?: string;
    style?: CSSProperties;
    renderBottom?: () => JSX.Element;
};
declare const Modal: (props: modalProps) => import("react/jsx-runtime").JSX.Element;
export default Modal;
