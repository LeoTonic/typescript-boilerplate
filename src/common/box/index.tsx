import React, { useMemo, useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { addTask } from '~/store/actions/task';

interface Props {
  title: string;
}
/**
 * Элемент
 *
 * @param {object} props
 * @param {string} props.title
 * @returns {JSX.Element}
 */
const Box = ({ title }: Props): JSX.Element => {
  const taskState: TaskState = useSelector(
    (state: ApplicationState) => state.task,
    shallowEqual,
  );
  const tasks: readonly ITask[] = useMemo(() => taskState.tasks, [taskState]);
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(
      addTask({
        id: Math.random(),
        title: 'Only new task: '.concat(Math.random().toString()),
      }),
    );
  }, [dispatch]);

  return (
    <div>
      <div onClick={handleClick}>{title}</div>
      {tasks.map((item: ITask) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default Box;
