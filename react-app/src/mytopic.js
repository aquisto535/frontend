import React, { Component } from "react";

class MyTopic extends Component {
  render() {
    let lists = [];
    let data = this.props.data;
    let i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a href={data[i].id}>{data[i].title}</a>
        </li>
      );
      i = i + 1;
    }
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

// function MyTopic() {
//   return (
//     <div className="App">
//       <header>
//         <h1>WEB</h1>
//         world wide web
//       </header>
//     </div>
//   );
// }

export default MyTopic;
