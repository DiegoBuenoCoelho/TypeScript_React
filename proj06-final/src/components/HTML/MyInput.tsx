import type { ComponentPropsWithoutRef, FC } from "react";

// Setting up InputProps that contain the default <input> props as well as some custom props (label, id)
type InputProps = {
	label: string;
	id: string;
} & ComponentPropsWithoutRef<"input">;

const MyInput: FC<InputProps> = ({ label, id, ...props }) => {
	return (
		<div className="control">
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				{...props}
			/>
		</div>
	);
};

export default MyInput;
