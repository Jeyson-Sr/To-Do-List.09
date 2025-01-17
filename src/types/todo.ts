export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  priority: 'baja' | 'media' | 'alta';
  dueDate?: Date;
}