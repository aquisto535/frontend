import "./App.css";
import MySubject from "./mysubject";
import MyContent from "./mycontent";
import MyTopic from "./mytopic";

//JSX
function App() {
  return (
    <>
      {/* <Mycomponent name="React">자바스크립트</Mycomponent> */}

      <MySubject title="Node.js" sub="server side web"></MySubject>
      <MyContent title="Node.js" desc="Node.js is good"></MyContent>
      <MyTopic></MyTopic>
    </>
  );
}

// 자바스크립트
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <MySubject />
//         <MyTopic></MyTopic>
//         <MyContent></MyContent>
//       </div>
//     );
//   }
// }

export default App;
