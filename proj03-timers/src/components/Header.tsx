import Button from './UI/Button.tsx';
import { useTimersContext } from '../store/timers-context.tsx';
import { MouseEvent } from 'react';

export default function Header() {

  const obTimerContext = useTimersContext();

  const handleTimersClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (obTimerContext.isRunning) {
      obTimerContext.stopTimer();
    } else {
      obTimerContext.startTimers();
    }
  };

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button onClick={handleTimersClick}>{obTimerContext.isRunning ? 'Stop Timers' : 'Start Timers'}</Button>
    </header>
  );
}
