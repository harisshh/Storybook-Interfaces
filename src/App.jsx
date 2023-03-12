// import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';
// import welcomeMessage from './welcome'

// class App extends Component{
//   render(){
//     return{
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//             <welcomeMessage 
//                  name="React enthusiast"/>
//         </p>
//       </div>
//     };
//   }
// }
// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// export default App;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./button_original";
class App extends Component {
  render() {
    //let numberName = 5;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
            <Input/>
            <Button/>
        
      </div>
    );
  }
}
export default App;
