import { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

type BasicProps = {
	children: ReactNode;
	textOnly: boolean;
};

type ButtonProps = BasicProps & ComponentPropsWithoutRef<"button">;
type ButtonLinkProps = BasicProps & LinkProps;

const isRouterLink = (props: ButtonProps | ButtonLinkProps): props is ButtonLinkProps => {
	return "to" in props;
};

const Button: FC<ButtonProps | ButtonLinkProps> = (obProps: ButtonProps | ButtonLinkProps) => {
	if (isRouterLink(obProps)) {
		// Destructuring inside the `if` statement to ensure TypeScript "understands" that `props`
		// is of type `ButtonLinkProps` and `otherProps` will therefore only contain props that work on <Link>
		const { children, textOnly, ...otherProps } = obProps;
		return (
			<Link
				className={`button ${textOnly ? "button--text-only" : ""}`}
				{...otherProps}
			>
				{children}
			</Link>
		);
	} else {
		// Destructuring after the `if` statement to ensure TypeScript "understands" that `props` is of type `ButtonProps` and `otherProps` will therefore only contain props that work on <button>
		const { children, textOnly, ...otherProps } = obProps;
		return (
			<button
				className={`button ${textOnly ? "button--text-only" : ""}`}
				{...otherProps}
			>
				{children}
			</button>
		);
	}
};

export default Button;
