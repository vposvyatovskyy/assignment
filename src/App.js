import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import Body from './components/Body';
import useWebSocket from './hooks/useWebSocket'
import { useCallback, useEffect, useState } from 'react';
import { faSmile } from '@fortawesome/free-regular-svg-icons';

function App() {
  const url = "ws://webtask.future-processing.com:8068/ws/currencies";
  const data = useWebSocket(url);
  console.log(data);

  const content = <Body data={data} />

  return (
    <div>
      <Header />
      {typeof data === "undefined" ? <h1>Not Done</h1> : <Body data={data} />}
    </div>
  );
}

export default App;
