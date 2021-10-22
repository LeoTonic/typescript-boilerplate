import React from 'react';

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
const Box = ({ title }: Props): JSX.Element => <div>{title}</div>;

export default Box;
