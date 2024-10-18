import React from "react";
import { type Todo as TodoType, type ListOfTodos, type TodoId } from "@/type";
import { Todo } from "./Todo";

interface Props {
  todos: ListOfTodos;
  onToggleCompleteTodo: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void;
  onRemoveTodo: ({ id }: TodoId) => void;
}

export const TodosList: React.FC<Props> = ({
  todos,
  onRemoveTodo,
  onToggleCompleteTodo,
}) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onToggleCompleteTodo={onToggleCompleteTodo}
            oneRemoveTodo={onRemoveTodo}
          />
        </li>
      ))}
    </ul>
  );
};
