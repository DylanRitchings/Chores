import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Table,Input } from 'reactstrap';
import ChoreComp from './ChoreComp'
const ChoreTableComp = (props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Chore</th>
          <th>Due</th>
          <th>Assigned to</th>

        </tr>
      </thead>
      <tbody>
        <ChoreComp/>
      </tbody>
    </Table>
  );
}
export default ChoreTableComp;
