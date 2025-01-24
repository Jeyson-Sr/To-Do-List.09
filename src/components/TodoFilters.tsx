// import React from 'react';

interface TodoFiltersProps {
  filter: "todas" | "activas" | "completadas";
  onFilterChange: (filter: "todas" | "activas" | "completadas") => void;
}

export function TodoFilters({ filter, onFilterChange }: TodoFiltersProps) {
  return (
    <div className="flex gap-3 mb-6">
      {(
        [
          { id: "todas", label: "📋 Todas" },
          { id: "activas", label: "🕒 Activas" },
          { id: "completadas", label: "✅ Completadas" },
        ] as const
      ).map((f) => (
        <button
          key={f.id}
          onClick={() => onFilterChange(f.id)}
          className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 ${
            filter === f.id
              ? "bg-yellow-500 text-white shadow-lg"
              : "bg-white text-gray-700 hover:bg-yellow-100 border-2 border-yellow-400"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
