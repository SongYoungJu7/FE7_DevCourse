import TodoListEmpty from "./TodoListEmpty";
import TodoListItem from "./TodoListItem";
import { ToDoMap } from "./Todo";

export default function TodoList(props: {
  toDos: ToDoMap;
  editToDo: (id: number, text: string) => void;
  deleteToDo: (id: number) => void;
}) {
  const { toDos, editToDo, deleteToDo } = props;
  return (
    <>
      <ul className="todo__list">
        {toDos.size === 0 ? (
          <TodoListEmpty />
        ) : (
          [...toDos].map((toDo) => (
            <TodoListItem
              toDo={toDo}
              editToDo={editToDo}
              deleteToDo={deleteToDo}
            />
          ))
        )}
      </ul>
    </>
  );
}
