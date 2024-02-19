import React from 'react';

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type='text'
          required='required'
          placeholder='4 digit Year'
          name='year'
          value={editFormData.year}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td>
        <input
          type='text'
          required='required'
          placeholder='Label (Month) '
          name='label'
          value={editFormData.label}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Average Completed'
          name='completed'
          value={editFormData.completed}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Average Number in Cohort'
          name='cohort'
          value={editFormData.cohort}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Average Overlaps'
          name='overlaps'
          value={editFormData.overlaps}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type='submit'>Save</button>
        <button type='button' onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
