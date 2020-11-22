import React from 'react';
import '../App.css';
import { Layout } from 'antd';
const { Content } = Layout;

function IplSchedule() {
  return (
    <div className="App">
<Content style={{ padding: '0 50px' }}>
<div style={{
    minHeight:'280px',
    padding:'24px',
    background:'#fff',
}}>
<h2 className="text-center"
style={{
  background:'#fddc5c',
}}>
<b> Game Schedule </b></h2>
<table class="table table-hover"
style={{
  textAlign: 'center'
}}>
  <thead>
    <tr style={{
      fontWeight: 'bold',
    }}>
      <th scope="col">Date</th>
      <th scope="col">Match</th>
      <th scope="col">Time</th>
      <th scope="col">Place</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">September 19, Saturday</th>
      <td>Mumbai Indians vs Chennai Super Kings</td>
      <td>7:30 PM</td>
      <td>Abu Dhabi</td>
    </tr>
    <tr>
      <th scope="row">September 19, Saturday</th>
      <td>Mumbai Indians vs Chennai Super Kings</td>
      <td>7:30 PM</td>
      <td>Abu Dhabi</td>
    </tr>
    <tr>
      <th scope="row">September 19, Saturday</th>
      <td>Mumbai Indians vs Chennai Super Kings</td>
      <td>7:30 PM</td>
      <td>Abu Dhabi</td>
    </tr>
    <tr>
      <th scope="row">September 19, Saturday</th>
      <td>Mumbai Indians vs Chennai Super Kings</td>
      <td>7:30 PM</td>
      <td>Abu Dhabi</td>
    </tr>
    <tr>
      <th scope="row">September 19, Saturday</th>
      <td>Mumbai Indians vs Chennai Super Kings</td>
      <td>7:30 PM</td>
      <td>Abu Dhabi</td>
    </tr>
    <tr>
      <th scope="row">September 19, Saturday</th>
      <td>Mumbai Indians vs Chennai Super Kings</td>
      <td>7:30 PM</td>
      <td>Abu Dhabi</td>
    </tr>


  </tbody>
</table>

</div>
  
</Content>

    </div>
  );
}

export default IplSchedule;
