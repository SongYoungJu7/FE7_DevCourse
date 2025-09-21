import { useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export type ToDoMap = Map<number, string>;

export default function Todo() {
  const [toDos, setToDos] = useState<ToDoMap>(new Map());
  const addToDo = (text: string) => {
    setToDos((prev) => {
      const newToDos = new Map(prev);
      newToDos.set(prev.size + 1, text);
      return newToDos;
    });
  };
  const editToDo = (id: number, text: string) => {
    setToDos((prev) => {
      const newToDos = new Map(prev);
      newToDos.set(id, text);
      return newToDos;
    });
  };
  const deleteToDo = (id: number) => {
    setToDos((prev) => {
      const newToDos = new Map(prev);
      newToDos.delete(id);
      return newToDos;
    });
  };

  return (
    <>
      <div className="todo">
        <TodoHeader />
        {/* 할 일 등록  */}
        <TodoEditor addToDo={addToDo} />
        {/* 할 일 목록  */}
        <TodoList toDos={toDos} editToDo={editToDo} deleteToDo={deleteToDo} />
      </div>
    </>
  );
}
