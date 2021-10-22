import React from 'react';
import Box from '@common/box';

interface Props {
  src?: string;
}

/**
 * Элемент
 *
 * @param {object} props
 * @param {string} [props.src] link
 * @returns {JSX.Element}
 */
const Link = ({ src = 'Empty name' }: Props): JSX.Element => (
  <div>
    <div>{src}</div>
    <Box title="Inner box" />
  </div>
);

export default Link;
