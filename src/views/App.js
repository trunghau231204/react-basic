import logo from './logo.svg';
import React from 'react';
import './App.scss';
import MyComponent from './Example/MyComponent';

//  2 components : class componets / function componet (function /arrow)
// JSX
function App() {
  // const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world from React JS</p>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
