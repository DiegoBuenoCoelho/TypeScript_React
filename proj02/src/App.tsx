import { useRef } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Form, { type FormHandle } from "./components/Form";

function App() {
  const refName = useRef<HTMLInputElement>(null);
  const refAge = useRef<HTMLInputElement>(null);
  const refForm = useRef<FormHandle>(null);

  const handleSave = (formData: unknown) => {
    const extractedData = formData as { name: string; age: number; };
    console.warn({ extractedData });
    refForm.current?.clear();
  };

  return (
    <main>
      <Form onSave={handleSave} thisRef={refForm} >
        <Input id="name" name="name" label="Your Name" type="text" ref={refName} />
        <Input id="age" name="age" label="Your Age" type="number" ref={refAge} />
        <Button>Save</Button>
      </Form>
    </main>
  );
}

export default App;
