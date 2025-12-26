import { FC, useEffect, useRef, useState } from "react";
import { useTimersContext, type Timer as TimerProps } from "../store/timers-context.tsx";
import Container from "./UI/Container.tsx";

export const Timer: FC<TimerProps> = ({ name, duration }) => {
	const ONE_SECOND = 1000;
	const refTimerInterval = useRef<number | null>(null);
	const [thisCounter, setThisCounter] = useState(duration * ONE_SECOND);
	const { isRunning } = useTimersContext();

	console.log(thisCounter, refTimerInterval.current);
	if (thisCounter <= 0 && refTimerInterval.current) {
		console.log("executed A");
		clearInterval(refTimerInterval.current);
	}

	useEffect(() => {
		let thisTimer: number;
		if (isRunning) {
			thisTimer = setInterval(() => {
				if (thisCounter > 0) {
					setThisCounter((prevTime) => {
						if (prevTime <= 0) {
							return prevTime;
						}
						return prevTime - 100;
					});
				}
			}, 100);

			refTimerInterval.current = thisTimer;
		} else {
			if (refTimerInterval.current) {
				clearInterval(refTimerInterval.current);
			}
		}

		return () => clearInterval(thisTimer);
	}, [isRunning]);

	const formattedRemainingTime = (thisCounter / ONE_SECOND).toFixed(2);

	return (
		<Container as="article">
			<h2>{name}</h2>
			<p>Duration: {duration} seconds</p>
			<p>
				<progress
					max={duration * 1000}
					value={thisCounter}
				/>
			</p>
			<p>{formattedRemainingTime}</p>
		</Container>
	);
};
