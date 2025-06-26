import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/actions';

const Filter = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(state => state.filter);

  const filters = [
    { value: 'all', label: 'Todas' },
    { value: 'completed', label: 'Concluídas' },
    { value: 'active', label: 'Pendentes' }
  ];

  return (
    <div className="filter-container">
      {filters.map(filter => (
        <button
          key={filter.value}
          onClick={() => dispatch(setFilter(filter.value))}
          className={`filter-button ${currentFilter === filter.value ? 'active' : ''}`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;