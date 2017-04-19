import React, { PropTypes } from 'react'

const TodoCount = ({ activeCount }) => (
  <span className="todo-count">
    <strong>{activeCount || 'No'}</strong>
    {activeCount === 1 ? ' item ' : ' items '}
    left
  </span>
)

TodoCount.propTypes = {
  activeCount: PropTypes.number.isRequired
}

export default TodoCount
