// import React from 'react';
import { HardHat, CheckCircle, AlertTriangle } from 'lucide-react';

interface TodoStatsProps {
  total: number;
  completed: number;
  remaining: number;
}

export function TodoStats({ total, completed, remaining }: TodoStatsProps) {
  return (
    <div className="grid grid-cols-3 gap-6 mb-8">
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl flex items-center gap-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
        <HardHat size={40} className="text-white" />
        <div>
          <p className="text-blue-100 font-medium">Total Tareas</p>
          <p className="text-3xl font-bold text-white">{total}</p>
        </div>
      </div>
      <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl flex items-center gap-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
        <CheckCircle size={40} className="text-white" />
        <div>
          <p className="text-green-100 font-medium">Completadas</p>
          <p className="text-3xl font-bold text-white">{completed}</p>
        </div>
      </div>
      <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-6 rounded-xl flex items-center gap-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
        <AlertTriangle size={40} className="text-white" />
        <div>
          <p className="text-yellow-100 font-medium">Pendientes</p>
          <p className="text-3xl font-bold text-white">{remaining}</p>
        </div>
      </div>
    </div>
  );
}