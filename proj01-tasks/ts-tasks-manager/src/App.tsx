import './App.css';
import Header from './components/Header';
import myIcon from "./assets/react.svg";
import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList';
import FormNewGoal from './components/FormNewGoal';
import InfoBox from './components/InfoBox';

export interface CourseGoal {
	id: number;
	title: string;
	description: string;
};


function App() {
	const [goals, setGoals] = useState<CourseGoal[]>([]);

	const handleAddGoal = ({ title, description }: { title: string; description: string; }) => {
		console.log({ title, description });
		const newCourseGoal: CourseGoal = {
			id: goals.length + 1,
			title: title,
			description: description
		};
		setGoals((myGoals) => { return [...myGoals, newCourseGoal]; });
	};

	const handleDeleteGoal = (id: number): void => {
		const arWithoutGoal = goals.filter(a => a.id !== id);
		setGoals(arWithoutGoal);
	};

	return (
		<div className='appMain'>
			<Header image={{ src: myIcon, alt: "My Logo" }} >
				THIS IS OUR APP
			</Header>
			<FormNewGoal fnSubmitGoal={handleAddGoal} />
			{/* <InfoBox mode={null}>This is an info message.</InfoBox> */}
			<main>
				<CourseGoalList
					goals={goals}
					fnDeleteGoal={handleDeleteGoal}
				/>
			</main>
		</div>
	);
};

export default App;
