import React from 'react';
import '../App.css';

function Points() {
  return (
    <div className="App">
<div class="table-responsive text-nowrap container">
  <br />
<h2 className="text-center container"
style={{
    background:'#aefd6c',
  }}>
<b> Point Table </b></h2>

  <table class="table">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Team</th>
        <th scope="col">Pld</th>
        <th scope="col">Won</th>
        <th scope="col">Lost</th>
        <th scope="col">Tied</th>
        <th scope="col">N/R</th>
        <th scope="col">Net RR</th>
        <th scope="col">Pts</th>
        <th scope="col">Form</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mumbai Indians</td>
        <td>14</td>
        <td>9</td>
        <td>5</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>18</td>
        <td>W L W L L</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Mumbai Indians</td>
        <td>14</td>
        <td>9</td>
        <td>5</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>18</td>
        <td>W L W L L</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Mumbai Indians</td>
        <td>14</td>
        <td>9</td>
        <td>5</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>18</td>
        <td>W L W L L</td>
      </tr>
    </tbody>
  </table>

</div>

    </div>
  );
}

export default Points;
