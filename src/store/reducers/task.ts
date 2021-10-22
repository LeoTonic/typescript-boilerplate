import { ACTIONS } from '../actions/task';

const initialState: TaskState = {
  tasks: [
    {
      id: 1,
      title: 'This is first task',
    },
    {
      id: 2,
      title: 'This is second task',
    },
  ],
};

/**
 * Redux reducer
 *
 * @param state состояние
 * @param action действие
 * @returns state
 */
const taskReducer = (state: TaskState = initialState, action: TaskAction): TaskState => {
  switch (action.type) {
    case ACTIONS.AddTask:
      return {
        ...state,
        tasks: state.tasks.concat(action.task),
      };
    case ACTIONS.RemoveTask:
      const modifiedTasks: ITask[] = state.tasks.filter(
        (task: ITask) => task.id !== action.task.id,
      );
      return {
        ...state,
        tasks: modifiedTasks,
      };
  }
  return state;
};

export default taskReducer;
