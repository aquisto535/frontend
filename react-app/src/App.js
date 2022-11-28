import "./App.css";
import { Component } from "react";
import MySubject from "./mysubject";
import MyContent from "./mycontent";
import MyTopic from "./mytopic";
import Counter from "./Counter";
import Say from "./Say";
import Event from "./Event";

//JSX
const App = () => {
  return (
    <>
      <Event>
        
      </Event>
    </>
  );
};

// 클래스형
// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       mode: "welcome",
//       welcome: { title: "welcome", desc: "반갑습니다." },
//       subject: { title: "web", desc: "worldwideweb" },
//       contents: [
//         { id: 1, title: "HTML", desc: "HTML is...." },
//         { id: 2, title: "CSS", desc: "CSS is...." },
//         { id: 3, title: "JavaScript", desc: "JavaScript is...." },
//       ],
//     };
//   }
//   render() {
//     console.log("MY Sub Render");
//     let _title,
//       _desc = null;

//     if (this.state.mode === "welcome") {
//       _title = this.state.welcome.title;
//       _desc = this.state.welcome.desc;
//     } else if (this.state.mode === "selected") {
//       _title = this.state.contents[0].title;
//       _desc = this.state.contents[0].desc;
//     }

//     return (
//       <div className="App">
//         <MySubject
//           title={this.state.subject.title}
//           sub={this.state.subject.desc}
//         />
//         <MyTopic data={this.state.contents} />
//         <MyContent title={_title} desc={_desc} />
//       </div>
//     );
//   }
// }

export default App;
