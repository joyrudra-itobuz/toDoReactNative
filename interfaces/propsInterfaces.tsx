export interface Task {
  id: string;
  task: string;
  isCompleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface TaskProps extends Task {
  handleDeleteTask: (id: string) => void;
}
