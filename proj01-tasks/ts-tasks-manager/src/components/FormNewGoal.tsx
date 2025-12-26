import { useRef, type FormEvent } from "react";

interface FormNewGoalProps {
    fnSubmitGoal({ title, description }: { title: string, description: string; }): void;
}

const FormNewGoal = ({ fnSubmitGoal }: FormNewGoalProps) => {

    const inputTitle = useRef<HTMLInputElement>(null);
    const inputDescription = useRef<HTMLInputElement>(null);

    //UsingFormData
    // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     const obFormData = new FormData(event.currentTarget);
    //     const title = obFormData.get("title") as string;
    //     const description = obFormData.get("description") as string;
    //     fnSubmitGoal({ title, description });
    //      //The inputs need to have name property
    //      //<input id="title" type="text" name="title" />
    //      //<input id="description" type="text" name="description" />
    // };


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const myTitle = inputTitle.current!.value;
        const myDescription = inputDescription.current!.value;

        // console.warn({ inputTitle, inputDescription });

        fnSubmitGoal({
            title: myTitle,
            description: myDescription
        });

        event.currentTarget.reset();

    };

    return (<form onSubmit={handleSubmit}>
        <p>
            <label>Goal Title:</label>
            <input id="title" type="text" ref={inputTitle} name="title" />
        </p>
        <p>
            <label>Goal Description:</label>
            <input id="description" type="text" ref={inputDescription} name="description" />
        </p>
        <button >Add Goal</button>
    </form>);
};

export default FormNewGoal;