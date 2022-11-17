import React, { Component } from "react";

class Event extends Component {
  state = {
    msg: "",
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="msg"
          placeholder="아무거나"
          onChange={(e) => {
              console.log(e.target.value);
              this.setState({
                  msg: e.target.value
                
              })
          }}
          value={this.state.msg}
        ></input>
        <button
          onClick={() => {
            alert(this.state.msg);
            this.setState({
              msg: "",
            });
          }}
        >
          확인
        </button>
      </div>
    );
  }
}

export default Event;
