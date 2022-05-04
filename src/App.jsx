import { ClickPlus } from './components/clickPlus';
import './App.css';
import { useState } from 'react';
import { ClickMinus } from './components/clickMinus';
import { ClickReset} from './components/clickReset'
import { Heading } from '@chakra-ui/react'
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react'

function App() {
  const [num, setNum] = useState(0);
  
  return (
    <div className="App">
      <Heading>plus & minus</Heading>
      <ClickPlus setNum={ setNum }>プラスボタン</ClickPlus>
      <ClickMinus setNum={ setNum }>マイナスボタン</ClickMinus>
      <Stat>
        <StatNumber>増えた数 : {num}</StatNumber>
      </Stat>
      <ClickReset setNum={ setNum }>リセットボタン</ClickReset>
    </div>
  );
}

export default App;
