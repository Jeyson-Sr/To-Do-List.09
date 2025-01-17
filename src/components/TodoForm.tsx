import React, { useState } from 'react';
import { Calendar, PlusCircle, HardHat } from 'lucide-react';

interface TodoFormProps {
  onAdd: (text: string, priority: 'baja' | 'media' | 'alta', dueDate?: Date) => void;
}

export function TodoForm({ onAdd }: TodoFormProps) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<'baja' | 'media' | 'alta'>('media');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    
    onAdd(text, priority, dueDate ? new Date(dueDate) : undefined);
    setText('');
    setPriority('media');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 animate-fadeIn">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="¡Agregar nueva tarea!"
            className="w-full px-4 py-3 rounded-lg border-2 border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 pl-12 bg-white shadow-lg"
          />
          <HardHat className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-500" />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 font-bold shadow-lg"
        >
          <PlusCircle size={24} />
          ¡AGREGAR!
        </button>
      </div>
      <div className="flex gap-4 items-center">
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as 'baja' | 'media' | 'alta')}
          className="px-4 py-3 rounded-lg border-2 border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white shadow-lg font-semibold"
        >
          <option value="baja">🟢 Prioridad Baja</option>
          <option value="media">🟡 Prioridad Media</option>
          <option value="alta">🔴 Prioridad Alta</option>
        </select>
        <div className="flex items-center gap-2 bg-white rounded-lg border-2 border-yellow-400 px-4 py-2 shadow-lg">
          <Calendar size={24} className="text-yellow-500" />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="px-3 py-1 focus:outline-none"
          />
        </div>
      </div>
    </form>
  );
}