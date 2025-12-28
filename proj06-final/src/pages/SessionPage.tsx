import { useParams } from "react-router-dom";
import { SESSIONS } from "../dummy-sessions.ts";
import Button from "../components/HTML/Button.tsx";
import { FormEvent, useState } from "react";
import ModalBookSession from "../components/Sessions/ModalBookSession.tsx";

const SessionPage = () => {
	const params = useParams<{ id: string }>();
	const sessionId = params.id;
	const loadedSession = SESSIONS.find((session) => session.id === sessionId);

	const [isBooking, setIsBooking] = useState(false);

	const handleBookSessionClick = (e: FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		console.log("handleBookSessionClick CLICK");
		handleStartBooking();
	};

	const handleStartBooking = () => {
		setIsBooking(true);
	};

	const handleStopBooking = () => {
		setIsBooking(false);
	};

	if (!loadedSession) {
		return (
			<main id="session-page">
				<p>No session found!</p>
			</main>
		);
	}

	return (
		<main id="session-page">
			{isBooking && (
				<ModalBookSession
					session={loadedSession}
					onDone={handleStopBooking}
				/>
			)}
			<article>
				<header>
					<img
						src={loadedSession.image}
						alt={loadedSession.title}
					/>
					<div>
						<h2>{loadedSession.title}</h2>
						<time dateTime={new Date(loadedSession.date).toISOString()}>
							{new Date(loadedSession.date).toLocaleDateString("en-US", {
								day: "numeric",
								month: "short",
								year: "numeric",
							})}
						</time>
						<p>
							{/* Todo: Add button that opens "Book Session" dialog / modal */}
							<Button onClick={handleBookSessionClick}>Book Session</Button>
						</p>
					</div>
				</header>
				<p id="content">{loadedSession.description}</p>
			</article>
		</main>
	);
};

export default SessionPage;
