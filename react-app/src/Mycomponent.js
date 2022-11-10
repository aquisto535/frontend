import PropTypes from "prop-types";

// 클래스형 컴포넌트
// 1. 컴포넌트 라이브러리 import
// 2. 클래스형 포멧으로 기본 코드 작성(복붙)
// 3. 코드는 render() 함수 안에서 작성
// 4. 
//
//

import React, { Component } from "react";

class Mycomponent extends Component {
  render() {
    const { name, children } = this.props;

    return (
      <div>
        제 이름은 {name}입니다.<br></br>
        {children}
      </div>
    );
  }
}

// const Mycomponent = ({ name, children }) => {
//구조 분해를 통해 코드가 더욱 간결해짐. props.name과 같은 형태 사용 안해도 됨.
//   return (
//     <div>
//       제 이름은 {name}입니다.<br></br>
//       {children}
//     </div>
//   );
//defaultProps(기본)

Mycomponent.defaultProps = {
  name: "맥주 3병 과인 안주",
};

//propTypes
Mycomponent.propTypes = {
  name: PropTypes.string,
};

export default Mycomponent;
