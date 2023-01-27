import React, { Component } from "react";

class MyContent extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

// function MyContent() {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <a href="1.html">HTML</a>
//         </li>
//         <li>
//           <a href="2.html">CSS</a>
//         </li>
//         <li>
//           <a href="3.html">JavaScript</a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

export default MyContent;
