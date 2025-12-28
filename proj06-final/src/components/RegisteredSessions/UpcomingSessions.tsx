import { FC, useEffect, useRef } from "react";
import MyModal, { type ModalHandle } from "../HTML/MyModal";
import Button from "../HTML/Button";
import { useClassesSessionContext } from "../../store/classSession-contex";
import UpcomingSession from "./UpcomingSession";

type UpcomingSessionsProps = {
	onClose: () => void; // onClose is accepted to "tell" the parent component that the UpcomingSessions component should be removed from the DOM
};

const UpcomingSessions: FC<UpcomingSessionsProps> = (obProps) => {
	const { onClose } = obProps;
	const refModal = useRef<ModalHandle>(null);
	const classesContext = useClassesSessionContext();

	const hasRegisteredSessions = !!classesContext.upcomingClassSessions.length;

	const handleCancelSession = (classId: string) => {
		classesContext.cancelSession(classId);
	};

	// useEffect is used to open the Modal via its exposed `open` method when the component is mounted
	useEffect(() => {
		if (refModal.current) {
			refModal.current.open();
		}
	}, []);

	return (
		<MyModal
			ref={refModal}
			onClose={onClose}
		>
			<h3
				onClick={() => {
					refModal?.current?.sayHello();
				}}
			>
				Upcoming Sessions
			</h3>
			{!hasRegisteredSessions && <p>No registered Sessions, cabron</p>}
			{hasRegisteredSessions && (
				<ul>
					{classesContext.upcomingClassSessions.map((session) => (
						<li key={session.id}>
							<UpcomingSession
								session={session}
								onCancel={() => handleCancelSession(session.id)}
							/>
						</li>
					))}
				</ul>
			)}
			<p className="actions">
				<Button onClick={onClose}>Close</Button>
			</p>
		</MyModal>
	);
};

export default UpcomingSessions;
