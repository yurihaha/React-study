import React, { Component } from "react";
import "./App.css";
import HighCharts from "./High";
import Table from "./Table";
const characters = [
  {
    name: "하유리",
    job: "FE"
  },
  {
    name: "김도윤",
    job: "FE"
  },
  {
    name: "진장연",
    job: "FE"
  }
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [
        {
          name: "하유리"
        }
      ],
      data: [
        [-9.9, 10.3],
        [-8.6, 8.5],
        [-10.2, 11.8],
        [-1.7, 12.2],
        [-0.6, 23.1],
        [3.7, 25.4],
        [6.0, 26.2],
        [6.7, 21.4],
        [3.5, 19.5],
        [-1.3, 16.0],
        [-8.7, 9.4],
        [-9.0, 8.6]
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <HighCharts data={this.state.data} />
        <Table characterData={characters} />
      </div>
    );
  }
}
export default App;
