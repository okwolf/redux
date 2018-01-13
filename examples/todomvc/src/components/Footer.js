import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TodoCount from './TodoCount'
import ClearButton from './ClearButton'
import { FILTER_TITLES } from '../constants/TodoFilters'

const filterItemWith = ({ filter: selectedFilter, onShow }) => filter => (
  <li key={filter}>
    <a
      className={classnames({ selected: filter === selectedFilter })}
      style={{ cursor: 'pointer' }}
      onClick={() => onShow(filter)}
    >
      {FILTER_TITLES[filter]}
    </a>
  </li>
)

const Footer = props => (
  <footer className="footer">
    <TodoCount {...props} />
    <ul className="filters">
      {Object.keys(FILTER_TITLES).map(filterItemWith(props))}
    </ul>
    <ClearButton {...props} />
  </footer>
)

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired
}

export default Footer
