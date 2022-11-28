import React from "react";

function Event() {
  const [counter, setcounter] = React.useState(0); //useState()는 배열에서 초기값과 그것을 수정할 함수를 인자로 받는다!!
  // 구조 분해 시키는 이유: 각 배열의 값들에게 새로운 변수명을 주기 위해서

  const onClick = () => {
    //setcounter(counter + 1);
    setcounter((current) => current + 1); //이 방법이 더 안전함.current가 현재 값임을 보장함!!
  };

  return (
    <div>
      <h3>Total clicks : {counter} </h3>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default Event;
