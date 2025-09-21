import { twMerge } from "tailwind-merge";
import Button from "./html/Button";
import Checkbox from "./html/Checkbox";
import SvgClose from "./svg/SvgClose";
import SvgPencil from "./svg/SvgPencil";
import { useState } from "react";

export default function TodoListItem(props: {
  toDo: [number, string];
  editToDo: (id: number, text: string) => void;
  deleteToDo: (id: number) => void;
}) {
  const { toDo, editToDo, deleteToDo } = props;
  const [id, text] = toDo;

  const [isEdit, setIsEdit] = useState(false);
  const [newToDo, setNewToDo] = useState(text);
  const [isDone, setIsDone] = useState(false);

  const editBtnClick = () => {
    setIsEdit((prev) => !prev);
    if (isEdit) editToDo(id, newToDo);
  };

  const toDoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewToDo(e.target.value);
  };

  const isDoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDone(e.target.checked);
  };

  const deleteBtnClick = () => {
    deleteToDo(id);
  };

  return (
    <>
      {/* 할 일이 완료되면 .todo__item--complete 추가 */}
      <li key={id} className={`todo__item`}>
        <Checkbox
          parentClassName={twMerge(
            "todo__checkbox-group",
            isEdit && "hidden",
            isDone && "todo__item--complete"
          )}
          type="checkbox"
          className="todo__checkbox"
          onChange={isDoneChange}
          checked={isDone}
        >
          {text}
        </Checkbox>
        {/* 할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출)  */}
        <input
          type="text"
          className={twMerge("todo__modify-input", !isEdit && "hidden")}
          value={newToDo}
          onChange={toDoChange}
        />
        <div className="todo__button-group">
          <Button className="todo__action-button" onClick={editBtnClick}>
            <SvgPencil />
          </Button>
          <Button className="todo__action-button" onClick={deleteBtnClick}>
            <SvgClose />
          </Button>
        </div>
      </li>
    </>
  );
}
