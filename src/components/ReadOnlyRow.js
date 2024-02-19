import React from 'react';

const ReadOnlyRow = ({ metric, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{metric.year} </td>
      <td>{metric.label}</td>
      <td>{metric.completed}</td>
      <td>{metric.cohort}</td>
      <td>{metric.overlaps}</td>
      <td>
        <button
          type='button'
          onClick={(event) => handleEditClick(event, metric)}
        >
          {' '}
          Edit
        </button>
        <button type='button' onClick={() => handleDeleteClick(metric.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
