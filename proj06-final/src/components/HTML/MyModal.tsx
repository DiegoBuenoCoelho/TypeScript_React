import { FC, forwardRef, ReactNode, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export type ModalHandle = {
	open: () => void;
	sayHello: () => void;
};

type ModalProps = {
	children: ReactNode;
	onClose: () => void;
};

const MyModal: FC<ModalHandle & ModalProps> = forwardRef<ModalHandle, ModalProps>(
	(obProps, refToModal) => {
		const { children, onClose } = obProps;
		const refDialog = useRef<HTMLDialogElement>(null);

		// useImperativeHandle is used to expose the `open` method to other components
		useImperativeHandle(refToModal, () => {
			return {
				open: () => {
					console.log("useImperativeHandle OPEN");
					if (refDialog.current) {
						refDialog.current.showModal(); // showModal() is a built-in method available on the <dialog> element
					}
				},
				sayHello: () => {
					console.log("useImperativeHandle SAY HELLO");
				},
			};
		});

		return createPortal(
			<dialog
				ref={refDialog}
				className="modal"
				onClose={onClose}
			>
				{children}
			</dialog>,
			document.getElementById("modal-root")!
		);
	}
);

export default MyModal;
