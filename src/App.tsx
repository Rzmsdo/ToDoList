import { useState } from "react";
import { TodosList } from "./components/TodosList";
import { TodoTitle, Todo, type TodoId, type Todo as TodoType } from "@/type";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./App.css";

const mockTodos: Todo[] = [
  {
    id: "1",
    title: "Bañar al perro",
    completed: false,
  },
  {
    id: "2",
    title: "Terminar trabajos pendientes",
    completed: false,
  },
  {
    id: "3",
    title: "Limpiar la cocina",
    completed: false,
  },
];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>(mockTodos);

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const handleAddTodo = (title: TodoTitle): void => {
    const newTodo: Todo = {
      title: title.title,
      id: crypto.randomUUID(),
      completed: false,
    };

    const newTodos: Todo[] = [...todos, newTodo];
    setTodos(newTodos);
  };

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo} />
      <TodosList
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={todos}
      />
      <Footer todos={todos} />
    </div>
  );
};

export default App;
