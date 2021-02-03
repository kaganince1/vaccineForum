import React, { Component } from "react";
import { Table } from "reactstrap";

export default class ListPoint extends Component {
  render() {
    return (
      <div>
        <Table dark>
          <thead>
            <tr>
              <th>#</th>
              <th>Aşı İsmi</th>
              <th>Puan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <th>BioNTech/Pfizer</th>
              <th>4.9</th>
            </tr>
            <tr>
              <th>2</th>
              <th>Moderna</th>
              <th>4.1</th>
            </tr>
            <tr>
              <th>3</th>
              <th>AstraZeneca</th>
              <th>3.5</th>
            </tr>
            <tr>
              <th>4</th>
              <th>CoronaVac</th>
              <th>3.3</th>
            </tr>
            <tr>
              <th>5</th>
              <th>Sputnik V</th>
              <th>2.9</th>
            </tr>
            <tr>
              <th>6</th>
              <th>CanSinoBIO</th>
              <th>2.3</th>
            </tr>
            <tr>
              <th>7</th>
              <th>Sinopharm</th>
              <th>1.7</th>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
