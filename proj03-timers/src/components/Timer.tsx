import { FC } from 'react';
import { type Timer as TimerProps } from '../store/timers-context.tsx';
import Container from './UI/Container.tsx';

export const Timer: FC<TimerProps> = ({ name, duration }) => {
	return (
		<Container as="article">
			<h2>{name}</h2>
			<p>Duration: {duration} seconds</p>
		</Container>
	);
};
