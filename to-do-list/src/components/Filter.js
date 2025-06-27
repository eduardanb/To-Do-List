import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/actions';
import { motion } from 'framer-motion';

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
        <motion.button
          transition={{duration:0.5}}
          whileHover={{scale: 1.1}}
          key={filter.value}
          onClick={() => dispatch(setFilter(filter.value))}
          className={`filter-button ${currentFilter === filter.value ? 'active' : ''}`}
        >
          {filter.label}
        </motion.button>
      ))}
    </div>
  );
};

export default Filter;