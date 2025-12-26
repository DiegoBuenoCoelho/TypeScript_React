import { forwardRef, useImperativeHandle, useRef, type ComponentPropsWithoutRef, type FC, type FormEvent, type Ref } from "react";

type FormProps = {
    onSave: (value: unknown) => void;
    thisRef: Ref<FormHandle>;
} & ComponentPropsWithoutRef<"form">;

export type FormHandle = {
    clear: () => void;
};

const Form: FC<FormProps> = forwardRef<FormHandle, FormProps>((
    { onSave, children, thisRef, ...otherProps }
) => {

    const refForm = useRef<HTMLFormElement>(null);

    useImperativeHandle(thisRef, () => {
        return {
            clear: () => {
                console.log("useImperativeHandle CLEAR");
                refForm.current?.reset();
            }
        };
    });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        // const myName = obFormData.get("name");
        // const myAge = obFormData.get("age");
        // console.warn({ myName, myAge });

        const obFormData = Object.fromEntries(formData);

        onSave(obFormData);
        refForm.current?.reset();
    };

    return (
        <form onSubmit={handleSubmit} {...otherProps} ref={refForm}>
            {children}
        </form>
    );
});

export default Form;