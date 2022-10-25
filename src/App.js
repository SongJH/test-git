import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [제목,제목변경]=useState(['블로그 첫번째 글','두번째글','세번째 블로그 글','네번째 작성글'])
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      <h4>{제목[0]}</h4>
      <h4>{제목[1]}</h4>
      <h4>{제목[2]}</h4>
  
    </div>
  );
}

export default App;
