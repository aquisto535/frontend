import "./App.css";
import React, { Component } from "react";
import Customer from "./components/customer";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Paper,
} from "@mui/material";

// import MySubject from "./mysubject";
// import MyContent from "./mycontent";
// import MyTopic from "./mytopic";
// import Counter from "./Counter";
// import Say from "./Say";
//import Event from "./Event";

//JSX
// const App = () => {
//   return (
//  <Customer/>
//   );
// };

class App extends Component {
  state = {
    customers: "",
  };

  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ customers: res }))
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/customers");
    const body = await response.json();
    return body;
  };

  render() {
    return (
      //하나의 요소만 덩그런히 있어서는 안됨. 감싸주는 대상이 있어야함.
      //배열.map = 배열에 조건을 더해 전체 요소 출력할 때 사용. 요소를 구분하기 위해 key값을 주어야 함!
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {this.state.customers
              ? this.state.customers.map((c) => {
                  return (
                    <Customer
                      key={c.id}
                      id={c.id}
                      Image={c.Image}
                      name={c.name}
                      birthday={c.birthday}
                      gender={c.gender}
                      job={c.job}
                    />
                  );
                })
              : ""}
          </TableBody>
        </Table>
      </Paper>
    ); //props을 통해 모듈에 데이터 전달. 조건문 통해 this.state.customers확인하여 오류 메세지 출력 막음
  }
}

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
