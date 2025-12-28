import { FC } from "react";
import { type SessionItem } from "../Sessions/SessionItem";
import Button from "../HTML/Button";

type UpcomingSessionProps = {
	session: SessionItem;
	onCancel: () => void;
};

const UpcomingSession: FC<UpcomingSessionProps> = (obProps) => {
	const { session, onCancel } = obProps;

	return (
		<article className="upcoming-session">
			<div>
				<h3>{session.title}</h3>
				<p>{session.summary}</p>
				<time dateTime={new Date(session.date).toISOString()}>
					{new Date(session.date).toLocaleDateString("en-US", {
						day: "numeric",
						month: "short",
						year: "numeric",
					})}
				</time>
			</div>
			<p className="actions">
				<Button
					textOnly
					onClick={onCancel}
				>
					Cancel
				</Button>
			</p>
		</article>
	);
};

export default UpcomingSession;
