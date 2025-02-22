import * as React from "react";
type inputProps = {
    renderRightIcon?: () => JSX.Element;
} & React.ComponentProps<"input">;
declare const Input: React.ForwardRefExoticComponent<Omit<inputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export { Input };
