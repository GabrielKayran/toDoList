import { Check, Trash } from '@phosphor-icons/react';
import { CreateBar } from './CreateBar';
import styles from './List.module.css';
import { useState } from 'react';

export interface Task {
  id: string;
  content: string;
  isComplete: boolean;
}

export function List() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleTaskCreate = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleTaskToggle = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  const handleRemove = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className={styles.list}>
      <CreateBar onTaskCreate={handleTaskCreate} />
      <header>
        <aside>
          <p>Tarefas criadas</p>
          <span>{tasks.length}</span>
        </aside>

        <aside>
          <p>Concluídas</p>
          <span>{tasks.filter((task) => task.isComplete).length}/{tasks.length}</span>
        </aside>
      </header>
      <main>
        {tasks.length === 0 ? (
          <div className={styles.empty}>
            <img src="\src\assets\clipboard.svg" alt="ícone de prancheta" />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        ) : (
          <div>
            {tasks.map((task) => (
              <div key={task.id} className={styles.tasks}>
                <div>
                  <label htmlFor='checkbox' onClick={() => handleTaskToggle(task.id)} >
                    <input
                      type="checkbox"
                      checked={task.isComplete}
                      onChange={() => handleTaskToggle(task.id)}
                    />
                    <span className={`${styles.checkbox} ${task.isComplete ? styles.checkboxChecked : styles.checkboxUnchecked}`}>
                      {task.isComplete && <Check size={12} color='white' />}
                    </span>
                    <p className={`${styles.paragraph} ${task.isComplete ? styles.paragraphChecked : ''}`}>
                      {task.content}
                    </p>
                  </label>
                </div>
                <button className={styles.removeButton} onClick={() => handleRemove(task.id)}>
                  <Trash size={16} color="#808080" />
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}