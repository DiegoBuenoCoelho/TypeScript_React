import { FC } from "react";
import Button from "../HTML/Button";

export type SessionItem = {
	id: string;
	title: string;
	summary: string;
	image: string;
	duration: number;
	date: string;
};

type SessionItemProps = SessionItem;

const SessionItem: FC<SessionItemProps> = (obProps) => {
	const { image, title, summary, id } = obProps;

	return (
		<article className="session-item">
			<img
				src={image}
				alt={title}
			/>
			<div className="session-data">
				<div>
					<h3>{title}</h3>
					<p>{summary}</p>
				</div>
				<p className="actions">
					<Button to={id}>Learn More</Button>
				</p>
			</div>
		</article>
	);
};

export default SessionItem;
