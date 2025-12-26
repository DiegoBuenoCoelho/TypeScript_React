import type { FC, ReactNode } from "react";

interface CourseGoalsProps {
    id: number;
    title: string;
    description: string;
    children: ReactNode;
    fnDeleteGoal: (id: number) => void;
};

const CourseGoals: FC<CourseGoalsProps> = ({ id, title, description, children, fnDeleteGoal }) => {
    return (
        <article key={id}>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div>{children}</div>
            </div>
            <button onClick={() => fnDeleteGoal(id)}>Delete</button>
        </article>
    );

};

export default CourseGoals;