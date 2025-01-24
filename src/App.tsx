// import React from 'react';
import { TodoForm } from "./components/TodoForm";
import { TodoItem } from "./components/TodoItem";
import { TodoStats } from "./components/TodoStats";
import { TodoFilters } from "./components/TodoFilters";
import { useTodos } from "./hooks/useTodos";

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, filter, setFilter, stats } =
    useTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-yellow-500 p-3 rounded-xl shadow-lg"></div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800">
              🗂️ ¡LISTA DE TAREAS!
              </h1>
              <p className="text-gray-600 text-lg">
                Organiza tus proyectos de la mejor manera
              </p>
            </div>
          </div>

          <TodoStats
            total={stats.total}
            completed={stats.completed}
            remaining={stats.remaining}
          />

          <TodoForm onAdd={addTodo} />

          <TodoFilters filter={filter} onFilterChange={setFilter} />

          <div className="space-y-4">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
            {todos.length === 0 && (
              <div className="text-center py-12 bg-gray-50 rounded-xl">
                <p className="text-xl text-gray-600">
                  ¡No hay tareas! ¡Comienza a construir tu lista!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
