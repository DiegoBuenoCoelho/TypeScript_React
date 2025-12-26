import { type FC, type ComponentPropsWithoutRef, forwardRef, type Ref } from "react";

type InputProps = {
    id: string;
    label: string;
    type: "text" | "password" | "email" | "number";
    ref: Ref<HTMLInputElement>;
} & ComponentPropsWithoutRef<"input">;

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>((obProps, ref) => {

    return (
        <p>
            <label htmlFor={obProps.id}>{obProps.label}</label>
            <input {...obProps} name={obProps.name} ref={ref} />
        </p>
    );
});

export default Input;;