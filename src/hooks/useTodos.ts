import { useState, useEffect } from "react";
import { Todo } from "../types/todo";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState<"todas" | "activas" | "completadas">(
    "todas"
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (
    text: string,
    priority: Todo["priority"],
    dueDate?: Date
  ) => {
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        text,
        completed: false,
        priority,
        dueDate,
      },
    ]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar esta tarea?")) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "activas") return !todo.completed;
    if (filter === "completadas") return todo.completed;
    return true;
  });

  const stats = {
    total: todos.length,
    completed: todos.filter((todo) => todo.completed).length,
    remaining: todos.filter((todo) => !todo.completed).length,
  };

  return {
    todos: filteredTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    filter,
    setFilter,
    stats,
  };
}
