import { NavLink } from "react-router-dom";
import Button from "../components/HTML/Button";
import { useState } from "react";
import UpcomingSessions from "../components/RegisteredSessions/UpcomingSessions";

const Header = () => {
	const [upcomingSessionsVisible, setUpcomingSessionsVisible] = useState<boolean>(false);

	const showUpcomingSessions = () => {
		setUpcomingSessionsVisible(true);
	};

	const hideUpcomingSessions = () => {
		setUpcomingSessionsVisible(false);
	};

	return (
		<>
			{upcomingSessionsVisible && <UpcomingSessions onClose={hideUpcomingSessions} />}
			<header id="main-header">
				<h1>ReactMentoring</h1>
				<nav>
					<ul>
						<li>
							<NavLink
								to="/"
								className={({ isActive }) => (isActive ? "active" : "")}
								end
							>
								Our Mission
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/sessions"
								className={({ isActive }) => (isActive ? "active" : "")}
							>
								Browse Sessions
							</NavLink>
						</li>
						<li>
							<Button
								onClick={showUpcomingSessions}
								textOnly={false}
							>
								Upcoming Sessions
							</Button>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Header;
