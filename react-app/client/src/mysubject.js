import React, { Component } from "react";

class MySubject extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

// function MySubject() {
//   return (
//     <div className="App">
//       <header>
//         <h1>WEB</h1>
//         world wide web
//       </header>
//     </div>
//   );
// }

export default MySubject;
