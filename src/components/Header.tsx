import { type TodoTitle } from "@/type";
import { CreateTodo } from "./CreateTodo";

interface Props {
  onAddTodo: (todo: TodoTitle) => void;
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className="header">
      <h1>Todos</h1>

      <CreateTodo saveTodo={onAddTodo} />
    </header>
  );
};
