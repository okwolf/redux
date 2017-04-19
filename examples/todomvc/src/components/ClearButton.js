import React, { PropTypes } from 'react'

const ClearButton = ({ completedCount, onClearCompleted }) =>
  completedCount > 0 &&
  <button className="clear-completed" onClick={onClearCompleted}>
    Clear completed
  </button>

ClearButton.propTypes = {
  completedCount: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired
}

export default ClearButton
