import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body/Body';
import useWebSocket from './hooks/useWebSocket'
import { useCallback, useEffect, useState } from 'react';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import useFetchUserData from './hooks/useFetchUserData';

function App() {


  return (
    <div>
      <Header />
      <Body/>
    </div>
  );
}

export default App;
