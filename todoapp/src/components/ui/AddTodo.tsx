import { Input } from "./input";
import { Button } from "./button";
import React, { useState, type ChangeEvent, type FormEvent } from "react";

type AddTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const AddTodo = ({ onAddTodo }: AddTodoProps) => {
  const [text, setText] = useState<string>("");

  const handleButtonText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    onAddTodo(text);
    setText("");
  };
  return (
    <form onSubmit={submitHandler} className="flex items-center gap-5">
      <Input
        onChange={handleButtonText}
        className="w-fit"
        type="text"
        value={text}
        placeholder="Write a new todo..."
      />
      <Button type="submit">Add Todo</Button>
    </form>
  );
};

export default AddTodo;
