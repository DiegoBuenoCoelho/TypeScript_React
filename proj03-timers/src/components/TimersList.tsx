import { useTimersContext } from "../store/timers-context";
import { Timer } from "./Timer";

export const TimersList = () => {

	const obTimerContext = useTimersContext();

	const arTimers = obTimerContext.timers;

	return <ul>{arTimers.map(thisTimer => {
		return <li
			key={thisTimer.name}>
			<Timer {...thisTimer} />
		</li>;
	})}</ul>;
};
