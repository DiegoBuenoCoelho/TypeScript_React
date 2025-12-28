import { FC } from "react";
import SessionItem, { type SessionItem as SessionItemType } from "./SessionItem";

type SessionsListProps = {
	listOfSessions: Array<SessionItemType>;
};

const SessionsList: FC<SessionsListProps> = (obProps) => {
	const { listOfSessions } = obProps;

	return (
		<ul id="sessions-list">
			{listOfSessions.map((thisSession) => (
				<li key={thisSession.id}>
					<SessionItem {...thisSession} />
				</li>
			))}
		</ul>
	);
};

export default SessionsList;
