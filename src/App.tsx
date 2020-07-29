import React from 'react';
import './App.css';
import { Card } from './components/Card';
import { Clock } from './components/Clock';
import { Notice } from './components/Notice';
import { Wrapper } from './components/Wrapper';
import { Button } from './components/Button';
import { Synth } from './components/Synth';
import { Article } from './components/Article';
import { Counter } from './components/Counter';
import Tick from './step/Tick';
import Calculator from './step/Calculator';
import Bcentral from './step/Bcentral';
import Login from './step/Login';

function App() {
return (
    <div className="App">
      <Login />
      <Wrapper>
        <Card title="OK" paragraph="Whatever, dude" />
        <Card title="L8r">
          <Button>Baronkinas</Button>
        </Card>
        <Clock />
      </Wrapper>
      <Wrapper>
        <Notice msg="overriding..." />
        <Article title="O kaip tik" />
        <Counter />
      </Wrapper>
      <Synth />
      <Tick />
      <Bcentral />
      <Wrapper>
        <Calculator />
      </Wrapper>
    </div>
  );
}

export default App;