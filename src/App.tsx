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
import Lasers from './step/Lasers';
import Toggle from './step/Toggle';

function App() {
return (
    <div className="App">
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
      <Wrapper>
        <Lasers />
        <Toggle /> 
      </Wrapper>
    </div>
  );
}

export default App;