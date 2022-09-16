import { render } from "@testing-library/react";
import React from "react";
//import Movies from "./components/Movies";

//state는 동적데이터를 다를때 사용하는 리엑트 요소

// function App() {
//   const [count] = useState{0};
//   console.log("카운트값 :" + count);
//   return <div>함수 컴포넌트</div>;
// }

// //클래스 컴포넌트
// class App extends React.Component {
//   render() {
//     return <div>클래스 컴포넌트</div>;
//   }
// }
// export default App;

class App extends React.Component {
  // APP 클래스 생성자
  constructor(props) {
    super(props); //부모 생성자 호출
    this.state = {
      count: 0,
    };
  }

  증가함수 = () => {
    console.log("증가함수 호출됨");
    // this.setState({
    //   count: this.state.count + 1, //값 설정 방법, 방법1
    // });
    this.setState(function (nowState) {
      return { count: nowState.count + 1 }; //값 설정 방법, 방법2
    });
  };

  감소함수 = () => {
    console.log("감소함수 호출됨");
    // this.setState({
    //   count: this.state.count - 1,//값 설정 방법, 방법1
    // });
    this.setState(function (nowState) {
      return { count: nowState.count - 1 }; //값 설정 방법, 방법2
    });
  };

  render() {
    console.log("랜더함수 호출됨");
    // console.log(this.state);

    return (
      <div>
        <h1>카운터 : {this.state.count}</h1>
        <button onClick={this.증가함수}>+1</button>
        <button onClick={this.감소함수}>-1</button>
      </div>
    );
  }
}
export default App;
