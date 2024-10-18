import { type Todo as TodoType, type TodoId } from "@/type";

interface Props extends TodoType {
  onToggleCompleteTodo: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void;
  oneRemoveTodo: ({ id }: TodoId) => void;
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  oneRemoveTodo,
  onToggleCompleteTodo,
}) => {
  const handleToggleComplete = () => {
    onToggleCompleteTodo({ id, completed: !completed });
  };
  return (
    <div className="view" onClick={handleToggleComplete}>
      <label className={completed ? "completed" : ""}>{title}</label>
      <button
        className="destroy"
        onClick={(event) => {
          event.stopPropagation();
          oneRemoveTodo({ id });
        }}
      ></button>
    </div>
  );
};
