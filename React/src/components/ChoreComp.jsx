import React from 'react';
import { Input,Button } from 'reactstrap';

const ChoreComp = (props) => {
  return(
    <>
      <tr>
        <td>test</td>
        <td>test2</td>
        <td>test3</td>
        <th><Button>Expand</Button><Input type="checkbox" />{' '}</th>
      </tr>
    </>
  )
}
export default ChoreComp;
