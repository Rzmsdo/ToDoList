import { type Todo } from "@/type";

interface Props {
  todos: Todo[];
}

export const Footer: React.FC<Props> = ({ todos }) => {
  const activeCount = todos.filter((todo) => !todo.completed).length;
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> tareas pendientes
      </span>
    </footer>
  );
};
