import { FC, FormEvent, useEffect, useRef } from "react";
import { SessionItem } from "./SessionItem";
import MyModal, { type ModalHandle } from "../HTML/MyModal";
import Button from "../HTML/Button";
import { HTMLFormMethod } from "@remix-run/router";
import MyInput from "../HTML/MyInput";
import { useClassesSessionContext } from "../../store/classSession-contex";

type ModalBookSessionProps = {
	session: SessionItem;
	onDone: () => void;
};

const ModalBookSession: FC<ModalBookSessionProps> = (obProps) => {
	const { session, onDone } = obProps;
	const refModal = useRef<ModalHandle>(null);
	const classesContext = useClassesSessionContext();

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const rawFormData = new FormData(event.currentTarget);
		const formData = Object.fromEntries(rawFormData);
		console.warn({ formData });

		classesContext.bookSession(session);
		onDone();
	};

	useEffect(() => {
		if (refModal.current) {
			refModal.current.open();
		}
	}, []);

	return (
		<MyModal
			ref={refModal}
			onClose={onDone}
		>
			<h2>Book Session</h2>
			<form onSubmit={handleSubmit}>
				<MyInput
					label="Your name"
					id="name"
					name="name"
					type="text"
				/>
				<MyInput
					label="Your email"
					id="email"
					name="email"
					type="email"
				/>
				<p className="actions">
					<Button
						type="button"
						textOnly
						onClick={onDone}
					>
						Cancel
					</Button>
					<Button>Book Session</Button>
				</p>
			</form>
		</MyModal>
	);
};

export default ModalBookSession;
