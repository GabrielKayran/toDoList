import { PlusCircle } from '@phosphor-icons/react';
import styles from './CreateBar.module.css';
import { useState } from 'react';
import { Task } from './List';

interface CreateBarProps {
  onTaskCreate: (newTask: Task) => void;
}

export function CreateBar({ onTaskCreate }: CreateBarProps) {
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };


  const handleCreateTask = () => {
    if (newTask.trim() !== '') {
      onTaskCreate({
        id: Date.now().toString(),
        content: newTask,
        isComplete: false,
      });

      setNewTask('');
    }
  };

  return (
    <div className={styles.createBar}>
      <input type="text" value={newTask}
        onChange={handleInputChange}
        placeholder="Adicionar uma nova tarefa" />
      <button type='button' onClick={handleCreateTask}>Criar <PlusCircle size={16} />
      </button>

    </div>
  )
}