import type { ReactNode } from "react";
import type { CourseGoal } from "../App";
import CourseGoals from "./CourseGoal";
import InfoBox from "./InfoBox";

interface CourseGoalsListProps {
    goals: CourseGoal[];
    fnDeleteGoal: (id: number) => void;
}

const CourseGoalList = ({ goals, fnDeleteGoal }: CourseGoalsListProps) => {
    if (!goals.length) {
        return (<InfoBox mode="info">No goals found.</InfoBox>);
    }

    let warningBox: ReactNode;
    if (goals.length > 4) {
        warningBox = <InfoBox severity="low" mode="warning">You have too many goals!</InfoBox>;
    }

    return (
        <>
            {warningBox}
            {goals.map((goal) => (
                <CourseGoals
                    key={goal.id}
                    id={goal.id}
                    title={goal.title}
                    description={goal.description}
                    children={""}
                    fnDeleteGoal={fnDeleteGoal}
                >
                </CourseGoals>
            ))}</>);
};

export default CourseGoalList;