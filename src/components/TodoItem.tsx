// import React from 'react';
import { Check, Trash2, Clock, Hammer } from 'lucide-react';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const priorityColors = {
    baja: 'bg-green-100 border-green-400',
    media: 'bg-yellow-100 border-yellow-400',
    alta: 'bg-red-100 border-red-400',
  };

  const priorityText = {
    baja: '🟢 Baja',
    media: '🟡 Media',
    alta: '🔴 Alta',
  };

  return (
    <div
      className={`flex items-center gap-4 p-6 rounded-xl border-2 ${
        todo.completed ? 'bg-gray-50 border-gray-300' : priorityColors[todo.priority]
      } transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 animate-slideIn`}
    >
      <button
        onClick={() => onToggle(todo.id)}
        className={`w-8 h-8 rounded-full border-3 flex items-center justify-center ${
          todo.completed
            ? 'bg-yellow-500 border-yellow-500'
            : 'border-yellow-400 hover:border-yellow-500'
        } transition-transform duration-300 hover:scale-110`}
      >
        {todo.completed ? ( 
          <Check size={20} className="text-white" />
        ) : (
          <Hammer size={16} className="text-yellow-500" />
        )}
      </button>
      <div className="flex-1">
        <p
          className={`text-xl font-semibold ${
            todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
          }`}
        >
          {todo.text}
        </p>
        <div className="flex items-center gap-4 mt-2">
          <span className="text-sm font-medium text-gray-600">
            {priorityText[todo.priority]}
          </span>
          {todo.dueDate && (
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Clock size={14} />
              <span>
                Fecha límite: {new Date(todo.dueDate).toLocaleDateString()}
              </span>
            </div>
          )}
        </div>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-gray-500 hover:text-red-500 transition-all duration-300 hover:scale-110 p-2"
      >
        <Trash2 size={24} />
      </button>
    </div>
  );
}