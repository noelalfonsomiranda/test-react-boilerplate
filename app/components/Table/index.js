import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CustomTable = styled.div`
  overflow-x: auto;

  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
  }
  th, td {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
  }
`

function Table({
  membersList,
  membersListLoading
}) {
  return (
    membersListLoading ?
    <p>loading...</p> :
    <CustomTable>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {
            membersList.map((item, index) => (
              <tr key={index}>
                <td>{item.get('id')}</td>
                <td>{item.get('employee_name')}</td>
                <td>{item.get('employee_salary')}</td>
                <td>{item.get('employee_age')}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </CustomTable>
  );
}

Table.propTypes = {
  item: PropTypes.any,
};

export default Table;
