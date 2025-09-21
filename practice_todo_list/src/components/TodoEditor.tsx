import { useState } from "react";
import Button from "./html/Button";
import Input from "./html/Input";

export default function TodoEditor(props: { addToDo: (text: string) => void }) {
  const { addToDo } = props;
  const [toDoText, setToDoText] = useState("");
  const changeToDoText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDoText(e.target.value);
  };
  const addBtnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    addToDo(toDoText);
    setToDoText("");
  };
  return (
    <>
      <form className="todo__form">
        <div className="todo__editor">
          <Input
            type="text"
            className="todo__input"
            placeholder="Enter Todo List"
            value={toDoText}
            onChange={changeToDoText}
          />
          <Button onClick={addBtnClick} className="todo__button" type="submit">
            Add
          </Button>
        </div>
      </form>
    </>
  );
}
