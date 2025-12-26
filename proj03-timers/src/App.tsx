import AddTimer from './components/AddTimer.tsx';
import Header from './components/Header.tsx';
import { TimersList } from './components/TimersList.tsx';
import { TimersContextProvider } from './store/timers-context.tsx';

function App() {
	return (
		<TimersContextProvider>
			<Header />
			<main>
				<AddTimer />
				<TimersList />
			</main>
		</TimersContextProvider>
	);
}

export default App;
