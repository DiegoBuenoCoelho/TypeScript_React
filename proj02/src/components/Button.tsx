import { type FC, type ComponentPropsWithoutRef } from "react";

type ButtonProps = {
    fnClick?: () => void;
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
    href: string;
} & ComponentPropsWithoutRef<"a">;


const Button: FC<ButtonProps | AnchorProps> = (obProps) => {
    if ("href" in obProps) {
        return (
            <p>
                <a className="button" {...obProps}>{obProps.children}</a>
            </p>
        );

    }

    const handleClick = () => {
        console.log("handleClick", typeof obProps.fnClick);
        if (typeof obProps.fnClick === "function") {
            obProps.fnClick();
        }
    };
    return (
        <p>
            <button className="button" {...obProps} onClick={handleClick}>
                {obProps.children}
            </button>
        </p>
    );

};

export default Button;