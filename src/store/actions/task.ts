/**
 * Список действий
 *
 * @property {string} AddTask добавление
 * @property {string} RemoveTask удаление
 */
export const ACTIONS = {
  AddTask: 'ADD_TASK',
  RemoveTask: 'REMOVE_TASK',
};

/**
 * Добавление новой задачи
 *
 * @param task задача
 * @returns action
 */
export const addTask = (task: ITask): TaskAction => ({
  type: ACTIONS.AddTask,
  task: task,
});

/**
 * Удаление задачи
 *
 * @param task задача
 * @returns action
 */
export const removeTask = (task: ITask): TaskAction => ({
  type: ACTIONS.RemoveTask,
  task: task,
});
