/**
 * Root application state
 */
interface ApplicationState {
  task: TaskState;
}

interface ITask {
  id: number;
  title: string;
}

type TaskState = {
  tasks: ITask[];
};

type TaskAction = {
  type: string;
  task: ITask;
};
