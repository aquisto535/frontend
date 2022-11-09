import "./App.css";

//JSX
function App() {
  const name = "리액트";

  return (
    <>
      {/* 주석을 작성합니다. JSX 주석입니다. */}
      <div classname="test">{name}</div>
      <input />
      <br />
      <p />
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
